import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing/app-routing.module';

import { TransporteListComponent } from './transporte-list/transporte-list.component';
import {TransporteService} from './transporte.service';

@NgModule({
  declarations: [TransporteListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [TransporteService],
  bootstrap: [TransporteListComponent]
})
export class TransporteModule { }

