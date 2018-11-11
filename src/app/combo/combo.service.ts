import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Combo} from './combo';
import {ComboDetail} from './combo-detail';
import {Reserva} from '../reserva/reserva';


import {environment} from '../../environments/environment';
//const API_URL = environment.apiURL;
const API_URL ="http://localhost:8080/s4_viajes-api";
const combos = '/combos';
const reservas = '/reservas';


/**
* The service provider for everything related to books
*/
@Injectable()
export class ComboService {

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) {}

    /**
    * Returns the Observable object containing the list of books retrieved from the API
    * @returns The list of books in real time
    */
    getCombos(): Observable<Combo[]> {
        return this.http.get<Combo[]>(API_URL + combos);
    }

    /**
    * Creates a new book
    * @param book The new book
    * @returns The book with its new id if it was created, false if it wasn't
    */
    createCombo(combo): Observable<ComboDetail> {
        return this.http.post<ComboDetail>(API_URL + combos, combo);
    }

    /**
    * Returns the Observable object with the details of an author retrieved from the API
    * @returns The author details
    */
    getComboDetail(comboId): Observable<ComboDetail> {
        return this.http.get<ComboDetail>(API_URL + combos + '/' + comboId);
    }

    /**
    * Creates a review
    * @param review The review
    * @returns True if the review was posted, false otherwise
    */
    createReserva(comboId, reserva): Observable<Reserva> {
        return this.http.post<Reserva>(API_URL + combos + '/' + comboId + reservas, reserva);
    }



  /**
   * Creates an editorial
   * @param editorial The editorial which will be created
   * @returns The confirmation of the editorial's creation
   */
  associateActividadGuia(comboId,reservaId): Observable<Reserva> {

    return this.http.post<Reserva>(API_URL + combos + '/' + comboId + reservas + '/' + reservaId,null)

  }
//    /**
//        * Updates a new book
//        * @param book The updated book
//        * @returns The updated book
//        */
//    updateCombo(combo): Observable<ComboDetail> {
//        return this.http.put<ComboDetail>(API_URL + combos + '/' + combo.id, combo);
//    }
}
