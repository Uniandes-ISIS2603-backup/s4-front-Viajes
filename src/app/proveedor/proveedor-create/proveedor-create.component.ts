import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

import {ProveedorService} from '../proveedor.service';
import {VueloService} from '../../vuelo/vuelo.service';
import {TransporteService} from '../../transporte/transporte.service';
import {ActividadService} from '../../actividad/actividad.service';
import {AlojamientoService} from '../../alojamiento/alojamiento.service';
import {Proveedor} from '../proveedor';
import {Vuelo} from '../../vuelo/vuelo';
import {Transporte} from '../../transporte/transporte';
import {Actividad} from '../../actividad/actividad';
import {Alojamiento} from '../../alojamiento/alojamiento';



@Component({
  selector: 'app-proveedor-create',
  templateUrl: './proveedor-create.component.html',
  styleUrls: ['./proveedor-create.component.css'],
  providers: [DatePipe]
})
export class ProveedorCreateComponent implements OnInit {

  /**
   * Constructor for the component
   * @param proveedorService The proveedor' services provider
   * @param transporteService The transportes' services provider
   * @param actividadService The actividades' services provider
   * @param alojamientoService The alojamientos' services provider
   * @param vueloService The vuelos' services provider
   * @param toastrService The toastr to show messages to the user
   * @param router The router
   */
  constructor(
    private dp: DatePipe,
    private proveedorService: ProveedorService,
    private vueloService: VueloService,
    private transporteService: TransporteService,
    private actividadService: ActividadService,
    private alojamientoService: AlojamientoService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  /**
   * The new book
   */
  proveedor: Proveedor;

  /**
   * The list of all the authors in the BookStore
   */
  vuelos: Vuelo[];

  /**
   * The list of all the editorials in the BookStore
   */
  transportes: Transporte[];

  /**
   * The list of all the editorials in the BookStore
   */
  actividades: Actividad[];

  /**
   * The list of all the editorials in the BookStore
   */
  alojamientos: Alojamiento[];

  /**
   * The authors of the new book
   * This list is passed as a parameter to the child two-list component
   * It is also updated by that child component
   */
  proveedorVuelos: Vuelo[];

  /**
   * The authors of the new book
   * This list is passed as a parameter to the child two-list component
   * It is also updated by that child component
   */
  proveedorTransportes: Transporte[];

  /**
   * The authors of the new book
   * This list is passed as a parameter to the child two-list component
   * It is also updated by that child component
   */
  proveedorActividades: Actividad[];

  /**
   * The authors of the new book
   * This list is passed as a parameter to the child two-list component
   * It is also updated by that child component
   */
  proveedorAlojamientos: Alojamiento[];

  /**
   * Retrieves the list of editorials in the BookStore
   */
  getVuelos(): void {
    this.vueloService.getVuelos()
      .subscribe(vuelos => {
        this.vuelos = vuelos;
      }, err => {
        this.toastrService.error(err, 'Error');
      });
  }

  /**
   * Retrieves the list of editorials in the BookStore
   */
  getTransportes(): void {
    this.transporteService.getTransportes()
      .subscribe(transportes => {
        this.transportes = transportes;
      }, err => {
        this.toastrService.error(err, 'Error');
      });
  }

  /**
   * Retrieves the list of editorials in the BookStore
   */
  getActividades(): void {
    this.actividadService.getActividades()
      .subscribe(actividades => {
        this.actividades = actividades;
      }, err => {
        this.toastrService.error(err, 'Error');
      });
  }

  /**
   * Retrieves the list of editorials in the BookStore
   */
  getAlojamientos(): void {
    this.alojamientoService.getAlojamientos()
      .subscribe(alojamientos => {
        this.alojamientos = alojamientos;
      }, err => {
        this.toastrService.error(err, 'Error');
      });
  }

  /**
   * Cancels the creation of the new book
   * Redirects to the books' list page
   */
  cancelCreation(): void {
    this.toastrService.warning('El proveedor no fue creado', 'Creaciòn del proveedor');
    this.router.navigate(['/proveedores/list']);
  }

  /**
   * Creates a new book
   */
  createProveedor(): Proveedor {
    this.proveedorService.createProveedor(this.proveedor)
      .subscribe(proveedor => {
        this.proveedor.id = proveedor.id;
        this.router.navigate(['/proveedores/' + proveedor.id]);
      }, err => {
        this.toastrService.error(err, 'Error');
      });
    return this.proveedor;
  }

  /**
   * This function will initialize the component
   */
  ngOnInit() {
    this.proveedor = new class implements Proveedor {
      id: number;
      nombre: string;
      password: string;
      puntaje: number;
      user: string;
      imagen: string;
      vuelo: Vuelo;
    }
    this.proveedor.vuelo = new Vuelo();
    this.getVuelos();
  }

}
