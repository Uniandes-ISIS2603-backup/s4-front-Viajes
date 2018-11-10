import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Alojamiento} from './alojamiento';
import {AlojamientoDetail} from './alojamiento-detail';
import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const alojamientos = '/alojamientos';


/**
* El servicio relacionado a  alojamientos
*/
@Injectable()
export class AlojamientoService {

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) {}

    /**
    * Retorna la lista de alojamientos a partir del archivo
    * @returns La lista de alojamientos.
    */
    getAlojamientos(): Observable<Alojamiento[]> { 
        return this.http.get<Alojamiento[]>(API_URL + alojamientos);
    }
    
    /**
    * Crea un nuevo alojamiento
    * @param alojamiento 
    * @returns True si se crea correctamente, false de lo contrario
    */
    createAlojamiento(alojamiento): Observable<AlojamientoDetail> {
        return this.http.post<AlojamientoDetail>(API_URL + alojamientos, alojamiento);
    }
    
    /**
    * Retorna el detail de alojameinto
    * @returns Detail del recurso
    */
    getAlojamientoDetail(alojamientoId): Observable<AlojamientoDetail> {
        return this.http.get<AlojamientoDetail>(API_URL + alojamientos + '/' + alojamientoId);
    }
}


