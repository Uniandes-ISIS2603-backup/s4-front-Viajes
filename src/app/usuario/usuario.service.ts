import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Usuario } from './usuario';
import { environment } from '../../environments/environment';
import {UsuarioDetail} from './usuario-detail';

const API_URL = environment.apiURL;
const usuarios = '/usuarios';

/**
 * The service provider for everything related to "usuarios"
 */
@Injectable()
export class UsuarioService {

  /**
   * Constructor of the service
   * @param http The HttpClient - This is necessary in order to perform requests
   */
  constructor(private http: HttpClient) { }

  /**
   * Returns the Observable object containing the list of users retrieved from the API
   * @returns The list of users in real time
   */
  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(API_URL + usuarios);
  }

/**
 * Returns the Observable object with the details of an usuario retrieved from the API
* @returns The usuario details
*/
  getUsuarioDetail(usuarioId): Observable<UsuarioDetail> {
    return this.http.get<UsuarioDetail>(API_URL + usuarios + '/' + usuarioId);
  }

  /**
   * Creates an usuario
   * @param usuario The usuario which will be created
   * @returns The confirmation of the usuario creation
   */
  createUsuario(usuario): Observable<Usuario> {
    console.log(usuario);
    return this.http.post<Usuario>(API_URL + usuarios, usuario);
  }

  updateUsuario(usuario): Observable<UsuarioDetail> {
    return this.http.put<UsuarioDetail>(API_URL + usuarios + '/' + usuario.id, usuario);
  }

  /**
   * Deletes an usuario from TripBuilder
   * @param usuarioId The id of the usuario
   * @returns The confirmation that the usuario was deleted
   */
  deleteUsuario(usuarioId): Observable<boolean> {
    return this.http.delete<boolean>(API_URL + usuarios + '/' + usuarioId);
  }
}
