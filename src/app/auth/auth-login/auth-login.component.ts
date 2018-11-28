import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../usuario/usuario';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {
  /**
   * Constructor for the component
   * @param authService Auth service provider
   * @param toastrService The toastr to show messages to the user
   */
  constructor(
    private authService: AuthService,
    private toastrService: ToastrService,
  ) { }

  user: Usuario;

  roles: String[];

  /**
   * Logs the user in with the selected role
   */
  login(): void {
    this.authService.login(this.user.role);
    this.toastrService.success('Logged in');
  }

  /**
   * This function will initialize the component
   */
  ngOnInit() {
    this.user = new Usuario();
    this.roles = ['Administrator', 'Cliente', 'Proveedor'];
  }

}

