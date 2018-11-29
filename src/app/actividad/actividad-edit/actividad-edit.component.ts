import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

import {ActividadService} from '../actividad.service';
import {ActividadDetail} from '../actividad-detail';


@Component({
    selector: 'app-actividad-edit',
    templateUrl: './actividad-edit.component.html',
    styleUrls: ['./actividad-edit.component.css']
})
export class ActividadEditComponent implements OnInit {

    /**
    * The component's constructor
    * @param editorialService The editorial's service
    * @param toastrService The toastr to show messages to the user 
    */
    constructor(
        private actividadService: ActividadService,
        private toastrService: ToastrService
    ) {}

    /**
    * The id of the editorial that the user wants to edit
    * This is passed as a parameter by the parent component
    */
    @Input() actividad_id: number;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an editorial
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user updated a new editorial
    */
    @Output() update = new EventEmitter();

    /**
    * The editorial to edit
    */
    actividad: ActividadDetail;

    /**
    * Retrieves the information of the editorial
    */
    getActividad(): void {
        this.actividadService.getActividadDetail(this.actividad_id)
            .subscribe(actividad => {
                this.actividad = actividad;
            });
    }

    /**
    * Updates the editorial's information
    */
    editActividad(): void {
        this.actividadService.updateActividad(this.actividad_id,this.actividad)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("The activity's information was updated", "Activity edition");
            });
    }

    /**
    * Informs the parent component that the user no longer wants to update the editorial
    */
    cancelEdition(): void {
        this.cancel.emit();
    }

    /**
    * The function which initializes the component
    */
    ngOnInit() {
        this.actividad = new ActividadDetail();
        this.getActividad();
    }

    /**
    * The function which is called every time the user chooses to edit a different editorial
    */
    ngOnChanges() {
        this.ngOnInit();
    }
}
