import { Component, OnInit, Input } from '@angular/core';

import {Transporte} from '../transporte';
import {TransporteService} from '../transporte.service';
import {TransporteDetail} from '../transporte-detail'; 

/**
* Componente para lista de transportes.
*/
@Component({
  selector: 'app-transporte',
  templateUrl: './transporte-list.component.html',
  styleUrls: ['./transporte-list.component.css']
})
export class TransporteListComponent implements OnInit {

    /**
     * Constructor del componente
     * @param transporteService 
     */
    constructor(private transporteService: TransporteService) { }
    
    /**
     * Lista de transportes
     */
     transportes: Transporte[]; 
     transporte_id: number;
     selectedTransporte: Transporte;

  /**
   * Shows or hides the author-create-component
   */
  showCreate: boolean;

    transporteActual(transporte_id: number): Transporte {

        this.transporte_id = transporte_id;
        this.selectedTransporte = new TransporteDetail();
        this.getTransporteDetail();
        return this.selectedTransporte;
    }
    onSelected(transporte_id: number): void {
        this.transporte_id = transporte_id;
        this.showCreate = false;
        this.selectedTransporte = new TransporteDetail();
        this.getTransporteDetail();
    }

  /**
   * Shows or hides the create component
   */
  showHideCreate(): void {
    if (this.selectedTransporte) {
      this.selectedTransporte = undefined;
      this.transporte_id = undefined;
    }
    this.showCreate = !this.showCreate;
  }
    
    /**
     * Actualizar la lista de transportes
     */
     getTransportes(): void{
         this.transporteService.getTransportes()
             .subscribe(transportes => {this.transportes = transportes});  
     }
     
     /**
      * Detail del transporte
      */
    getTransporteDetail(): void {
        this.transporteService.getTransporteDetail(this.transporte_id)
            .subscribe(selectedTransporte => {
                this.selectedTransporte = selectedTransporte
            });
    }
    
    /**
     * Inicializar 
     */
  ngOnInit() {
    this.showCreate = false;
      this.getTransportes();
  }

}
