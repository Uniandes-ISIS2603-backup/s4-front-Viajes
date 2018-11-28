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
import { ComboModule } from './combo/combo.module';
import { ReservaModule } from './reserva/reserva.module';
import { PagoModule } from './pago/pago.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ModalDialogModule } from 'ngx-modal-dialog';
import {NgxPermissionsModule} from 'ngx-permissions';
import {AuthModule} from './auth/auth.module';


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
    ModalDialogModule.forRoot(),
    NgbModule,
    MedallaModule,
    AlojamientoModule,
    TransporteModule,
    ComboModule,
    ReservaModule,
    PagoModule,
    FormsModule,
    ModalDialogModule.forRoot(),
    AdministradorModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),

    ToastrModule.forRoot(),
    NgxPermissionsModule.forRoot(),
    BrowserAnimationsModule,
    AuthModule
  ],
   bootstrap: [AppComponent],
  providers: [        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true
        }]
})
export class AppModule { }
