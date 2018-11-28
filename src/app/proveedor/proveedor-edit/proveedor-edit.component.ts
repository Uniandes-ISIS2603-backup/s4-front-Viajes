import {Component, OnInit, ViewChild} from '@angular/core';
import {DatePipe} from '@angular/common';
import {Router, ActivatedRoute} from '@angular/router';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Observable, Subject, merge} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';

import {ProveedorService} from '../proveedor.service';
import {VueloService} from '../../vuelo/vuelo.service';
import {TransporteService} from '../../transporte/transporte.service';
import {ActividadService} from '../../actividad/actividad.service';
import {AlojamientoService} from '../../alojamiento/alojamiento.service';


import {ProveedorDetail} from '../proveedor-detail';
import {Vuelo} from '../../vuelo/vuelo';
import {Transporte} from '../../transporte/transporte';
import {Actividad} from '../../actividad/actividad';
import {Alojamiento} from '../../alojamiento/alojamiento';

@Component({
  selector: 'app-proveedor-edit',
  templateUrl: './proveedor-edit.component.html',
  styleUrls: ['./proveedor-edit.component.css'],
  providers: [DatePipe]
})
export class ProveedorEditComponent implements OnInit {

  /**
   * The constructor of the component
   * @param proveedorService The proveedor service which communicates with the API
   * @param transporteService The transporte service which communicates with the API
   * @param actividadService The actividad service which communicates with the API
   * @param alojamientoService The alojamiento service which communicates with the API
   * @param vueloService The vuelo service which communicates with the API
   * @param toastrService The toastr to show messages to the user
   * @param router The router which is needed to know when the component needs to reload
   * @param route The route which helps to retrieves the id of the book to be shown
   */
  constructor(
    private dp: DatePipe,
    private proveedorService: ProveedorService,
    private vueloService: VueloService,
    private transporteService: TransporteService,
    private alojamientoService: AlojamientoService,
    private actividadService: ActividadService,
    private toastrService: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  model: any;
  /**
   * The book which will be updated
   */
  proveedor: ProveedorDetail

  proveedor_id: number;
  /**
   * The list of all the authors in the BookStore
   */
  vuelos: Vuelo[];

  servicios: Vuelo[];

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


  @ViewChild('instance') instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  search = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map(term => (term === '' ? this.vuelos
        : this.vuelos.filter(v => v.nombre.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))
    );
  }

  formatter = (x: {name: string}) => x.name;

  /**
   * Retrieves the information of the book which will be updated
   */
  getProveedor(): void {
    this.proveedorService.getProveedorDetail(this.proveedor_id).subscribe(proveedor => {this.proveedor = proveedor;
    });
  }

  /**
   * Retrieves the information of all the editorials in the aplication.
   */
  getVuelos(): void {
    this.vueloService.getVuelos()
      .subscribe(vuelos => {
        this.vuelos = vuelos;
      });
  }

  /**
   * Retrieves the information of all the editorials in the aplication.
   */
  getTransportes(): void {
    this.transporteService.getTransportes()
      .subscribe(transportes => {
        this.transportes = transportes;
      });
  }

  /**
   * Retrieves the information of all the editorials in the aplication.
   */
  getActividades(): void {
    this.actividadService.getActividades()
      .subscribe(actividades => {
        this.actividades = actividades;
      });
  }

  /**
   * Retrieves the information of all the editorials in the aplication.
   */
  getAlojamientos(): void {
    this.alojamientoService.getAlojamientos()
      .subscribe(alojamientos => {
        this.alojamientos = alojamientos;
      });
  }


  /**
   * Cancels the edition of the book
   */
  cancelEdition(): void {
    this.toastrService.warning('El proveedor no fue editado', 'Edición del proveedor');
    this.router.navigate(['/proveedores/list']);
  }

  addVuelo(): void {
    if (this.model != undefined && this.model.id != undefined) {
      this.proveedor.servicios.push(this.model);
      for (let i = 0; i < this.servicios.length; i++) {
        if (this.servicios[i].id === this.model.id) {
          this.servicios.splice(i, 1);
        }
      }
      this.model = new Vuelo();
    }

  }

  removeVuelo(vuelo): void {
    this.servicios.push(vuelo);
    for (let i = 0; i < this.proveedor.servicios.length; i++) {
      if (this.proveedor.servicios[i].id == vuelo.id) {
        this.proveedor.servicios.splice(i, 1);
      }
    }
  }

  /**
   * This function updates the book
   */
  updateProveedor(): void {
    if (this.proveedor.servicios.length == 0) {
      this.toastrService.error('El proveedor debe de tener al menos un vuelo!', 'Error');
    } else {
      this.proveedorService.updateProveedor(this.proveedor)
        .subscribe(() => {
          this.router.navigate(['/proveedores/' + this.proveedor.id]);
          this.toastrService.success("El proveedor se actualizo correctamente.", 'Edición del proveedor');
        });
    }
  }

  /**
   * The function which initilizes the component
   */
  ngOnInit() {
    this.proveedor_id = +this.route.snapshot.paramMap.get('id');
    this.getProveedor();
    this.getVuelos();
    this.model = new Vuelo();
  }
}
