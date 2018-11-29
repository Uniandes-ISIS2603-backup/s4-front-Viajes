import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';


import { VueloService } from '../vuelo.service';
import { Vuelo } from '../vuelo';
import { VueloDetail } from '../vuelo-detail';
import OlMap from 'ol/Map';
import OlXYZ from 'ol/source/XYZ';
import OlTileLayer from 'ol/layer/Tile';
import OlView from 'ol/View';

import { fromLonLat } from 'ol/proj';


declare var ol: any;



@Component({
  selector: 'app-vuelo-detail',
  templateUrl: './vuelo-detail.component.html',
  styleUrls: ['./vuelo-detail.component.css']
})
export class VueloDetailComponent implements OnInit, OnDestroy {

//  map: any;

  constructor(
    private vueloService: VueloService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });
  }
  /**
   * The book whose details are shown
   */
  @Input() vueloDetail: VueloDetail;

  vuelo_id: number;

  mostrar: false;

  algo: VueloDetail;


  /**
   * The other books shown in the sidebar
   */
  other_vuelos: Vuelo[];

  /**
   * The suscription which helps to know when a new book
   * needs to be loaded
   */
  navigationSubscription;
  /**
   * The method which retrieves the details of the book that
   * we want to show
   */
  getVueloDetail(): void {
    this.vueloService.getVueloDetail(this.vuelo_id)
      .subscribe(vueloDetail => {
        this.vueloDetail = vueloDetail;
      });

  }

  /**
   * This method retrieves all the books in the Bookstore to show them in the list
   */
  getOtherVuelos(): void {
    this.vueloService.getVuelos()
      .subscribe(vuelos => {
        this.other_vuelos = vuelos;
        this.other_vuelos = this.other_vuelos.filter(vuelo => vuelo.id !== this.vuelo_id);
      });
  }

  map: OlMap;
  source: OlXYZ;
  layer: OlTileLayer;
  view: OlView;

  ngOnInit() {
    this.vuelo_id = +this.route.snapshot.paramMap.get('id');
    this.algo = new VueloDetail();
    this.vueloDetail = this.algo;
    this.getVueloDetail();
    this.getOtherVuelos();

    this.source = new OlXYZ({
      url: 'http://tile.osm.org/{z}/{x}/{y}.png'
    });

    this.layer = new OlTileLayer({
      source: this.source
    });
    console.log('LONGITUD: ' + this.algo.latitudDestino);

    this.view = new OlView({
      center: fromLonLat([this.vueloDetail.longitudDestino, this.vueloDetail.latitudDestino]),
      zoom: 10
    });

    this.map = new OlMap({
      target: 'map',
      layers: [this.layer],
      view: this.view
    });
  }


  /**
   * The method which initilizes the component
   * We need to initialize the usuario
   * Usuario is never considered undefined
   */
  //ngOnInit() {
    //this.vuelo_id = +this.route.snapshot.paramMap.get('id');
      //this.vueloDetail = new VueloDetail();
     // this.getVueloDetail();
    //  this.getOtherVuelos();
  //}

  /**
   * This method helps to refresh the view when we need to load another book into it
   * when one of the other books in the list is clicked
   */
  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }


  }

}
