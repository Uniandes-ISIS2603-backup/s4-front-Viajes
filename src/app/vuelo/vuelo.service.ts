import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Vuelo} from './vuelo';

<<<<<<< HEAD
const API_URL = "http://localhost:8000/frontstepbystep-api/api";
const vuelos = '/vuelos';
=======
const API_URL = '../../assets/';
const vuelos = '/vuelo.json';
>>>>>>> d4a97eeaf205b2ddaabae5d9faf0f8746b19ec8c

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
}
