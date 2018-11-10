import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';


import {ComboService} from '../combo.service';
import {Combo} from '../combo';
import {ComboDetail} from '../combo-detail';
import {ComboReservaComponent} from '../combo-reservas/combo-reserva.component';
import {ComboAddReservaComponent} from '../combo-add-reserva/combo-add-reserva.component';

@Component({
    selector: 'app-combo-detail',
    templateUrl: './combo-detail.component.html',
    styleUrls: ['./combo-detail.component.css']
})
export class ComboDetailComponent implements OnInit, OnDestroy {

    /**
    * The constructor of the component
    * @param bookService The book service which communicates with the API
    * @param route The route which helps to retrieves the id of the book to be shown
    * @param router The router which is needed to know when the component needs to reload
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private comboService: ComboService,
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
    combo_id: number;

    /**
    * The book whose details are shown
    */
    comboDetail: ComboDetail;

    /**
    * The other books shown in the sidebar
    */
    other_combos: Combo[];

    /**
    * The suscription which helps to know when a new book
    * needs to be loaded
    */
    navigationSubscription;

    showEdit: boolean;

    /**
     * The child BookReviewListComponent
     */
    @ViewChild(ComboReservaComponent) reservaListComponent: ComboReservaComponent;

    /**
     * The child BookReviewListComponent
     */
    @ViewChild(ComboAddReservaComponent) reservaAddComponent: ComboAddReservaComponent;

    toggleReservas(): void {
        if (this.reservaAddComponent.isCollapsed == false) {
            this.reservaAddComponent.isCollapsed = true;
        }
        this.reservaListComponent.isCollapsed = !this.reservaListComponent.isCollapsed;
    }

    toggleCreateReserva(): void {
        if (this.reservaListComponent.isCollapsed == false) {
            this.reservaListComponent.isCollapsed = true;
        }
        this.reservaAddComponent.isCollapsed = !this.reservaAddComponent.isCollapsed;
    }


    /**
    * The method which retrieves the details of the book that
    * we want to show
    */
    getComboDetail(): void {
        this.comboService.getComboDetail(this.combo_id)
            .subscribe(comboDetail => {
                this.comboDetail =comboDetail;
            });
    }

    /**
    * This method retrieves all the books in the Bookstore to show them in the list
    */
    getOtherCombos(): void {
        this.comboService.getCombos()
            .subscribe(combos => {
                this.other_combos = combos;
                this.other_combos = this.other_combos.filter(combo => combo.id !== this.combo_id);
            });
    }

    /**
     * The function called when a review is posted, so that the child component can refresh the list
     */
    updateReviews(): void {
        this.getComboDetail();
        this.reservaListComponent.updateReservas(this.comboDetail.reservas);
        this.reservaListComponent.isCollapsed = false;
        this.reservaAddComponent.isCollapsed = true;
    }

    /**
    * The method which initilizes the component
    * We need to initialize the book and its editorial so that
    * they are never considered undefined
    */
    ngOnInit() {
        this.combo_id = +this.route.snapshot.paramMap.get('id');
        this.comboDetail = new ComboDetail();
        this.getComboDetail();
        this.getOtherCombos();
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
