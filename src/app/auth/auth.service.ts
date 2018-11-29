import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {NgxRolesService, NgxPermissionsService} from 'ngx-permissions';
import 'rxjs/add/operator/catch';

/**
 * The service provider for everything related to authentication
 */
@Injectable()
export class AuthService {

  /**
   * Constructor of the service
   * @param router Angular's Router to redirect the user on login or logout
   * @param roleService NgxRolesService to manage authentication roles
   * @param permissionsService NgxPermissionsService to manage authentication permissions
   */
  constructor (private router: Router, private roleService: NgxRolesService, private permissionsService: NgxPermissionsService) { }

  start (): void {
    this.permissionsService.flushPermissions();
    this.roleService.flushRoles();
    this.permissionsService.loadPermissions(['']);
    const role = localStorage.getItem('role');
    if (!role) {
      this.setGuestRole();
    } else if (role === 'ADMIN') {
      this.setAdministratorRole();
    } else {
      this.setClientRole();
    }
  }

  setGuestRole (): void {
    this.roleService.flushRoles();
    this.roleService.addRole('GUEST', ['']);
  }

  setProveedorRole (): void {
    this.roleService.flushRoles();
    this.roleService.addRole('PROV', ['']);
  }


  setClientRole (): void {
    this.roleService.flushRoles();
    this.roleService.addRole('CLIENT', ['']);
    localStorage.setItem('role', 'CLIENT');
  }

  setAdministratorRole (): void {
    this.roleService.flushRoles();
    this.roleService.addRole('ADMIN', ['']);
    localStorage.setItem('role', 'ADMIN');
  }

  printRole (): void {
    console.log(this.roleService.getRoles());
  }

  /**
   * Logs the user in with the desired role
   * @param role The desired role to set to the user
   */
  login (role): void {
    if (role === 'Administrator') {
      this.setAdministratorRole();
    } else if (role === 'Proveedor') {
      this.setProveedorRole();
    } else {
      this.setClientRole();
    }
    this.router.navigateByUrl('/');
  }

  /**
   * Logs the user out
   */
  logout (): void {
    this.roleService.flushRoles();
    this.setGuestRole();
    localStorage.removeItem('role');
    this.router.navigateByUrl('/');
  }
}
