import { Component, OnInit } from '@angular/core';

import {Vuelo} from '../vuelo';
import {VueloService} from '../vuelo.service';

/**
 * The component for the list of vuelos in TripBuilder
 */
@Component({
  selector: 'app-vuelo',
  templateUrl: './vuelo-list.component.html',
  styleUrls: ['./vuelo-list.component.css']
})
export class VueloListComponent implements OnInit {

    /**
     * Constructor of the component
     * @param vueloService The vuelo services provider
     */
    constructor(private vueloService: VueloService) {}

    /**
     * The list of vuelos in TripBuilder
     */
    vuelos: Vuelo[];

    /**
     * Asks the service to update the list of vuelos
     */
    getVuelos(): void {
        this.vueloService.getVuelos()
            .subscribe(vuelos => this.vuelos = vuelos);
    }

    /**
     * This will initialize the component by retrieving the list of vuelos from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.getVuelos();
    }
}
