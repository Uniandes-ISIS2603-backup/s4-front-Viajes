import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute,Router,NavigationEnd } from '@angular/router';

import {AlojamientoService} from '../alojamiento.service';
import {AlojamientoDetail} from '../alojamiento-detail'; 
import {Alojamiento} from '../alojamiento'; 

@Component({
  selector: 'app-alojamiento-detail',
  templateUrl: './alojamiento-detail.component.html',
  styleUrls: ['./alojamiento-detail.component.css']
})
export class AlojamientoDetailComponent implements OnInit {

    /**
    * Alojamiento buscado
    */
    @Input ()alojamientoDetail: AlojamientoDetail;
    
     /**
    * Constructor del componente
    * @param route The route which helps to retrieves the id of the alojamiento to be shown
    */
    constructor(private route: ActivatedRoute, 
                private alojamientoService: AlojamientoService
                private router: Router) { }
    
    /**
     * Id del alojamiento
     */
     alojamientoId: number;
     
     /**
     * Obtener el detail del aojamiento
     */
     getAlojamientoDetail(): void {
        this.alojamientoService.getAlojamientoDetail(this.alojamientoId)
            .subscribe(alojamientoDetail => {
                this.alojamientoDetail = alojamientoDetail;
            });
    }
    
    /**
    * Inicializar el componente
    */
    ngOnInit() {
        this.alojamientoId = +this.route.snapshot.paramMap.get('id');
        if (this.alojamientoId) {
        this.alojamientoDetail = new AlojamientoDetail(
            nombre: string; 
            costo: number; 
            estrellas: number;
            tipo: string;
            latitud: number;
            longitud: number;
            puntuacion: number;
        }
        this.getAlojamientoDetail();
        }
    }