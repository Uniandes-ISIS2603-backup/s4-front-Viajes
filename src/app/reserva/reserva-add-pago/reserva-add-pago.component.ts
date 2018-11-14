import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

import { Pago } from '../../pago/pago';
import { ReservaService } from '../reserva.service';
import { Reserva } from '../../reserva/reserva';
@Component({
    selector: 'app-reserva-add-pago',
    templateUrl: './reserva-add-pago.component.html',
    styleUrls: ['./reserva-add-pago.component.css']
})
export class ReservaAddPagoComponent implements OnInit, OnChanges {

    /**
    * The constructor of the component
    * @param bookService The book service which communicates with the API
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private reservaService: ReservaService,
        private toastrService: ToastrService
    ) { }

    /**
    * The book's id
    */
    @Input() reserva: Reserva;

    /**
    * The review to post
    */
    pago: Pago;
    
    public isCollapsed = true;

    /**
    * The Event Emitter which sends the signal when a review has just been posted
    * so that the list of reviews refreshes
    */
    @Output() updatePagos = new EventEmitter();
    
    
    /**
    * The output which tells the parent component
    * that the user no longer wants to create an editorial
    */
    @Output() cancel = new EventEmitter();

    /**
    * This function posts a review
    * @param reviewForm The form of the review
    */
    postPago(pagoForm: NgForm): Pago {
        this.pago.idReservaAPagar = this.reserva.id;
        this.reservaService.createPago(this.pago)
            .subscribe(() => {
                pagoForm.resetForm();
                this.updatePagos.emit();
                this.toastrService.success("The pago was successfully created", 'Pago added');
                this.reserva.pagada=true;
//              TODO PERSISTIR ESTOOOOOO 
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.pago;
    }

    /**
    * The function which initializes the component.
    */
    ngOnInit() {
        this.pago = new Pago();
    }
    
    /**
    * Informs the parent component that the user no longer wants to create an editorial
    */
    cancelCreation(): void {
        this.cancel.emit();
    }

    /**
    * The function which notices that the input which defines the book_id has changed.
    * If the book has changed, we update the reviews to show
    */
    ngOnChanges() {
        this.ngOnInit();
    }

}
