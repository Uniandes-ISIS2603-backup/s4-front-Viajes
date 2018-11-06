import { Component, OnInit } from '@angular/core';
import {Usuario} from '../usuario';
import {UsuarioService} from '../usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
  export class UsuarioListComponent implements OnInit {

    /**
     * Constructor of the component
     * @param usuarioService The usuario services provider
     */
    constructor(private usuarioService: UsuarioService) {}

    /**
     * The list of usuarios in TripBuilder
     */
    usuarios: Usuario[];

    /**
     * Asks the service to update the list of usuarios
     */
    getUsuarios(): void {
      this.usuarioService.getUsuarios()
        .subscribe(usuarios => this.usuarios = usuarios);
    }

    /**
     * This will initialize the component by retrieving the list of vuelos from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
      this.getUsuarios();
    }

  }
