import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {VueloService} from './vuelo.service';
import { VueloListComponent } from './vuelo-list/vuelo-list.component';
import { VueloDetailComponent } from './vuelo-detail/vuelo-detail.component';
import {AppRoutingModule} from '../app-routing/app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],

  declarations: [VueloListComponent,
    VueloDetailComponent
  ],

  providers: [VueloService],
  bootstrap: [VueloListComponent]
})
export class VueloModule { }
