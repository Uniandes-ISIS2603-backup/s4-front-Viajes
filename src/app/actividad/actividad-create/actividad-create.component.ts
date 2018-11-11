import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {Router} from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { ActividadService } from '../actividad.service';

import { Actividad } from '../actividad';

@Component({
    selector: 'app-actividad-create',
    templateUrl: './actividad-create.component.html',
    styleUrls: ['./actividad-create.component.css']
})
export class ActividadCreateComponent implements OnInit {

  /**
   * Constructor for the component
   * @param editorialService The editorials' services provider
   * @param toastrService The toastr to show messages to the user
   */
  constructor(
    private actividadService: ActividadService,
    private toastrService: ToastrService,
    private router: Router
  ) {
  }

  /**
   * The new editorial
   */
  actividad: Actividad;

  /**
   * The output which tells the parent component
   * that the user no longer wants to create an editorial
   */
  @Output() cancel = new EventEmitter();

  /**
   * The output which tells the parent component
   * that the user created a new editorial
   */
  @Output() create = new EventEmitter();

    /**
    * Creates an activity
    */
    createActividad(): Actividad {
        console.log(this.actividad);
        this.actividadService.createActividad(this.actividad)
            .subscribe((actividad) => {
                this.actividad = actividad;
                this.create.emit();
                this.toastrService.success("La actividad fue creada", "Creacion de actividad");
                
            });
            return this.actividad;
    }
 

  /**
   * Informs the parent component that the user no longer wants to create an editorial
   */
  cancelCreation(): void {
    this.cancel.emit();
  }

  /**
   * This function will initialize the component
   */
  ngOnInit() {
    this.actividad = new Actividad();
  }
}
