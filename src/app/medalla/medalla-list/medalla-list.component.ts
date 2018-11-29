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
  selectedMedalla : Medalla;
  
  /**
   * Shows or hides the author-create-component
   */
  showCreate: boolean;
      /**
     * Shows or hides the detail of an author
     */
    showView: boolean;

    /**
    * Shows or hides the edition of an author
    */
    showEdit: boolean;
  
  onSelected(medalla_id: number):void {
    this.showCreate = false;
    this.medalla_id = medalla_id;
    this.selectedMedalla = new class implements MedallaDetail {
      nombre: string;
      descripcion: string;
      id: number;
      rutaImagen: string;
    }
    this.getMedallaDetail();
  }
  
   updateMedalla(): void {
        this.showEdit = false;
        this.showView = true;
   }
  
   /**
   * Shows or hides the create component
   */
  showHideCreate(): void {
    if (this.selectedMedalla) {
      this.selectedMedalla = undefined;
      this.medalla_id = undefined;
    }
    this.showCreate = !this.showCreate;
  }
  
      /**
    * Shows or hides the create component
    */
    showHideEdit(medalla_id: number): void {
        if (!this.showEdit || (this.showEdit && medalla_id != this.selectedMedalla.id)) {
            this.showView = false;
            this.showCreate = false;
            this.showEdit = true;
            this.medalla_id = medalla_id;
            //this.selectedMedalla = new Medalla();
            this.getMedallaDetail();
        }
        else {
            this.showEdit = false;
            this.showView = true;
        }
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
      this.showCreate = false;
      this.showView = false;
      this.showEdit = false;
      this.selectedMedalla = undefined;
      this.medalla_id = undefined;
      this.getMedallas();
  }

}
