import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import {Alojamiento} from '../alojamiento';
import {AlojamientoService} from '../alojamiento.service';
import {AlojamientoDetail} from '../alojamiento-detail';
declare var ol: any;

import {ToastrService} from 'ngx-toastr';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';

/**
* Componente para lista de alojamientos.
*/
@Component({
  selector: 'app-alojamiento-list',
  templateUrl: './alojamiento-list.component.html',
  styleUrls: ['./alojamiento-list.component.css']
})
export class AlojamientoListComponent implements OnInit {
  map: any;

  /**
     * Constructor del componente
     * @param alojamientoService 
     */
     constructor(private alojamientoService: AlojamientoService,
                 private modalDialogService: ModalDialogService,
                 private viewRef: ViewContainerRef,
                 private toastrService: ToastrService) { }
     
    /**
     * Lista de alojamientos
     */
     alojamientos: Alojamiento[];
     alojamiento_id: number; 
     selectedAlojamiento: Alojamiento;
     showCreate: boolean;
     showEdit: boolean; 
     showView: boolean; 


    alojamientoActual(alojamiento_id: number): Alojamiento {
 
        this.alojamiento_id = alojamiento_id;
        this.selectedAlojamiento = new AlojamientoDetail();
        this.getAlojamientoDetail();
        return this.selectedAlojamiento;

    }
    onSelected(alojamiento_id: number): void {
        this.showCreate = false; 
        this.showView = true; 
        this.showEdit = false; 
        this.alojamiento_id = alojamiento_id;
        this.selectedAlojamiento = new AlojamientoDetail();
        this.getAlojamientoDetail();
    }

  /**
   * Shows or hides the create component
   */
  showHideCreate(): void {
    this.showView = true; 
    this.showEdit = false; 
    this.showCreate = !this.showCreate;
  }
    
   /**
   * Shows or hides the create component
   */
  showHideEdit(alojamiento_id: number): void {
    if (!this.showEdit || (this.showEdit && alojamiento_id != this.selectedAlojamiento.id)) {
      this.showCreate = false;
      this.showView = false;
      this.showEdit = true;
      this.alojamiento_id = alojamiento_id;
      this.selectedAlojamiento = new AlojamientoDetail();
      this.getAlojamientoDetail();
    }
    else {
      this.showEdit = false;
      this.showView = true;
    }
  }
    /**
     * Actualizar la lista de alojamientos
     */
     getAlojamientos(): void{
         this.alojamientoService.getAlojamientos()
             .subscribe(alojamientos => {this.alojamientos = alojamientos});  
     }
     
     /**
      * Detail del alojamiento
      */
    getAlojamientoDetail(): void {
        this.alojamientoService.getAlojamientoDetail(this.alojamiento_id)
            .subscribe(selectedAlojamiento => {
                this.selectedAlojamiento = selectedAlojamiento
            });
    }
    
    /**
     * Upfates alojamiento
     */
    updateAlojamiento(): void {
    this.showEdit = false;
    }
    
    /**
   * Deletes an alojamiento
   */
  deleteAlojamiento(alojamientoId): void {
    this.modalDialogService.openDialog(this.viewRef, {
      title: 'Eliminar un alojamiento',
      childComponent: SimpleModalComponent,
      data: {text: 'Esta seguro de eliminar el alojamiento?'},
      actionButtons: [
        {
          text: 'Yes',
          buttonClass: 'btn btn-danger',
          onAction: () => {
            this.alojamientoService.deleteAlojamiento(alojamientoId).subscribe(() => {
              this.toastrService.error('El alojamiento ha sido eliminado', 'Alojamiento eliminado');
              this.ngOnInit();
            }, err => {
              this.toastrService.error(err, 'Error');
            });
            return true;
          }
        },
        {text: 'No', onAction: () => true}
      ]
    });
  }

    /**
     * Inicializar el componente.
     */     
     ngOnInit() {
      this.showCreate = false;
      this.showEdit = false; 
      this.showView = false;
      this.getAlojamientos();
    }

}

