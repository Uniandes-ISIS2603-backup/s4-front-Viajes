import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Vuelo} from './vuelo';
import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const vuelos = '/vuelos';
import { VueloDetail } from './vuelo-detail';

/**
* The service provider for everything related to vuelos
*/
@Injectable()
export class VueloService {

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) {}
    /**
    * Returns the Observable object containing the list of vuelos retrieved from the API
    * @returns The list of vuelos in real time
    */
    getVuelos(): Observable<Vuelo[]> {
        return this.http.get<Vuelo[]>(API_URL + vuelos);
    }

    getVueloDetail(vueloId): Observable<VueloDetail> {
    return this.http.get<VueloDetail>(API_URL + vuelos + '/' + vueloId);
    }

  /**
   * Crea un proveedor
   * @param proveedor The new proveedor
   * @returns The new proveedor with the new id
   */
  createVuelo(vuelo): Observable<Vuelo> {
    return this.http.post<Vuelo>(API_URL + vuelos, vuelo);
  }
}
