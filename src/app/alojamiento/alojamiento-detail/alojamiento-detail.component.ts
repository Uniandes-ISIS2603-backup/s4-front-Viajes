import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import {AlojamientoService} from '../alojamiento.service';
import {AlojamientoDetail} from '../alojamiento-detail';
import {Alojamiento} from '../alojamiento';
declare var ol: any;

@Component({
  selector: 'app-alojamiento-detail',
  templateUrl: './alojamiento-detail.component.html',
  styleUrls: ['./alojamiento-detail.component.css']
})
export class AlojamientoDetailComponent implements OnInit {


  map: any;

  /**
    * Alojamiento buscado
    */
    @Input ()alojamientoDetail: AlojamientoDetail;
    
     /**
    * Constructor del componente
    * @param route The route which helps to retrieves the id of the alojamiento to be shown
    */
    constructor(private route: ActivatedRoute,
                private alojamientoService: AlojamientoService,
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
        this.alojamientoDetail = new AlojamientoDetail();
        this.getAlojamientoDetail();
          this.map = new ol.Map({
            target: 'map',
            layers: [
              new ol.layer.Tile({
                source: new ol.source.OSM()
              })
            ],
            view: new ol.View({
              center: ol.proj.fromLonLat([this.alojamientoDetail.longitud, this.alojamientoDetail.latitud]),
              zoom: 20
            }),
          });

        }
    }
}
