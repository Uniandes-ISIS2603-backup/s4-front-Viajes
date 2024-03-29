import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';

import {VueloListComponent} from '../vuelo/vuelo-list/vuelo-list.component';
import {VueloDetailComponent} from '../vuelo/vuelo-detail/vuelo-detail.component';
import {UsuarioListComponent} from '../usuario/usuario-list/usuario-list.component';
import {AdministradorListComponent} from '../administrador/administrador-list/administrador-list.component';
import {UsuarioDetailComponent} from '../usuario/usuario-detail/usuario-detail.component';
import {ProveedorListComponent} from '../proveedor/proveedor-list/proveedor-list.component';
import {ProveedorDetailComponent} from '../proveedor/proveedor-detail/proveedor-detail.component';

import {ActividadListComponent} from '../actividad/actividad-list/actividad-list.component';
import {ActividadDetailComponent} from '../actividad/actividad-detail/actividad-detail.component';
import {ActividadEditComponent} from '../actividad/actividad-edit/actividad-edit.component';
import {GuiaListComponent} from '../guia/guia-list/guia-list.component';
import {GuiaDetailComponent} from '../guia/guia-detail/guia-detail.component';

import {ActividadCreateComponent} from '../actividad/actividad-create/actividad-create.component';

import {MedallaListComponent} from '../medalla/medalla-list/medalla-list.component';
import {MedallaDetailComponent} from '../medalla/medalla-detail/medalla-detail.component';
import {MedallaEditComponent} from '../medalla/medalla-edit/medalla-edit.component';

import {UsuarioCreateComponent} from '../usuario/usuario-create/usuario-create.component';

import {AlojamientoListComponent} from '../alojamiento/alojamiento-list/alojamiento-list.component';
import {TransporteListComponent} from '../transporte/transporte-list/transporte-list.component'; 

import {ComboListComponent} from '../combo/combo-list/combo-list.component';
import {ComboDetailComponent} from '../combo/combo-detail/combo-detail.component';

import {ComboCreateComponent} from '../combo/combo-create/combo-create.component';


import {ReservaListComponent} from '../reserva/reserva-list/reserva-list.component';
import {ReservaDetailComponent} from '../reserva/reserva-detail/reserva-detail.component';

import {ReservaCreateComponent} from '../reserva/reserva-create/reserva-create.component';

import {PagoListComponent} from '../pago/pago-list/pago-list.component';
import {PagoDetailComponent} from '../pago/pago-detail/pago-detail.component';

import {PagoCreateComponent} from '../pago/pago-create/pago-create.component';
import {ProveedorCreateComponent} from '../proveedor/proveedor-create/proveedor-create.component';
import {ProveedorEditComponent} from '../proveedor/proveedor-edit/proveedor-edit.component';
import {AuthLoginComponent} from '../auth/auth-login/auth-login.component';



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
            component: VueloDetailComponent,
            runGuardsAndResolvers: 'always'
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
            path: ':id/edit',
            component: MedallaEditComponent,
              canActivate: [NgxPermissionsGuard],
              data: {
                permissions: {
                  only: ['ADMIN']
                }
            }},
            {
            path: ':id/edit',
            component: MedallaEditComponent
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
                runGuardsAndResolvers: 'always',

                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN']
                    }
                }
            },
            {
                path: ':id/edit',
                component: ActividadEditComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN']
                    }
                }
                
            }
        ]
    },
    {
        path: 'alojamientos',
        children: [
            {
                path: 'list',
                component: AlojamientoListComponent
            }
        ]
    },
    {
        path: 'transportes',
        children: [
            {
                path: 'list',
                component: TransporteListComponent
            }
        ]
    },

  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: AuthLoginComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
          permissions: {
            only: ['GUEST']
          }
        }
      }
    ]
  },


  {
        path: 'guias',
        children: [
            {
                path: 'list',
                component: GuiaListComponent
            },
             {
                path: ':documento',
                component: GuiaDetailComponent
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
            path: 'add',
            component: ProveedorCreateComponent,
            runGuardsAndResolvers: 'always',
            data: {
              permissions: {
                only: ['ADMIN']
              }
            }
          },
          {
            path: ':id/edit',
            component: ProveedorEditComponent,
            data: {
              permissions: {
                only: ['ADMIN']
              }
            }
          },
          {
            path: ':id',
            component: ProveedorDetailComponent,
            runGuardsAndResolvers: 'always',
            data: {
              permissions: {
                only: ['ADMIN']
              }
            }
          }
          ]
    },
  {
    path: 'usuarios',
    children: [
      {
        path: 'list',
        component: UsuarioListComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
          permissions: {
            only: ['ADMIN']
          }
        }
      },
   {
        path: 'id',
        component: UsuarioDetailComponent,
     data: {
       permissions: {
         only: ['ADMIN']
       }
     }
      }
    ]
  },

  {
    path: 'registro',
    component: UsuarioCreateComponent,
    data: {
      permissions: {
        only: ['ADMIN']
      }
    }

  },

  {
    path: 'administradores',
    children: [
      {
        path: 'list',
        component: AdministradorListComponent
      }
    ]
  },
  {
        path: 'combos',
        children: [
            {
                path: 'list',
                component: ComboListComponent                
             
            },
            {
                path: ':identificador',
                component: ComboDetailComponent
             },
           {
                path: 'create',
                component: ComboCreateComponent,
                runGuardsAndResolvers: 'always'
            }
        ]
    },
      {
        path: 'reservas',
        children: [
            {
                path: 'list',
                component: ReservaListComponent                
             
            },
            {
                path: ':identificador',
                component: ReservaDetailComponent
             },
           {
                path: 'create',
                component: ReservaCreateComponent,
                runGuardsAndResolvers: 'always'
            }
        ]
    },
      {
        path: 'pagos',
        children: [
            {
                path: 'list',
                component: PagoListComponent                
             
            },
            {
                path: ':identificador',
                component: PagoDetailComponent
             },
           {
                path: 'create',
                component: PagoCreateComponent,
                runGuardsAndResolvers: 'always'
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
