import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing/app-routing.module';

import {AlojamientoService} from './alojamiento.service';
import { AlojamientoListComponent } from './alojamiento-list/alojamiento-list.component';


@NgModule({
  declarations: [AlojamientoListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [AlojamientoService],
  bootstrap: [AlojamientoListComponent]
})
export class AlojamientoModule { }

