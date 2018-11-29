import {Component, OnInit, ViewContainerRef, Input} from '@angular/core';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';

import {Vuelo} from '../vuelo';
import {VueloService} from '../vuelo.service';
import {VueloDetail} from '../vuelo-detail';

/**
 * The component for the list of vuelos in TripBuilder
 */
@Component({
  selector: 'app-vuelo-list',
  templateUrl: './vuelo-list.component.html',
  styleUrls: ['./vuelo-list.component.css']
})
export class VueloListComponent implements OnInit {
    /**
     * Constructor of the component
     * @param vueloService The vuelo services provider
     */
    constructor(private vueloService: VueloService,
                private modalDialogService: ModalDialogService,
                private viewRef: ViewContainerRef,
                private toastrService: ToastrService) {}

    @Input() vuelos: Vuelo[];
    vuelo_id: number;
    selectedVuelo: Vuelo;

  /**
   * Shows or hides the author-create-component
   */
  showCreate: boolean;

  /**
   * Shows or hides the edition of an author
   */
  showEdit: boolean;

  /**
   * Shows or hides the detail of an author
   */
  showView: boolean;

  onSelected(vuelo_id: number):void {
      this.showCreate = false;
      this.showView = true;
      this.showEdit = false;
      this.vuelo_id = vuelo_id;
    this.selectedVuelo = new VueloDetail();
    this.getVueloDetail();
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
  showHideEdit(vuelo_id: number): void {
    if (!this.showEdit || (this.showEdit && vuelo_id != this.selectedVuelo.id)) {
      this.showView = false;
      this.showCreate = false;
      this.showEdit = true;
      this.vuelo_id = vuelo_id;
      this.selectedVuelo = new VueloDetail();
      this.getVueloDetail();
    }
    else {
      this.showEdit = false;
      this.showView = true;
    }
  }

    /**
     * Asks the service to update the list of vuelos
     */
    getVuelos(): void {
        this.vueloService.getVuelos()
            .subscribe(vuelos => this.vuelos = vuelos);
    }

    getVueloDetail(): void {
    this.vueloService.getVueloDetail(this.vuelo_id)
      .subscribe(selectedVuelo => {
        this.selectedVuelo = selectedVuelo
      });
    }


  updateVuelo(): void {
    this.showEdit = false;
    this.showView = true;
  }

  /**
   * Deletes an author
   */
  deleteVuelo(vueloId): void {
    this.modalDialogService.openDialog(this.viewRef, {
      title: 'Eliminar un vuelo',
      childComponent: SimpleModalComponent,
      data: {text: 'Está seguro de que quiere borrar este vuelo?'},
      actionButtons: [
        {
          text: 'Yes',
          buttonClass: 'btn btn-danger',
          onAction: () => {
            this.vueloService.deleteVuelo(vueloId).subscribe(() => {
              this.toastrService.error('El vuelo fue eliminado exitosamente', 'Vuelo eliminado');
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
     * This will initialize the component by retrieving the list of vuelos from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
      this.showCreate = false;
      this.showEdit = false;
      this.showView = false;
      this.selectedVuelo = undefined;
      this.vuelo_id = undefined;
      this.getVuelos();
    }
}
