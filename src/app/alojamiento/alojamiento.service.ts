/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Alojamiento} from './alojamiento';
import { environment } from '../../environments/environment';



const API_URL = "../../assets/";
const alojamientos = '/alojamientoData.json';


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
}


