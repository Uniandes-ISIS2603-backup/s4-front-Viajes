import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UsuarioModule } from './usuario/usuario.module';
import { VueloModule } from './vuelo/vuelo.module';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
      UsuarioModule,
        VueloModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
