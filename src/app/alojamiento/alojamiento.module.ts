import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing/app-routing.module';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AlojamientoService} from './alojamiento.service';
import { AlojamientoListComponent } from './alojamiento-list/alojamiento-list.component';
import { AlojamientoDetailComponent } from './alojamiento-detail/alojamiento-detail.component';
import { AlojamientoCreateComponent } from './alojamiento-create/alojamiento-create.component';


@NgModule({
  declarations: [AlojamientoListComponent, AlojamientoDetailComponent, AlojamientoCreateComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
    //NgbModule
  ],
  providers: [AlojamientoService],
  bootstrap: [AlojamientoListComponent]
})
export class AlojamientoModule { }

