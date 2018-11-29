import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';

import {DatePipe} from '@angular/common';
import {AlojamientoService} from '../alojamiento.service';
import {AlojamientoDetail} from '../alojamiento-detail';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-alojamiento-edit',
  templateUrl: './alojamiento-edit.component.html',
  styleUrls: ['./alojamiento-edit.component.css'],
  providers: [DatePipe]
})
export class AlojamientoEditComponent implements OnInit, OnChanges {

  /**
   * Constructor for the component
   * @param dp DatePipe to format the date.
   * @param alojamientoService The authors' services provider
   * @param toastrService The toastr to show messages to the user
   */
  constructor(
    private dp: DatePipe,
    private alojamientoService: AlojamientoService,
    private toastrService: ToastrService,
  ) {
  }

  /**
   * The author id as received from the parent component
   */
  @Input() alojamiento: AlojamientoDetail;

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
  editAlojamiento(): void {
    this.alojamientoService.updateAlojamiento(this.alojamiento)
      .subscribe(() => {
        this.toastrService.success("La informacion del alojamiento fue actualizada.", "Alojamiento edition");
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
  }

  /**
   * This function will be called when the user chooses another author to edit
   */
  ngOnChanges() {
    this.ngOnInit();
  }
}
