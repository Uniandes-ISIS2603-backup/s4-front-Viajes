import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import {ActividadService} from '../actividad.service';
import {ActividadDetail} from '../actividad-detail';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-actividad-calificar',
  templateUrl: './actividad-calificar.component.html',
  styleUrls: ['./actividad-calificar.component.css']
})
export class ActividadCalificarComponent implements OnInit {

  constructor(
    private actividadService: ActividadService,
    private toastrService: ToastrService
  ) {
  }

  /**
   * The author id as received from the parent component
   */
  @Input() actividad: ActividadDetail;

  /**
   * The output which tells the parent component
   * that the user no longer wants to create an author
   */
  @Output() cancel = new EventEmitter();

  /**
   * The output which tells the parent component
   * that the user updated a new author
   */
  @Output() update = new EventEmitter();

  /**
   * Updates the information of the author
   */
  calificarActividad(): void {
    this.actividadService.updateActividad(this.actividad)
      .subscribe(() => {
        this.toastrService.success("La actividad fue calificada", "Calificar actividad");
      });
    this.update.emit();
  }

  /**
   * Emits the signal to tell the parent component that the
   * user no longer wants to create an user
   */
  cancelEdition(): void {
    this.cancel.emit();
  }
  /**
   * This function will initialize the component
   */
  ngOnInit() {
    this.calificarActividad();
  }

  /**
   * This function will be called when the user chooses another author to edit
   */
  ngOnChanges(){
    this.ngOnInit();
  }

}

