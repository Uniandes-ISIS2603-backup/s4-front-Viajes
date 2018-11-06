import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from '../app-routing/app-routing.module';
import {MedallaService} from './medalla.service';
import {MedallaListComponent} from './medalla-list/medalla-list.component';
import { MedallaDetailComponent } from './medalla-detail/medalla-detail.component';
import { MedallaCreateComponent } from './medalla-create/medalla-create.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  declarations: [MedallaListComponent, MedallaDetailComponent, MedallaCreateComponent],
  providers :[MedallaService],
  bootstrap: [MedallaListComponent]
})
export class MedallaModule { }
