import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';


import { ProveedorService } from '../proveedor.service';
import { Proveedor } from '../proveedor';
import { ProveedorDetail } from '../proveedor-detail';


@Component({
  selector: 'app-proveedor-detail',
  templateUrl: './proveedor-detail.component.html',
  styleUrls: ['./proveedor-detail.component.css']
})
export class ProveedorDetailComponent implements OnInit {

  constructor(
    private proveedorService: ProveedorService,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  proveedor_id: number;

  /**
   * The book whose details are shown
   */
  proveedorDetail: ProveedorDetail;

  /**
   * The other books shown in the sidebar
   */
  other_proveedores: Proveedor[];


  /**
   * The method which retrieves the details of the book that
   * we want to show
   */
  getProveedorDetail(): void {
    this.proveedorService.getProveedorDetail(this.proveedor_id)
      .subscribe(proveedorDetail => {
        this.proveedorDetail = proveedorDetail;
      });
  }

  /**
   * This method retrieves all the books in the Bookstore to show them in the list
   */
  getOtherProveedores(): void {
    this.proveedorService.getProveedores()
      .subscribe(proveedores => {
        this.other_proveedores = proveedores;
        this.other_proveedores = this.other_proveedores.filter(proveedor => proveedor.id !== this.proveedor_id);
      });
  }

  /**
   * The method which initilizes the component
   * We need to initialize the book and its editorial so that
   * they are never considered undefined
   */
  ngOnInit() {
    this.proveedor_id = +this.route.snapshot.paramMap.get('id');
    this.proveedorDetail = new class implements ProveedorDetail {
      password: string;
      id: number;
      nombre: string;
      puntaje: number;
      user: string;
    }
    this.getProveedorDetail();
    this.getOtherProveedores();
  }

}

