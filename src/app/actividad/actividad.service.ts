import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Actividad } from './actividad';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const API_URL = '../../assets/';
const actividades = '/actividades.json'

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

}
