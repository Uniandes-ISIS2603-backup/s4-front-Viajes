import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import {TransporteService} from '../transporte.service';
import {TransporteDetail} from '../transporte-detail'; 
import {Transporte} from '../transporte';

@Component({
  selector: 'app-transporte-detail',
  templateUrl: './transporte-detail.component.html',
  styleUrls: ['./transporte-detail.component.css']
})
export class TransporteDetailComponent implements OnInit, OnDestroy {
  /**
   * Constructor del componente
   * @param route The route which helps to retrieves the id of the transporte to be shown
   * @param transporteService
   * @param router
   */
    constructor(
      private route: ActivatedRoute,
      private transporteService: TransporteService,
      private router: Router
     ) {
       this.navigationSubscription = this.router.events.subscribe((e: any) => {
         if (e instanceof NavigationEnd) {
           this.ngOnInit();
         }
       });
     }

  /**
   * Transporte buscado
   */
  @Input ()transporteDetail: TransporteDetail;

    /**
     * Id del transporte
     */
     transporte_Id: number;

  /**
   * The other books shown in the sidebar
   */
  other_transportes: Transporte[];

  /**
   * The suscription which helps to know when a new book
   * needs to be loaded
   */
  navigationSubscription;

     /**
     * Obtener el detail del transporte
     */
     getTransporteDetail(): void {
        this.transporteService.getTransporteDetail(this.transporte_Id)
            .subscribe(transporteDetail => {
                this.transporteDetail = transporteDetail;
            });
    }

  /**
   * This method retrieves all the books in the Bookstore to show them in the list
   */
  getOtherTransportes(): void {
    this.transporteService.getTransportes()
      .subscribe(transportes => {
        this.other_transportes = transportes;
        this.other_transportes = this.other_transportes.filter(transporte => transporte.id !== this.transporte_Id);
      });
  }
    
    /**
    * Inicializar el componente
    */
    ngOnInit() {
        this.transporte_Id = +this.route.snapshot.paramMap.get('id');
        this.transporteDetail = new TransporteDetail();
        this.getTransporteDetail();
        this.getOtherTransportes();
    }

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
