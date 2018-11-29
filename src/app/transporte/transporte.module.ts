import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing/app-routing.module';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { TransporteListComponent } from './transporte-list/transporte-list.component';
import {TransporteService} from './transporte.service';
import { TransporteDetailComponent } from './transporte-detail/transporte-detail.component';
import { TransporteCreateComponent } from './transporte-create/transporte-create.component';
import {NgxPermissionsModule} from 'ngx-permissions';

@NgModule({
  declarations: [TransporteListComponent, TransporteDetailComponent, TransporteCreateComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPermissionsModule,
    CommonModule,
    FormsModule
    // NgbModule
  ],
  providers: [TransporteService],
  bootstrap: [TransporteListComponent]
})
export class TransporteModule { }

