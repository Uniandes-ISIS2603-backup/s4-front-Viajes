import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministradorListComponent } from './administrador-list/administrador-list.component';
import {Administrador} from './administrador';
import {AdministradorService} from './administrador.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AdministradorListComponent],
  providers: [AdministradorService],
  bootstrap: [AdministradorListComponent]
})
export class AdministradorModule { }
