import { Component, OnInit, Input } from '@angular/core';
import {Alojamiento} from '../alojamiento';
import {AlojamientoService} from '../alojamiento.service';
import {AlojamientoDetail} from '../alojamiento-detail'; 

/**
* Componente para lista de alojamientos.
*/
@Component({
  selector: 'app-alojamiento',
  templateUrl: './alojamiento-list.component.html',
  styleUrls: ['./alojamiento-list.component.css']
})
export class AlojamientoListComponent implements OnInit {
    
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

    alojamientoActual(alojamiento_id: number): Alojamiento {

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
         this.getAlojamientos();
     }

}

