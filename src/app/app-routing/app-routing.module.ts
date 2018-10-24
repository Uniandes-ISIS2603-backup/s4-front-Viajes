import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {VueloListComponent} from '../vuelo/vuelo-list/vuelo-list.component';
import {UsuarioListComponent} from '../usuario/usuario-list/usuario-list.component';
import {ProveedorListComponent} from '../proveedor/proveedor-list/proveedor-list.component';

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
    path: 'proveedores',
    children: [
      {
        path: 'list',
        component: ProveedorListComponent
      }
    ]
  },

  {
    path: 'usuarios',
    children: [
      {
        path: 'list',
        component: UsuarioListComponent
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
