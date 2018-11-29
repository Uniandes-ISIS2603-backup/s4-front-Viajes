import { Component, OnInit, Input } from '@angular/core';
import {Alojamiento} from '../alojamiento';
import {AlojamientoService} from '../alojamiento.service';
import {AlojamientoDetail} from '../alojamiento-detail';
declare var ol: any;


/**
* Componente para lista de alojamientos.
*/
@Component({
  selector: 'app-alojamiento',
  templateUrl: './alojamiento-list.component.html',
  styleUrls: ['./alojamiento-list.component.css']
})
export class AlojamientoListComponent implements OnInit {
  map: any;

  /**
     * Constructor del componente
     * @param alojamientoService 
     */
     constructor(private alojamientoService: AlojamientoService) { }
     
    /**
     * Lista de alojamientos
     */
     alojamientos: Alojamiento[];

  alojamiento_id: number;
     selectedAlojamiento: Alojamiento;

  /**
   * Shows or hides the author-create-component
   */
  showCreate: boolean;


    alojamientoActual(alojamiento_id: number): Alojamiento {

      this.showCreate = false;
      this.alojamiento_id = alojamiento_id;
        this.selectedAlojamiento = new AlojamientoDetail();
        this.getAlojamientoDetail();
        return this.selectedAlojamiento;

    }
    onSelected(alojamiento_id: number): void {
        this.alojamiento_id = alojamiento_id;
        this.selectedAlojamiento = new AlojamientoDetail();
        this.getAlojamientoDetail();
    }

  /**
   * Shows or hides the create component
   */
  showHideCreate(): void {
    if (this.selectedAlojamiento) {
      this.selectedAlojamiento = undefined;
      this.alojamiento_id = undefined;
    }
    this.showCreate = !this.showCreate;
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
     * Inicializar el componente.
     */
     
     ngOnInit() {
      this.showCreate = false;
      this.getAlojamientos();
    }

}

