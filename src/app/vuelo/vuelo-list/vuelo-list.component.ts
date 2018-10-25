import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';

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
    constructor(private vueloService: VueloService, private route: ActivatedRoute) {}

    allvuelos:string = 'no';
    /**
     * The list of vuelos in TripBuilder
     */
    @Input() vuelos: Vuelo[];

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
      this.route.queryParams
        .filter(params => params.allvuelos)
        .subscribe(params => {
          console.log(params);

          this.allvuelos = params.allvuelos;
          console.log(this.allvuelos);
        });
      if (this.allvuelos == 'yes'){
        console.log("allvuelos");

        this.getVuelos();
      }
    }
}
