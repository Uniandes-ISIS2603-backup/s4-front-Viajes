import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Proveedor} from '../../proveedor/proveedor';
import {ProveedorService} from '../../proveedor/proveedor.service';
import {ProveedorDetail} from '../proveedor-detail';
import {ToastrService} from 'ngx-toastr';
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
  constructor(private proveedorService: ProveedorService, private route: ActivatedRoute, private toastrService: ToastrService) {}

  proveedor_id: number;
  selectedProveedor : Proveedor;

  /**
   * Shows or hides the author-create-component
   */
  showCreate: boolean;

  /**
   * Shows or hides the detail of an author
   */
  showCalificar: boolean;

  /**
   * Shows or hides the detail of an author
   */
  showView: boolean;

  onSelected(proveedor_id: number): void {
    this.showCreate = false;
    this.showView = true;
    this.showCalificar = false;
    this.proveedor_id = proveedor_id;
    this.selectedProveedor = new ProveedorDetail();
    this.getProveedorDetail();
  }

  /**
   * Shows or hides the create component
   */
  showHideCreate(): void {
    this.showCalificar = false;
    this.showView = true;
    this.showCreate = !this.showCreate;
  }

  showHideCalificar(proveedor_id: number): void {
    if (!this.showCalificar || (this.showCalificar && proveedor_id != this.selectedProveedor.id)) {
      this.showView = false;
      this.showCreate = false;
      this.showCalificar = true;
      this.proveedor_id = proveedor_id;
      this.selectedProveedor = new ProveedorDetail();
      this.getProveedorDetail();
    }
    else {
      this.showCalificar = false;
      this.showView = true;
    }
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


  updateProveedor(): void {
    this.showCalificar = false;
    this.showView = true;
  }



  /**
   * The method which initializes the component
   */
  ngOnInit() {
    this.showCreate = false;
    this.showView = false;
    this.showCalificar = false;
    this.selectedProveedor = undefined;
    this.proveedor_id = undefined;
    this.getProveedores();
  }

}
