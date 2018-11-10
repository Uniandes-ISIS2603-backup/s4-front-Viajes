/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Transporte} from './transporte';


const API_URL = "../../assets/";
const transportes = '/transporteData.json';

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
}
