import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';


import {ReservaService} from '../reserva.service';
import {Reserva} from '../reserva';
import {ReservaDetail} from '../reserva-detail';

@Component({
    selector: 'app-reserva-detail',
    templateUrl: './reserva-detail.component.html',
    styleUrls: ['./reserva-detail.component.css']
})
export class ReservaDetailComponent implements OnInit, OnDestroy {

    /**
    * The constructor of the component
    * @param bookService The book service which communicates with the API
    * @param route The route which helps to retrieves the id of the book to be shown
    * @param router The router which is needed to know when the component needs to reload
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private reservaService: ReservaService,
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
    reserva_id: number;

    /**
    * The book whose details are shown
    */
    reservaDetail:  ReservaDetail;

    /**
    * The other books shown in the sidebar
    */
    other_reservas:  Reserva[];

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
    getReservaDetail(): void {
        this.reservaService.getReservaDetail(this.reserva_id)
            .subscribe(reservaDetail => {
                this.reservaDetail = reservaDetail;
            });
    }

    /**
    * This method retrieves all the books in the Bookstore to show them in the list
    */
    getOtherReservas(): void {
        this.reservaService.getReservas()
            .subscribe(reservas => {
                this.other_reservas = reservas;
                this.other_reservas = this.other_reservas.filter(reserva => reserva.id !== this.reserva_id);
            });
    }


    /**
    * The method which initilizes the component
    * We need to initialize the book and its editorial so that
    * they are never considered undefined
    */
    ngOnInit() {
        this.reserva_id = +this.route.snapshot.paramMap.get('id');
        this.reservaDetail = new ReservaDetail();
        this.getReservaDetail();
        this.getOtherReservas();
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
