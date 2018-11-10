import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

import { Reserva } from '../../reserva/reserva';
import { ComboService } from '../combo.service';
import { Combo } from '../../combo/combo';
@Component({
    selector: 'app-combo-add-reserva',
    templateUrl: './combo-add-reserva.component.html',
    styleUrls: ['./combo-add-reserva.component.css']
})
export class ComboAddReservaComponent implements OnInit, OnChanges {

    /**
    * The constructor of the component
    * @param bookService The book service which communicates with the API
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private comboService: ComboService,
        private toastrService: ToastrService
    ) { }

    /**
    * The book's id
    */
    @Input() combo: Combo;

    /**
    * The review to post
    */
    reserva: Reserva;
    
    public isCollapsed = true;

    /**
    * The Event Emitter which sends the signal when a review has just been posted
    * so that the list of reviews refreshes
    */
    @Output() updateReservas = new EventEmitter();

    /**
    * This function posts a review
    * @param reviewForm The form of the review
    */
    postReserva(reservaForm: NgForm): Reserva {
        this.comboService.createReserva(this.combo.id,this.reserva)
            .subscribe(() => {
                reservaForm.resetForm();
                this.updateReservas.emit();
                this.toastrService.success("The reserva was successfully created", 'Reserva added');
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.reserva;
    }

    /**
    * The function which initializes the component.
    */
    ngOnInit() {
        this.reserva = new Reserva();
    }

    /**
    * The function which notices that the input which defines the book_id has changed.
    * If the book has changed, we update the reviews to show
    */
    ngOnChanges() {
        this.ngOnInit();
    }

}
