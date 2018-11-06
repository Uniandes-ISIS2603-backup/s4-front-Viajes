import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {VueloListComponent} from '../vuelo/vuelo-list/vuelo-list.component';
import {UsuarioListComponent} from '../usuario/usuario-list/usuario-list.component';
import {AdministradorListComponent} from '../administrador/administrador-list/administrador-list.component';
import {UsuarioDetailComponent} from '../usuario-detail/usuario-detail.component';

const routes: Routes = [

    {
        path: 'vuelos',
        children: [
            {
                path: 'list',
                component: VueloListComponent
            }
        ]
    },

  {
    path: 'usuarios',
    children: [
      {
        path: 'list',
        component: UsuarioListComponent
      }, {
        path: 'id',
        component: UsuarioDetailComponent
      }
    ]
  },

  {
    path: 'administradores',
    children: [
      {
        path: 'list',
        component: AdministradorListComponent
      }
    ]
  }


];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
