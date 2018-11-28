import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/filter';


import {Proveedor} from '../../proveedor/proveedor';
import {ProveedorService} from '../../proveedor/proveedor.service';
import {Vuelo} from '../../vuelo/vuelo';
import {ProveedorDetail} from '../proveedor-detail';
import {Actividad} from '../../actividad/actividad';
@Component({
  selector: 'app-proveedor-list',
  templateUrl: './proveedor-list.component.html',
  styleUrls: ['./proveedor-list.component.css']
})
export class ProveedorListComponent implements OnInit {

  /**
   * The list of books to display
   */
  @Input() proveedores: Proveedor[];

  /**
   * The component's constructor
   */
  constructor(private proveedorService: ProveedorService, private route: ActivatedRoute) {}

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
      imagen: string;
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
   * This method retrieves all the books in the Bookstore to show them in the list
   */
  getProveedores(): void {
    this.proveedorService.getProveedores()
      .subscribe(proveedores => {
        this.proveedores = proveedores;
      });
  }

  getProveedorDetail(): void {
    this.proveedorService.getProveedorDetail(this.proveedor_id)
      .subscribe(selectedProveedor => {
        this.selectedProveedor = selectedProveedor
      });
  }



  /**
   * The method which initializes the component
   */
  ngOnInit() {
    this.showCreate = false;
    this.selectedProveedor = undefined;
    this.proveedor_id = undefined;
    this.getProveedores();
  }

}
