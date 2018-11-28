import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';

import {DatePipe} from '@angular/common';
import {VueloService} from '../vuelo.service';
import {VueloDetail} from '../vuelo-detail';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-vuelo-edit',
  templateUrl: './vuelo-edit.component.html',
  styleUrls: ['./vuelo-edit.component.css'],
  providers: [DatePipe]
})
export class VueloEditComponent implements OnInit, OnChanges {

  /**
   * Constructor for the component
   * @param dp DatePipe to format the date.
   * @param vueloService The authors' services provider
   * @param toastrService The toastr to show messages to the user
   */
  constructor(
    private dp: DatePipe,
    private vueloService: VueloService,
    private toastrService: ToastrService,
  ) {
  }

  /**
   * The author id as received from the parent component
   */
  @Input() vuelo: VueloDetail;

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
  editVuelo(): void {
    for (let i of this.vuelo.fechasDisponibles) {
      const fechaS: Date = new Date(this.vuelo.fechasDisponibles[i].year, this.vuelo.fechasDisponibles[i].month - 1, this.vuelo.fechasDisponibles[i].day, this.vuelo.fechasDisponibles[i].hour);
      this.vuelo.fechasDisponibles[i] = this.dp.transform(fechaS, 'yyyy-MM-dd-hh');
    }
    for (let i of this.vuelo.fechasLlegada) {
      const fechaL: Date = new Date(this.vuelo.fechasLlegada[i].year, this.vuelo.fechasLlegada[i].month - 1, this.vuelo.fechasLlegada[i].day, this.vuelo.fechasLlegada[i].hour);
      this.vuelo.fechasLlegada[i] = this.dp.transform(fechaL, 'yyyy-MM-dd-hh');
    }
    this.vueloService.updateVuelo(this.vuelo)
      .subscribe(() => {
        this.toastrService.success("The vuelos information was updated", "Vuelo edition");
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
    for(let i of this.vuelo.fechasDisponibles)
    {
    if (this.vuelo && this.vuelo.fechasDisponibles[i]) {
      this.vuelo.fechasDisponibles[i] = this.vuelo.fechasDisponibles[i].substring(0, 10);
      var date = {
        day: + this.vuelo.fechasDisponibles[i].split('-')[2],
        month: + this.vuelo.fechasDisponibles[i].split('-')[1],
        year: + this.vuelo.fechasDisponibles[i].split('-')[0]
      };
      this.vuelo.fechasDisponibles[i] = date;
    }
    }
    for(let i of this.vuelo.fechasLlegada)
    {
      if (this.vuelo && this.vuelo.fechasLlegada[i]) {
        this.vuelo.fechasLlegada[i] = this.vuelo.fechasLlegada[i].substring(0, 10);
        var date = {
          day: + this.vuelo.fechasLlegada[i].split('-')[2],
          month: + this.vuelo.fechasLlegada[i].split('-')[1],
          year: + this.vuelo.fechasLlegada[i].split('-')[0]
        };
        this.vuelo.fechasLlegada[i] = date;
      }
    }
  }

  /**
   * This function will be called when the user chooses another author to edit
   */
  ngOnChanges() {
    this.ngOnInit();
  }
}
