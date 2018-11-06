import { Component, OnInit } from '@angular/core';
import {Alojamiento} from '../alojamiento';
import {AlojamientoService} from '../alojamiento.service';

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
     
    /**
     * Actualizar la lista de alojamientos
     */
     getAlojamientos(): void{
         this.alojamientoService.getAlojamientos()
             .subscribe(alojamientos => {this.alojamientos = alojamientos});  
     }
     
    /**
     * Inicializar el componente.
     */
     
     ngOnInit() {
         this.getAlojamientos();
     }

}

