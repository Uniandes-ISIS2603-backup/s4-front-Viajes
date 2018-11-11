import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/filter';


import {Reserva} from '../../reserva/reserva';
import {ReservaService} from '../../reserva/reserva.service';
@Component({
    selector: 'app-reserva-list',
    templateUrl: './reserva-list.component.html',
    styleUrls: ['./reserva-list.component.css']
})
export class ReservaListComponent implements OnInit {

    /**
    * The list of reservas to display
    */
    @Input() reservas: Reserva[];

    /**
    * The component's constructor
    */
    constructor(private reservaService: ReservaService, private route: ActivatedRoute) {}

    allreservas: string = 'no';
    /**
    * This method retrieves all the reservas to show them in the list
    */
    getReservas(): void {
        this.reservaService.getReservas()
            .subscribe(reservas => {
                this.reservas = reservas;
            });
    }

    /**
    * The method which initializes the component
    */
    ngOnInit() {
        this.route.queryParams
            .filter(params => params.allreservas)
            .subscribe(params => {
                console.log(params);

                this.allreservas = params.allreservas;
                console.log(this.allreservas);
            });
        if (this.allreservas == 'yes') {
            console.log("allreservas");

            this.getReservas();
        }
    }

}
