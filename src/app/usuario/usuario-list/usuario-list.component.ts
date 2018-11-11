import { Component, OnInit } from '@angular/core';
import {Usuario} from '../usuario';
import {UsuarioService} from '../usuario.service';
import {Actividad} from '../../actividad/actividad';
import {ActividadDetail} from '../../actividad/actividad-detail';
import {UsuarioDetail} from '../usuario-detail';

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
    usuarioId: number;
    selectedUsuario: Usuario;

    /**
     * Asks the service to update the list of usuarios
     */
    getUsuarios(): void {
      this.usuarioService.getUsuarios()
        .subscribe(usuarios => this.usuarios = usuarios);
    }


  usuarioActual(usuarioId: number): Usuario {

    this.usuarioId = usuarioId;
    this.selectedUsuario = new Usuario();
    this.getUsuariosDetail();
    return this.selectedUsuario;

  }

  getUsuariosDetail(): void {
    this.usuarioService.getUsuarioDetail(this.usuarioId)
      .subscribe( selectedUsuario=> {
          this.selectedUsuario = selectedUsuario
      });
  }

  onSelected(usuarioId: number): void {
    this.usuarioId = usuarioId;
    this.selectedUsuario = new UsuarioDetail();
    this.getUsuariosDetail();


  }



    /**
     * This will initialize the component by retrieving the list of usuarios from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
      this.getUsuarios();
    }

  }
