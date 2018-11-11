import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

import {PagoService} from '../pago.service';
import {ReservaService} from '../../reserva/reserva.service';
import {Pago} from '../pago';
import {Reserva} from '../../reserva/reserva';

@Component({
    selector: 'app-pago-create',
    templateUrl: './pago-create.component.html',
    styleUrls: ['./pago-create.component.css'],
    providers: [DatePipe]
})
export class PagoCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param reservaService EL proveedor de los servicios de las reservas
    * @param vueloService EL proveedor de los servicios de los vuelos
    * @param toastrService The toastr to show messages to the user
    * @param router The router
    */
    constructor(
        private dp: DatePipe,
        private pagoService: PagoService,
        private reservaService: ReservaService,
        private toastrService: ToastrService,
        private router: Router
    ) {}

    /**
    * The new book
    */
    pago: Pago;

  
    /**
    * The list of all the editorials in the BookStore
    */
    reservas: Reserva[];

   

    /**
    * Retrieves the list of editorials in the BookStore
    */
    getReservas(): void {
        this.reservaService.getReservas()
            .subscribe(reservas => {
                this.reservas = reservas;
            }, err => {
                this.toastrService.error(err, 'Error');
            });
    }

    /**
    * Cancela la creacion de la nueva resrva
    * Redirecciona a las reservas de la pagina
    */
    cancelCreation(): void {
        this.toastrService.warning('EL pago no fue creado', 'Pago creation');
        this.router.navigate(['/pagos/list']);
    }

    /**
    * Crea una nueva reserva
    */
    createPago(): Pago {
        
        this.pagoService.createPago(this.pago)
            .subscribe(pago => {
                this.pago.id = pago.id;
                this.router.navigate(['/pagos/' + pago.id]);
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.pago;
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.pago = new Pago();
        this.pago.reserva = new Reserva();
        this.getReservas();
    }

}
