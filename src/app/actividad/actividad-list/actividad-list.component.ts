import { Component, OnInit, Output, ViewContainerRef } from '@angular/core';
import { Actividad } from '../actividad';
import { ActividadService } from '../actividad.service';
import { ActividadDetail } from '../actividad-detail';
import {ToastrService} from 'ngx-toastr';

import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';

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
    constructor(
    private actividadService: ActividadService,
    private modalDialogService: ModalDialogService,
    private viewRef: ViewContainerRef,
    private toastrService: ToastrService
    ) { }

    /**
     * The list of activities in TripBuilder
     */
     
    showCreate:boolean;
    showEdit:boolean;
    actividades: Actividad[];
    actividad_id: number;
    selectedActividad: Actividad;
    
    /**
     * The id of the editorial being edited.
     */
    actividad_edit_id: number;
    
      /**
    * Shows or hides the create component
    */
    showHideCreate(): void {
        this.showEdit = false;
        this.showCreate = !this.showCreate!
    }
    
     /**
    * Shows or hides the create component
    */
    showHideEdit(actividad_id: number): void {
        if (!this.showEdit || (this.showEdit && actividad_id != this.actividad_edit_id)) {
            this.showCreate = false;
            this.showEdit = true;
            this.actividad_edit_id = actividad_id;
        }
        else {
            this.showEdit = false;
        }
    }

    updateActividad(): void {
        this.showEdit = false;
    }
    
    /**
    * Deletes an editorial
    */
    deleteActividad(actividadId): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Borrar una actividad',
            childComponent: SimpleModalComponent,
            data: {text: 'Quiere borrar una actividad de TripBuilder?'},
            actionButtons: [
                {
                    text: 'Yes',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.actividadService.deleteActividad(actividadId).subscribe(() => {
                            this.toastrService.error("La actividad se borro correctamente", "Actividad borrada");
                            this.ngOnInit();
                        }, err => {
                            this.toastrService.error(err, "Error");
                        });
                        return true;
                    }
                },
                {text: 'No', onAction: () => true}
            ]
        });
    }


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
        this.showEdit = false;
        this.showDelete = false;
        this.getActividades();
    }
}




