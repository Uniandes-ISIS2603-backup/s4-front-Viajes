import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';

import { ToastrService } from 'ngx-toastr';

import { ProveedorService } from '../proveedor.service';

import { Proveedor } from '../proveedor';
import {Vuelo} from '../../vuelo/vuelo';

@Component({
  selector: 'app-proveedor-create',
  templateUrl: './proveedor-create.component.html',
  styleUrls: ['./proveedor-create.component.css'],

})
export class ProveedorCreateComponent implements OnInit {

  /**
   * Constructor for the component
   * @param authorService The author's services provider
   * @param toastrService The toastr to show messages to the user
   */
  constructor(
    private proveedorService: ProveedorService,
    private toastrService: ToastrService
  ) { }

  /**
   * The new author
   */
  proveedor: Proveedor;

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
  createProveedor(): Proveedor {
    console.log(this.proveedor);
    this.proveedorService.createProveedor(this.proveedor)
      .subscribe((proveedor) => {
        this.proveedor = proveedor;
        this.create.emit();
        this.toastrService.success("El proveedor fue creado", "Creaciòn del proveedor");

      });
    return this.proveedor;
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
    this.proveedor = new class implements Proveedor {
      id: number;
      nombre: string;
      password: string;
      puntaje: number;
      user: string;
      vuelo: Vuelo;
    }
  }

}

