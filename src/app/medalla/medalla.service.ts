import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

import {Medalla} from './medalla';
import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const medallas = '/medallas';

@Injectable()
export class MedallaService {
  constructor(private http HttpClient) { }
  getMedallas() : Observable<Medalla[]> {
      return this.http.get<Medalla[]>(API_URL + medallas);
  }
}
