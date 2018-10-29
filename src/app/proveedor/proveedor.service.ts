import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Proveedor} from './proveedor';
import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const proveedores = '/proveedores';
import { ProveedorDetail } from './proveedor-detail';

/**
 * The service provider for everything related to proveedores
 */
@Injectable()
export class ProveedorService {

  /**
   * Constructor of the service
   * @param http The HttpClient - This is necessary in order to perform requests
   */
  constructor(private http: HttpClient) {}

  /**
   * Returns the Observable object containing the list of proveedores retrieved from the API
   * @returns The list of proveedores in real time
   */
  getProveedores(): Observable<Proveedor[]> {
    return this.http.get<Proveedor[]>(API_URL + proveedores);
  }

  getProveedorDetail(proveedorId): Observable<ProveedorDetail> {
    return this.http.get<ProveedorDetail>(API_URL + proveedores + '/' + proveedorId);
  }
}
