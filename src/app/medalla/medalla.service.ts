import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Medalla} from './medalla';
import {MedallaDetail} from './medalla-detail'
import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const medallas = '/medallas';

@Injectable()
export class MedallaService {
  constructor(private http: HttpClient) { }
  getMedallas() : Observable<Medalla[]> {
      return this.http.get<Medalla[]>(API_URL + medallas);
  }
  getMedallaDetail(medallaId): Observable<MedallaDetail> {
      return this.http.get<MedallaDetail>(API_URL + medallas + '/' + medallaId);
  }
   /**
    * Creates a medalla
    * @param medalla The new medalla
    * @returns The new medalla with the new id
    */
    createMedalla(medalla): Observable<Medalla> {
        return this.http.post<Medalla>(API_URL + medallas, medalla);
    }
    /**
    * Updates a medalla
    * @param medalla The medalla's information updated
    * @returns The confirmation that the medalla was updated
    */
    updateMedalla(medalla): Observable<MedallaDetail> {
        return this.http.put<AuthorDetail>(API_URL + medallas + '/' + medalla.id, medalla);
    }
    /**
    * Deletes an editorial
    * @param editorialId The editorial which will be deleted
    * @returns True if the editorial was deleted, false otherwise
    */
    deleteMedalla(medallaId): Observable<MedallaDetail> {
        return this.http.delete<MedallaDetail>(API_URL + medallas + '/' + medallaId);
    }
}
