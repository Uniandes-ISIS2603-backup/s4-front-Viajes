import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import {MedallaService} from '../medalla.service';
import {Medalla} from '../medalla';

@Component({
  selector: 'app-medalla-detail',
  templateUrl: './medalla-detail.component.html',
  styleUrls: ['./medalla-detail.component.css']
})
export class MedallaDetailComponent implements OnInit {

  constructor(
    private medallaService: MedallaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  medalla_id: number;
    selectedMedalla : Medalla;
    
    onSelected(medalla_id: number):void {
        this.medalla_id = medalla_id;
        this.selectedMedalla = new MedallaDetail();
        this.getMedallaDetail();     
    }
  /**
   * The book whose details are shown
   */
  medallaDetail: MedallaDetail;

  /**
   * The method which retrieves the details of the book that
   * we want to show
   */
  getMedallaDetail(): void {
    this.medallaService.getMedallaDetail(this.medalla_id)
      .subscribe(medallaDetail => {
        this.medallaDetail = medallaDetail;
      });
  }

  ngOnInit() {
    this.medalla_id = +this.route.snapshot.paramMap.get('id');
    this.medallaDetail = new class implements MedallaDetail {
      nombre: string;
      id: number;
      descripcion: string;
      rutaImagen: string;
    }
    this.getMedallaDetail();
  } 
  


}
