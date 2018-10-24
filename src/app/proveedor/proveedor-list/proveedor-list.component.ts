import { Component, OnInit } from '@angular/core';

import {Proveedor} from '../proveedor';
import {ProveedorService} from '../proveedor.service';

/**
 * The component for the list of proveedores in TripBuilder
 */
@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor-list.component.html',
  styleUrls: ['./proveedor-list.component.css']
})
export class ProveedorListComponent implements OnInit {

  /**
   * Constructor of the component
   * @param proveedorService The vuelo services provider
   */
  constructor(private proveedorService: ProveedorService) {}

  /**
   * The list of proveedores in TripBuilder
   */
  proveedores: Proveedor[];

  /**
   * Asks the service to update the list of proveedores
   */
  getProveedores(): void {
    this.proveedorService.getProveedores()
      .subscribe(proveedores => this.proveedores = proveedores);
  }

  /**
   * This will initialize the component by retrieving the list of proveedores from the service
   * This method will be called when the component is created
   */
  ngOnInit() {
    this.getProveedores();
  }
}
