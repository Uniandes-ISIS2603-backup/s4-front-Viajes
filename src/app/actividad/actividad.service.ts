import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Actividad } from './actividad';
import { ActividadDetail } from './actividad-detail'
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const actividades = '/actividad';
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
        return this.http.get<Actividad[]>(API_URL + actividades);
    }
    
        /**
    * Returns the Observable object with the details of an activity retrieved from the API
    * @returns The activity details
    */
    getActividadDetail(actividadId): Observable<ActividadDetail> {
        return this.http.get<ActividadDetail>(API_URL + actividades + '/' + actividadId);
    }

}