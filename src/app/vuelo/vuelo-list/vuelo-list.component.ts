import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';

import {Vuelo} from '../vuelo';
import {VueloService} from '../vuelo.service';
import {VueloDetail} from '../vuelo-detail';

/**
 * The component for the list of vuelos in TripBuilder
 */
@Component({
  selector: 'app-vuelo-list',
  templateUrl: './vuelo-list.component.html',
  styleUrls: ['./vuelo-list.component.css']
})
export class VueloListComponent implements OnInit {
    /**
     * Constructor of the component
     * @param vueloService The vuelo services provider
     */
    constructor(private vueloService: VueloService, private route: ActivatedRoute) {}

    @Input() vuelos: Vuelo[];
    vuelo_id: number;
    selectedVuelo : Vuelo;

  /**
   * Shows or hides the author-create-component
   */
  showCreate: boolean;

    onSelected(vuelo_id: number):void {
      this.showCreate = false;
      this.vuelo_id = vuelo_id;
    this.selectedVuelo = new class implements VueloDetail {
      costo: number;
      destino: string;
      disponibilidadFecha: any[];
      duracion: number;
      fechasDisponibles: any[];
      fechasLlegada: any[];
      id: number;
      imagen: string;
      latitud: number;
      latitudDestino: number;
      longitud: number;
      longitudDestino: number;
      nombre: string;
      origen: string;
      puntuacion: number;
      vuelo: Vuelo[];
    }
    this.getVueloDetail();
  }

  /**
   * Shows or hides the create component
   */
  showHideCreate(): void {
    if (this.selectedVuelo) {
      this.selectedVuelo = undefined;
      this.vuelo_id = undefined;
    }
    this.showCreate = !this.showCreate;
  }

    /**
     * Asks the service to update the list of vuelos
     */
    getVuelos(): void {
        this.vueloService.getVuelos()
            .subscribe(vuelos => this.vuelos = vuelos);
    }

    getVueloDetail(): void {
    this.vueloService.getVueloDetail(this.vuelo_id)
      .subscribe(selectedVuelo => {
        this.selectedVuelo = selectedVuelo
      });
    }

    /**
     * This will initialize the component by retrieving the list of vuelos from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
      this.showCreate = false;
      this.selectedVuelo = undefined;
      this.vuelo_id = undefined;
      this.getVuelos();
    }
}
