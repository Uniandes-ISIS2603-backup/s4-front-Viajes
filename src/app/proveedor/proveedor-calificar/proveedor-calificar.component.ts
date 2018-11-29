import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import {ProveedorService} from '../proveedor.service';
import {ProveedorDetail} from '../proveedor-detail';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-proveedor-calificar',
  templateUrl: './proveedor-calificar.component.html',
  styleUrls: ['./proveedor-calificar.component.css']
})
export class ProveedorCalificarComponent implements OnInit {

  constructor(
    private proveedorService: ProveedorService,
    private toastrService: ToastrService
  ) {
  }

  /**
   * The author id as received from the parent component
   */
  @Input() proveedor: ProveedorDetail;

  /**
   * The output which tells the parent component
   * that the user no longer wants to create an author
   */
  @Output() cancel = new EventEmitter();

  /**
   * The output which tells the parent component
   * that the user updated a new author
   */
  @Output() update = new EventEmitter();

  /**
   * Updates the information of the author
   */
  calificarProveedor(): void {
    this.proveedorService.updateProveedor(this.proveedor)
      .subscribe(() => {
        this.toastrService.success("El proveedor ha sido calificado", "Calificar proveedor");
      });
    this.update.emit();
  }

  /**
   * Emits the signal to tell the parent component that the
   * user no longer wants to create an user
   */
  cancelEdition(): void {
    this.cancel.emit();
  }
  /**
   * This function will initialize the component
   */
  ngOnInit() {
    this.calificarProveedor();
  }

  /**
   * This function will be called when the user chooses another author to edit
   */
  ngOnChanges(){
    this.ngOnInit();
  }

}

