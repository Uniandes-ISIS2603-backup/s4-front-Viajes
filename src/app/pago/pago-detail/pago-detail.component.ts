import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';


import {PagoService} from '../pago.service';
import {Pago} from '../pago';
import {PagoDetail} from '../pago-detail';

@Component({
    selector: 'app-pago-detail',
    templateUrl: './pago-detail.component.html',
    styleUrls: ['./pago-detail.component.css']
})
export class PagoDetailComponent implements OnInit, OnDestroy {

    /**
    * The constructor of the component
    * @param bookService The book service which communicates with the API
    * @param route The route which helps to retrieves the id of the book to be shown
    * @param router The router which is needed to know when the component needs to reload
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private pagoService: PagoService,
        private route: ActivatedRoute,
        private router: Router
    ) {
        //This is added so we can refresh the view when one of the books in
        //the "Other books" list is clicked
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
            if (e instanceof NavigationEnd) {
                this.ngOnInit();
            }
        });
    }

    /**
    * The book's id retrieved from the path
    */
    pago_id: number;

    /**
    * The book whose details are shown
    */
    pagoDetail:  PagoDetail;

    /**
    * The other books shown in the sidebar
    */
    other_pagos:  Pago[];

    /**
    * The suscription which helps to know when a new book
    * needs to be loaded
    */
    navigationSubscription;

    showEdit: boolean;


    /**
    * The method which retrieves the details of the book that
    * we want to show
    */
    getPagoDetail(): void {
        this.pagoService.getPagoDetail(this.pago_id)
            .subscribe(pagoDetail => {
                this.pagoDetail = pagoDetail;
            });
    }

    /**
    * This method retrieves all the books in the Bookstore to show them in the list
    */
    getOtherPagos(): void {
        this.pagoService.getPagos()
            .subscribe(pagos => {
                this.other_pagos = pagos;
                this.other_pagos = this.other_pagos.filter(pago => pago.id !== this.pago_id);
            });
    }


    /**
    * The method which initilizes the component
    * We need to initialize the book and its editorial so that
    * they are never considered undefined
    */
    ngOnInit() {
        this.pago_id = +this.route.snapshot.paramMap.get('id');
        this.pagoDetail = new PagoDetail();
        this.getPagoDetail();
        this.getOtherPagos();
        this.showEdit = true;
    }

    /**
    * This method helps to refresh the view when we need to load another book into it
    * when one of the other books in the list is clicked
    */
    ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }
}
