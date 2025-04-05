import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { personaje } from '../Interface/personaje.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly apiUrl = 'https://rickandmortyapi.com/api/character/1,2,3,4';

  constructor(private http:HttpClient) { }

  getData() : Observable <personaje[]> {
    return this.http.get<personaje[]>(this.apiUrl);
  }

}
