import { Component, OnInit, Input, } from '@angular/core';
import { Vuelo } from '../../vuelo/vuelo';

@Component({
  selector: 'app-proveedor-vuelos',
  templateUrl: './proveedor-vuelos.component.html',
})
export class ProveedorVuelosComponent implements OnInit {
  @Input() proveedorVuelos : Vuelo[];
  public isCollapsed = true;

  ngOnInit(){
  }
}



