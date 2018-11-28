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
import { VueloEditComponent } from './vuelo-edit/vuelo-edit.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    NgbModule,
    FormsModule
  ],

  declarations: [VueloListComponent,
    VueloDetailComponent, VueloCreateComponent, VueloEditComponent
  ],

  providers: [VueloService],
  bootstrap: [VueloListComponent]
})
export class VueloModule { }
