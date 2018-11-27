import { Component, OnInit, Output } from '@angular/core';
import { Actividad } from '../actividad';
import { ActividadService } from '../actividad.service';
import { ActividadDetail } from '../actividad-detail';

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
    actividad_id: number;
    selectedActividad: Actividad;

  /**
   * Shows or hides the author-create-component
   */
  showCreate: boolean;

    actividadActual(actividad_id: number): Actividad {

        this.actividad_id = actividad_id;
        this.selectedActividad = new ActividadDetail();
        this.getActividadDetail();
        return this.selectedActividad;

    }

    onSelected(actividad_id: number): void {
      this.showCreate = false;
        this.actividad_id = actividad_id;
        this.selectedActividad = new ActividadDetail();
        this.getActividadDetail();


    }

  /**
   * Shows or hides the create component
   */
  showHideCreate(): void {
    if (this.selectedActividad) {
      this.selectedActividad = undefined;
      this.actividad_id = undefined;
    }
    this.showCreate = !this.showCreate;
  }

    /**
     * Asks the service to update the list of activities
     */
    getActividades(): void {
        this.actividadService.getActividades()
            .subscribe(actividades => this.actividades = actividades);
    }

    getActividadDetail(): void {
        this.actividadService.getActividadDetail(this.actividad_id)
            .subscribe(selectedActividad => {
                this.selectedActividad = selectedActividad
            });
    }

    /**
     * This will initialize the component by retrieving the list of activities from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
      this.showCreate = false;
        this.getActividades();
    }
}




