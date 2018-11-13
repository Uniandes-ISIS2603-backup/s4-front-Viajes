import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './interceptors/httperrorinterceptor.service';
import {FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';

import { UsuarioModule } from './usuario/usuario.module';
import { AdministradorModule } from './administrador/administrador.module';
import { VueloModule } from './vuelo/vuelo.module';

import { ActividadModule } from './actividad/actividad.module';
import { GuiaModule } from './guia/guia.module';

import { MedallaModule } from './medalla/medalla.module';
import { ProveedorModule } from './proveedor/proveedor.module';

import { AlojamientoModule } from './alojamiento/alojamiento.module';
import { TransporteModule } from './transporte/transporte.module';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UsuarioModule,
    VueloModule,
    ActividadModule,
    GuiaModule, 
    ProveedorModule,
    NgbModule,
    MedallaModule,
    AlojamientoModule,
    TransporteModule,
    FormsModule,
    AdministradorModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
   bootstrap: [AppComponent],
  providers: [        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true
        }]
})
export class AppModule { }
