import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Pago} from './pago';
import {PagoDetail} from './pago-detail';


import {environment} from '../../environments/environment';
//const API_URL = environment.apiURL;
const API_URL ="http://localhost:8080/s4_viajes-api";
const pagos = '/pagos';


/**
* The service provider for everything related to books
*/
@Injectable()
export class PagoService {

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) {}

    /**
    * Returns the Observable object containing the list of books retrieved from the API
    * @returns The list of books in real time
    */
    getPagos(): Observable<Pago[]> {
        return this.http.get<Pago[]>(API_URL + pagos);
    }

    /**
    * Creates a new book
    * @param reserva The new book
    * @returns The book with its new id if it was created, false if it wasn't
    */
    createPago(pago): Observable<PagoDetail> {
        return this.http.post<PagoDetail>(API_URL + pagos, pago);
    }

    /**
    * Returns the Observable object with the details of an author retrieved from the API
    * @returns The author details
    */
    getPagoDetail(pagoId): Observable<PagoDetail> {
        return this.http.get<PagoDetail>(API_URL + pagos + '/' + pagoId);
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
