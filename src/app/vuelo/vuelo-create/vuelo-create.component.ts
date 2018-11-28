import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DatePipe} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {VueloService} from '../../vuelo/vuelo.service';
import {ToastrService} from 'ngx-toastr';
import {Vuelo} from '../vuelo';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-vuelo-create',
  templateUrl: './vuelo-create.component.html',
  styleUrls: ['./vuelo-create.component.css'],
  providers : [DatePipe]
})
export class VueloCreateComponent implements OnInit {

  constructor(
    private dp: DatePipe,
    private vueloService: VueloService,
    private toastrService: ToastrService
  ) { }

  /**
   * The new author
   */
  vuelo: Vuelo;

  /**
   * The output which tells the parent component
   * that the user no longer wants to create an author
   */
  @Output() cancel = new EventEmitter();

  /**
   * The output which tells the parent component
   * that the user created a new author
   */
  @Output() create = new EventEmitter();

  /**
   * Creates an author
   */
    createVuelo(): Vuelo {
    console.log(this.vuelo);
    for (let i of this.vuelo.fechasDisponibles)
    {
      const fechaS: Date = new Date(this.vuelo.fechasDisponibles[i].year, this.vuelo.fechasDisponibles[i].month - 1, this.vuelo.fechasDisponibles[i].day, this.vuelo.fechasDisponibles[i].hour);
      this.vuelo.fechasDisponibles[i] = this.dp.transform(fechaS, 'yyyy-MM-dd-hh');
    }
    for (let i of this.vuelo.fechasLlegada)
    {
      const fechaL: Date = new Date(this.vuelo.fechasLlegada[i].year, this.vuelo.fechasLlegada[i].month - 1, this.vuelo.fechasLlegada[i].day, this.vuelo.fechasLlegada[i].hour);
      this.vuelo.fechasLlegada[i] = this.dp.transform(fechaL, 'yyyy-MM-dd-hh');
    }
    console.log(this.vuelo);
    this.vueloService.createVuelo(this.vuelo)
      .subscribe((vuelo) => {
        this.vuelo = vuelo;
        this.create.emit();
        this.toastrService.success("El vueo fue creado", "Creaciòn del vuelo");
      });
    return this.vuelo;
  }

  /**
   * Emits the signal to tell the parent component that the
   * user no longer wants to create an user
   */
  cancelCreation(): void {
    this.cancel.emit();
  }

  /**
   * This function will initialize the component
   */
  ngOnInit() {
    this.vuelo = new Vuelo();
  }

}
