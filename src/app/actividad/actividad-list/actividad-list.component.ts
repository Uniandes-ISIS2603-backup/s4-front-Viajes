import { Component, OnInit, Output } from '@angular/core';
import { Actividad } from '../actividad';
import { ActividadService } from '../actividad.service';

/**
 * The component for the list of activities in TripBuilder
 */
@Component({
    selector: 'app-actividad',
    templateUrl: './actividad-list.component.html',
    styleUrls: ['./actividad-list.component.css']
})
export class ActividadListComponent implements OnInit {

    /**
     * Constructor of the component
     * @param TripBuilder The activities's services provider
     */
    constructor(private actividadService: ActividadService) { }

    /**
     * The list of activities in TripBuilder
     */
    actividades: Actividad[];

    /**
     * Asks the service to update the list of activities
     */
    getActividades(): void {
        this.actividadService.getActividades()
            .subscribe(actividades => this.actividades = actividades);
    }

    /**
     * This will initialize the component by retrieving the list of activities from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.getActividades();
    }
}




