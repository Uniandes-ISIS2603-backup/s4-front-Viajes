import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Actividad } from './actividad';
import { Guia } from '../guia/guia';
import { ActividadDetail } from './actividad-detail'
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const actividad = '/actividad';
const actividades = '/actividades';
const guias = '/guias';
const guia = '/guia';

/**
 * The service provider for everything related to Activities
 */
@Injectable()
export class ActividadService {

  /**
   * Constructor of the activity
   * @param http The HttpClient - This is necessary in order to perform requests
   */
  constructor(private http: HttpClient) { }

  /**
   * Returns the Observable object containing the list of Activities retrieved from the API
   * @returns The list of Actividades in real time
   */
  getActividades(): Observable<Actividad[]> {
    return this.http.get<Actividad[]>(API_URL + actividad);
  }

  /**
   * Returns the Observable object with the details of an activity retrieved from the API
   * @returns The activity details
   */
  getActividadDetail(actividadId): Observable<ActividadDetail> {
    return this.http.get<ActividadDetail>(API_URL + actividad + '/' + actividadId);
  }

  /**
   * Creates an editorial
   * @param editorial The editorial which will be created
   * @returns The confirmation of the editorial's creation
   */
  createActividad(actividad): Observable<ActividadDetail> {
    return this.http.post<ActividadDetail>(API_URL + actividad, actividad);
  }

  /**
   * Creates an editorial
   * @param editorial The editorial which will be created
   * @returns The confirmation of the editorial's creation
   */
  associateActividadGuia(actividadId,guiaParam): Observable<Guia> {

    return this.http.post<Guia>(API_URL + actividades + '/' + actividadId + guias,guiaParam)

  }
  
    /**
    * Updates an editorial
    * @param editorial The editorial which will be update
    * @returns The confirmation of the editorial's update
    */
    updateActividad(actividadId,actividadParam): Observable<ActividadDetail> {
        return this.http.put<ActividadDetail>(API_URL + actividad + '/' + actividadId, actividadParam);
    }
    
    /**
    * Deletes an editorial
    * @param editorialId The editorial which will be deleted
    * @returns True if the editorial was deleted, false otherwise
    */
    deleteActividad(actividadId): Observable<ActividadDetail> {
        return this.http.delete<ActividadDetail>(API_URL + actividades + '/' + actividadId);
    }

}
