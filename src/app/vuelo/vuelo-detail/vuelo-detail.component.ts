import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';


import { VueloService } from '../vuelo.service';

@Component({
  selector: 'app-vuelo-detail',
  templateUrl: './vuelo-detail.component.html',
  styleUrls: ['./vuelo-detail.component.css']
})
export class VueloDetailComponent implements OnInit {

  constructor(
    private vueloService: VueloService,
    private route: ActivatedRoute
  ) { }

  vuelo_id: number;

  ngOnInit() {
    this.vuelo_id = +this.route.snapshot.paramMap.get('id');

  }

}
