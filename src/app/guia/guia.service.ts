import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Guia } from './guia';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const guia = '/guia';
/**
* The service provider for everything related to Activities
*/
@Injectable()
export class GuiaService {

    /**
    * Constructor of the activity
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }

    /**
    * Returns the Observable object containing the list of Activities retrieved from the API
    * @returns The list of Actividades in real time
    */
    getGuias(): Observable<Guia[]> {
        return this.http.get<Guia[]>(API_URL + guia);
    }
    
}
