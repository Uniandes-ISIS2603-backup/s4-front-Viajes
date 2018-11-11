import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {UsuarioService} from './usuario.service';
import { UsuarioEntradasComponent } from './usuario-entradas/usuario-entradas.component';
import { UsuarioCreateComponent } from './usuario-create/usuario-create.component';
import {UsuarioDetailComponent} from './usuario-detail/usuario-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule  ],
  declarations: [UsuarioListComponent, UsuarioEntradasComponent, UsuarioCreateComponent, UsuarioDetailComponent],
  providers: [UsuarioService],
  bootstrap: [UsuarioListComponent]
})
export class UsuarioModule { }
