import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Transporte} from './transporte';
import {TransporteDetail} from './transporte-detail';
import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const transportes = '/transportes';

/**
* El servicio relacionado a transportes
*/
@Injectable()
export class TransporteService {

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) {}

    /**
    * Retorna la lista de transportes a partir del archivo
    * @returns La lista de transportes.
    */
    getTransportes(): Observable<Transporte[]> { 
        return this.http.get<Transporte[]>(API_URL + transportes);
    }
    
    /**
    * Crea un nuevo transporte
    * @param transporte 
    * @returns True si se crea correctamente, false de lo contrario
    */
    createTransporte(transporte): Observable<TransporteDetail> {
        return this.http.post<TransporteDetail>(API_URL + transportes, transporte);
    }
    
    /**
    * Retorna el detail de transporte
    * @returns Detail del recurso
    */
    getTransporteDetail(transporteId): Observable<TransporteDetail> {
        return this.http.get<TransporteDetail>(API_URL + transportes + '/' + transporteId);
    }

