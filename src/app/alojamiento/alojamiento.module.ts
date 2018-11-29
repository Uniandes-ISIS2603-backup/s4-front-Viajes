import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AlojamientoService} from './alojamiento.service';
import { AlojamientoListComponent } from './alojamiento-list/alojamiento-list.component';
import { AlojamientoDetailComponent } from './alojamiento-detail/alojamiento-detail.component';
import { AlojamientoCreateComponent } from './alojamiento-create/alojamiento-create.component';
import { AlojamientoEditComponent } from './alojamiento-edit/alojamiento-edit.component';
import {NgxPermissionsModule} from 'ngx-permissions';


@NgModule({
  declarations: [AlojamientoListComponent, AlojamientoDetailComponent, AlojamientoCreateComponent, AlojamientoEditComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPermissionsModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    NgbModule
  ],
  providers: [AlojamientoService],
  bootstrap: [AlojamientoListComponent]
})
export class AlojamientoModule { }

