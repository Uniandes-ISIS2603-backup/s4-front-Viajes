import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UsuarioService} from '../usuario.service';
import {Usuario} from '../usuario';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {


  /**
   * Constructor for the component
   * @param usuarioService The usuario services provider
   * @param authService The auth to set roles.
   * @param toastrService The toastr to show messages to the user
   */
  constructor(private usuarioService: UsuarioService,
              private toastrService: ToastrService,
              private authService: AuthService,

              private router: Router) {
  }

  /**
   * El nuevo usuario
   */

  usuario: Usuario;

  roles: String[]
  /**
   * The output which tells the parent component
   * that the user no longer wants to create an usuario
   */
  @Output() cancel = new EventEmitter();

  /**
   * The output which tells the parent component
   * that the user created a new usuario
   */
  @Output() create = new EventEmitter();

  /**
   * Creates an usuario
   */
  createUsuario(): Usuario {
    console.log(this.usuario);
    this.usuarioService.createUsuario(this.usuario)
      .subscribe((usuario) => {
        this.usuario = usuario;
        this.create.emit();
        this.toastrService.success('El usuario fue creado', 'Registro de usuario');
      });
    this.authService.login(this.usuario.role);
    return this.usuario;

  }
  /**
   * Informs the parent component that the user no longer wants to create an usuario
   */
  cancelCreation(): void {
    this.cancel.emit();
  }



  ngOnInit() {
      this.usuario = new Usuario();
     this.roles = ['Administrator', 'Cliente', 'Proveedor'];


  }

}

