import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute,Router,NavigationEnd } from '@angular/router';

import {TransporteService} from '../transporte.service';
import {TransporteDetail} from '../transporte-detail'; 
import {Transporte} from '../transporte'; 

@Component({
  selector: 'app-transporte-detail',
  templateUrl: './transporte-detail.component.html',
  styleUrls: ['./transporte-detail.component.css']
})
export class TransporteDetailComponent implements OnInit {
    
    /**
    * Transporte buscado
    */
    @Input ()transporteDetail: TransporteDetail;

     /**
    * Constructor del componente
    * @param route The route which helps to retrieves the id of the transporte to be shown
    */
    constructor(private route: ActivatedRoute, 
                private transporteService: TransporteService,
                private router: Router) { }
  
    /**
     * Id del transporte
     */
     transporteId: number;
     
     /**
     * Obtener el detail del transporte
     */
     getTransporteDetail(): void {
        this.transporteService.getTransporteDetail(this.transporteId)
            .subscribe(transporteDetail => {
                this.transporteDetail = transporteDetail;
            });
    }
    
    /**
    * Inicializar el componente
    */
    ngOnInit() {
        this.transporteId = +this.route.snapshot.paramMap.get('id');
        if (this.transporteId) {
        this.transporteDetail = new TransporteDetail();
        this.getTransporteDetail();
        }
    }
}