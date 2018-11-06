import { Component, OnInit } from '@angular/core';
import {AdministradorService} from '../administrador.service';
import {Administrador} from '../administrador';

@Component({
  selector: 'app-administrador-list',
  templateUrl: './administrador-list.component.html',
  styleUrls: ['./administrador-list.component.css']
})
export class AdministradorListComponent implements OnInit {

  constructor(private administradorService: AdministradorService) { }

  /**
   * La lista de administradores de TripBuilder.
   */

  administradores: Administrador[];

  /**
   * Le pide al servicio la lista de administradores
   */
  getAdministradores(): void {
    this.administradorService.getAdministradores().subscribe(administradores => this.administradores = administradores);

  }


  ngOnInit() {
    this.getAdministradores();
  }

}
