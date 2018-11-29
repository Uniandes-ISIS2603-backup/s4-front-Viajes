import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {VueloService} from './vuelo.service';
import { VueloListComponent } from './vuelo-list/vuelo-list.component';
import { VueloDetailComponent } from './vuelo-detail/vuelo-detail.component';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {VueloCreateComponent} from './vuelo-create/vuelo-create.component';
import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { VueloEditComponent } from './vuelo-edit/vuelo-edit.component';
import {NgxPermissionsModule} from 'ngx-permissions';
import { VueloCalificarComponent } from './vuelo-calificar/vuelo-calificar.component';

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: [0, 0],
    zoom: 0
  })
});
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPermissionsModule,
    CommonModule,
    NgbModule,
    FormsModule
  ],

  declarations: [VueloListComponent,
    VueloDetailComponent, VueloCreateComponent, VueloEditComponent, VueloCalificarComponent
  ],

  providers: [VueloService],
  bootstrap: [VueloListComponent]
})
export class VueloModule { }
