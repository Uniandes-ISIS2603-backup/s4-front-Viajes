import { Component, OnInit } from '@angular/core';

import {Medalla} from '../medalla';
import {MedallaService} from '../medalla.service';

@Component({
  selector: 'app-medalla',
  templateUrl: './medalla-list.component.html',
  styleUrls: ['./medalla-list.component.css']
})
export class MedallaListComponent implements OnInit {

  constructor(private medallaService: MedallaService) { }
  medallas: Medalla[];
  getMedallas(): void{
      this.medallaService.getMedallas().subscribe(medallas => this.medallas = medallas);
  }
  ngOnInit() {
      this.getMedallas();
  }

}
