import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Reserva} from './reserva';
import {ReservaDetail} from './reserva-detail';


import {environment} from '../../environments/environment';
const API_URL = environment.apiURL;
const reservas = '/reservas';


/**
* The service provider for everything related to books
*/
@Injectable()
export class ReservaService {

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) {}

    /**
    * Returns the Observable object containing the list of books retrieved from the API
    * @returns The list of books in real time
    */
    getReservas(): Observable<Reserva[]> {
        return this.http.get<Reserva[]>(API_URL + reservas);
    }

    /**
    * Creates a new book
    * @param reserva The new book
    * @returns The book with its new id if it was created, false if it wasn't
    */
    createReserva(reserva): Observable<ReservaDetail> {
        return this.http.post<ReservaDetail>(API_URL + reservas, reserva);
    }

    /**
    * Returns the Observable object with the details of an author retrieved from the API
    * @returns The author details
    */
    getReservaDetail(reservaId): Observable<ReservaDetail> {
        return this.http.get<ReservaDetail>(API_URL + reservas + '/' + reservaId);
    }

//    /**
//    * Creates a review
//    * @param review The review
//    * @returns True if the review was posted, false otherwise
//    */
//    createVuelo(reservaId, vuelo): Observable<Vuelo> {
//        return this.http.post<Vuelo>(API_URL + reservas + '/' + reservaId + vuelos, vuelo);
//    }

}
