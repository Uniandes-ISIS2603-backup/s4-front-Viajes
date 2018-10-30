import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from '../app-routing/app-routing.module';
import {ProveedorService} from './proveedor.service';
import {ProveedorListComponent} from './proveedor-list/proveedor-list.component';
import {ProveedorDetailComponent} from './proveedor-detail/proveedor-detail.component';
import { ProveedorCreateComponent } from './proveedor-create/proveedor-create.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  declarations: [ProveedorListComponent,
    ProveedorDetailComponent,
    ProveedorCreateComponent
  ],
  providers: [ProveedorService],
  bootstrap: [ProveedorListComponent]
})
export class ProveedorModule { }
