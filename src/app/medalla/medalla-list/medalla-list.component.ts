import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/filter';

import {Medalla} from '../medalla';
import {MedallaService} from '../medalla.service';
import {MedallaDetail} from '../medalla-detail'

@Component({
  selector: 'app-medalla',
  templateUrl: './medalla-list.component.html',
  styleUrls: ['./medalla-list.component.css']
})
export class MedallaListComponent implements OnInit {

  constructor(private medallaService: MedallaService) { }
  @Input() medallas: Medalla[];
  medalla_id:number;
  selectMedalla : Medalla;
  
  onSelected(medalla_id: number):void {
    this.medalla_id = medalla_id;
    this.selectedMedalla = new class implements MedallaDetail {
      nombre: string;
      descripcion: string;
      id: number;
      rutaImagen: string;
    }
    this.getMedallaDetail();
  }
  
  getMedallas(): void{
      this.medallaService.getMedallas().subscribe(medallas => this.medallas = medallas);
  }
  getMedallaDetail(): void {
    this.medallaService.getMedallaDetail(this.medalla_id)
      .subscribe(selectedMedalla => {
        this.selectedMedalla = selectedMedalla
        });
  }
  ngOnInit() {
      this.getMedallas();
  }

}
