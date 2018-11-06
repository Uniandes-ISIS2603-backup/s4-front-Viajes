import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/filter';

import {Proveedor} from '../proveedor';
import {ProveedorService} from '../proveedor.service';
import {ProveedorDetail} from '../proveedor-detail';
import {Vuelo} from '../../vuelo/vuelo';
import {Actividad} from '../../actividad/actividad';

/**
 * The component for the list of proveedores in TripBuilder
 */
@Component({
  selector: 'app-proveedores-list',
  templateUrl: './proveedor-list.component.html',
  styleUrls: ['./proveedor-list.component.css']
})
export class ProveedorListComponent implements OnInit {
  /**
   * Constructor of the component
   * @param proveedorService The vuelo services provider
   */
  constructor(private proveedorService: ProveedorService,  private route: ActivatedRoute) {}

  @Input() proveedores: Proveedor[];
  proveedor_id: number;
  selectedProveedor : Proveedor;

  /**
   * Shows or hides the author-create-component
   */
  showCreate: boolean;

  onSelected(proveedor_id: number):void {
    this.showCreate = false;
    this.proveedor_id = proveedor_id;
    this.selectedProveedor = new class implements ProveedorDetail {
      actividades: Actividad[];
      id: number;
      nombre: string;
      password: string;
      puntaje: number;
      user: string;
      vuelo: Vuelo;
      vuelos: Vuelo[];
    }
    this.getProveedorDetail();
  }

  /**
   * Shows or hides the create component
   */
  showHideCreate(): void {
    if (this.selectedProveedor) {
      this.selectedProveedor = undefined;
      this.proveedor_id = undefined;
    }
    this.showCreate = !this.showCreate;
  }
  /**
   * Asks the service to update the list of proveedores
   */
  getProveedores(): void {
    this.proveedorService.getProveedores()
      .subscribe(proveedores => this.proveedores = proveedores);
  }

  getProveedorDetail(): void {
    this.proveedorService.getProveedorDetail(this.proveedor_id)
      .subscribe(selectedProveedor => {
        this.selectedProveedor = selectedProveedor;
      });
  }

  /**
   * This will initialize the component by retrieving the list of proveedores from the service
   * This method will be called when the component is created
   */
  ngOnInit() {
    this.showCreate = false;
    this.selectedProveedor = undefined;
    this.proveedor_id = undefined;
      this.getProveedores();
  }
}
