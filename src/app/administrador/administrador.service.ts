import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Administrador } from './administrador';
import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const administradores = '/administradores';

/**
 * The service provider for everything related to "usuarios"
 */
@Injectable()
export class AdministradorService {

  /**
   * Constructor of the service
   * @param http The HttpClient - This is necessary in order to perform requests
   */
  constructor(private http: HttpClient) { }

  /**
   * Returns the Observable object containing the list of users retrieved from the API
   * @returns The list of users in real time
   */
  getAdministradores(): Observable<Administrador[]> {
    return this.http.get<Administrador[]>(API_URL + administradores);
  }

}
