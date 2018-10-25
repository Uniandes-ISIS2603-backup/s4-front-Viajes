import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActividadListComponent } from './actividad-list/actividad-list.component';
import { ActividadService } from './actividad.service';
import { ActividadDetailComponent } from './actividad-detail/actividad-detail.component';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule
    ],
    declarations: [ActividadListComponent,ActividadDetailComponent],
    providers: [ActividadService],
    bootstrap: [ActividadListComponent]
})
export class ActividadModule { }

