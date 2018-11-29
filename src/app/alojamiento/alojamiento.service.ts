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
    * Retorna el detail de alojameinto
    * @returns Detail del recurso
    */
    getAlojamientoDetail(alojamientoId): Observable<AlojamientoDetail> {
        return this.http.get<AlojamientoDetail>(API_URL + alojamientos + '/' + alojamientoId);
    }
    
    /**
    * Crea un nuevo alojamiento
    * @param alojamiento 
    * @returns True si se crea correctamente, false de lo contrario
    */
    createAlojamiento(alojamiento): Observable<Alojamiento> {
        return this.http.post<Alojamiento>(API_URL + alojamientos, alojamiento);
    }
    
    /**
    * Actualiza un alojamiento
    * @param alojameinto
    * @returns Confirmacion del alojameinto actualizado
    */
    updateAlojamiento(alojamiento): Observable<AlojamientoDetail> {
    return this.http.put<AlojamientoDetail>(API_URL + alojamientos + '/' + alojamiento.id, alojamiento);
    }
    
    /**
    * Deletes an author from the BookStore
    * @param authorId The id of the author
    * @returns The confirmation that the author was deleted
    */
    deleteAlojamiento(alojamientoId): Observable<boolean> {
    return this.http.delete<boolean>(API_URL + alojamientos + '/' + alojamientoId);
    }   
}