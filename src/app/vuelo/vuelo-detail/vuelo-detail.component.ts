import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';


import { VueloService } from '../vuelo.service';
import { Vuelo } from '../vuelo';
import { VueloDetail } from '../vuelo-detail';


@Component({
  selector: 'app-vuelo-detail',
  templateUrl: './vuelo-detail.component.html',
  styleUrls: ['./vuelo-detail.component.css']
})
export class VueloDetailComponent implements OnInit {

  constructor(
    private vueloService: VueloService,
    private route: ActivatedRoute,
    private router: Router
  ) {

}

  vuelo_id: number;

  /**
   * The book whose details are shown
   */
  vueloDetail: VueloDetail;

  /**
   * The other books shown in the sidebar
   */
  other_vuelos: Vuelo[];


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

  /**
   * The method which initilizes the component
   * We need to initialize the book and its editorial so that
   * they are never considered undefined
   */
  ngOnInit() {
    this.vuelo_id = +this.route.snapshot.paramMap.get('id');
    this.vueloDetail = new class implements VueloDetail {
      capacidad: number;
      costo: number;
      fechaLlegada: string;
      fechaSalida: string;
      id: number;
      latitudDestino: number;
      latitudOrigen: number;
      longitudDestino: number;
      longitudOrigen: number;
      numero: string;
    }
    this.getVueloDetail();
    this.getOtherVuelos();
  }

}
