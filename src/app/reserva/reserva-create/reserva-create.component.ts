import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

import {ReservaService} from '../reserva.service';
import {VueloService} from '../../vuelo/vuelo.service';
import {Reserva} from '../reserva';
import {Vuelo} from '../../vuelo/vuelo';

@Component({
    selector: 'app-reserva-create',
    templateUrl: './reserva-create.component.html',
    styleUrls: ['./reserva-create.component.css'],
    providers: [DatePipe]
})
export class ReservaCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param reservaService EL proveedor de los servicios de las reservas
    * @param vueloService EL proveedor de los servicios de los vuelos
    * @param toastrService The toastr to show messages to the user
    * @param router The router
    */
    constructor(
        private dp: DatePipe,
        private reservaService: ReservaService,
        private vueloService: VueloService,
        private toastrService: ToastrService,
        private router: Router
    ) {}

    /**
    * The new book
    */
    reserva: Reserva;

  
    /**
    * The list of all the editorials in the BookStore
    */
    vuelos: Vuelo[];

   

    /**
    * Retrieves the list of editorials in the BookStore
    */
    getVuelos(): void {
        this.vueloService.getVuelos()
            .subscribe(vuelos => {
                this.vuelos = vuelos;
            }, err => {
                this.toastrService.error(err, 'Error');
            });
    }

    /**
    * Cancela la creacion de la nueva resrva
    * Redirecciona a las reservas de la pagina
    */
    cancelCreation(): void {
        this.toastrService.warning('La reserva no fue creada', 'Reserva creation');
        this.router.navigate(['/reservas/list']);
    }

    /**
    * Crea una nueva reserva
    */
    createReserva(): Reserva {
        let dateB: Date = new Date(this.reserva.fechaInicio.year, this.reserva.fechaInicio.month - 1, this.reserva.fechaInicio.day);
        this.reserva.fechaInicio = this.dp.transform(dateB, 'yyyy-MM-dd');
        let dateC: Date = new Date(this.reserva.fechaFin.year, this.reserva.fechaFin.month - 1, this.reserva.fechaFin.day);
        this.reserva.fechaFin = this.dp.transform(dateC, 'yyyy-MM-dd');
        this.reservaService.createReserva(this.reserva)
            .subscribe(reserva => {
                this.reserva.id = reserva.id;
                this.router.navigate(['/reservas/' + reserva.id]);
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.reserva;
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.reserva = new Reserva();
        this.reserva.vuelo = new Vuelo();
        this.getVuelos();
    }

}
