import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {VueloListComponent} from '../vuelo/vuelo-list/vuelo-list.component';
import {VueloDetailComponent} from '../vuelo/vuelo-detail/vuelo-detail.component';
import {UsuarioListComponent} from '../usuario/usuario-list/usuario-list.component';
import {AdministradorListComponent} from '../administrador/administrador-list/administrador-list.component';
import {UsuarioDetailComponent} from '../usuario-detail/usuario-detail.component';
import {ProveedorListComponent} from '../proveedor/proveedor-list/proveedor-list.component';
import {ProveedorDetailComponent} from '../proveedor/proveedor-detail/proveedor-detail.component';

import {ActividadListComponent} from '../actividad/actividad-list/actividad-list.component';
import {ActividadDetailComponent} from '../actividad/actividad-detail/actividad-detail.component';
import {GuiaListComponent} from '../guia/guia-list/guia-list.component';

import {ActividadCreateComponent} from '../actividad/actividad-create/actividad-create.component';

import {MedallaListComponent} from '../medalla/medalla-list/medalla-list.component';
import {MedallaDetailComponent} from '../medalla/medalla-detail/medalla-detail.component';

const routes: Routes = [

    {
        path: 'vuelos',
        children: [
            {
                path: 'list',
                component: VueloListComponent
            },
          {
            path: ':id',
            component: VueloDetailComponent
          }
        ]
    },
    
    {
        path: 'medallas',
        children: [
            {
                path: 'list',
                component: MedallaListComponent
            },
            {
                path: ':id',
                component: MedallaDetailComponent
            }
        ]
    },
    
    {
        path: 'actividades',
        children: [
            {
                path: 'list',
                component: ActividadListComponent                
             
            },
            {
                path: ':identificador',
                component: ActividadDetailComponent
             },
           {
                path: 'create',
                component: ActividadCreateComponent,
                runGuardsAndResolvers: 'always'
            }
        ]
    },
    
    {
        path: 'guias',
        children: [
            {
                path: 'list',
                component: GuiaListComponent
            }
        ]
    },
    
  {
        path: 'proveedores',
        children: [
           {
               path: 'list',
               component: ProveedorListComponent
           },
          {
             path: ':id',
             component: ProveedorDetailComponent
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
