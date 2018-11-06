import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DatePipe} from '@angular/common';
import {VueloService} from '../../vuelo/vuelo.service';
import {ToastrService} from 'ngx-toastr';
import {Vuelo} from '../vuelo';
type DateString = {month: number,day: number,year: number};

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
    let fechaS: Date = new Date((<DateString>this.vuelo.fechaSalida).year,(<DateString>this.vuelo.fechaSalida).month,(<DateString>this.vuelo.fechaSalida).day);
    this.vuelo.fechaSalida = this.dp.transform(fechaS, 'yyyy-MM-dd');
    console.log(this.vuelo)
    console.log(this.vuelo);
    let fechaL: Date = new Date((<DateString>this.vuelo.fechaLlegada).year,(<DateString>this.vuelo.fechaLlegada).month,(<DateString>this.vuelo.fechaLlegada).day);
    this.vuelo.fechaLlegada = this.dp.transform(fechaL, 'yyyy-MM-dd');
    console.log(this.vuelo)
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
    this.vuelo = new class implements Vuelo {
      capacidad: number;
      costo: number;
      fechaLlegada: string;
      fechaSalida: string;
      id: number;
      latitudDestino: number;
      latitudOrigen: number;
      longitudDestino: number;
      longitudOrigen: number;
      numero: string;
    }
  }

}
