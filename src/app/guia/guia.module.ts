import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuiaListComponent } from './guia-list/guia-list.component';
import { GuiaService } from './guia.service';

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
    declarations: [GuiaListComponent],
    providers: [GuiaService],
    bootstrap: [GuiaListComponent],
    exports: [GuiaListComponent]
})
export class GuiaModule { }