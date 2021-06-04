import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Parc } from '../models/parc';

@Injectable({
  providedIn: 'root'
})
export class ParcService {

  constructor(private http : HttpClient) { }

  getAll = () : Observable<Parc[]> => {
    return this.http.get<Parc[]>(`${environment.apiUrl}/parcs`);
  }

  getById = (id : number) : Observable<Parc> => {
    return this.http.get<Parc>(`${environment.apiUrl}/parcs/${id}`);
  }

  update = (parc : Parc) : Observable<Parc> => {
    return this.http.put<Parc>(`${environment.apiUrl}/parcs`, parc)
  }

  create = (parc : Parc) : Observable<Parc> => {
    return this.http.post<Parc>(`${environment.apiUrl}/parcs`, parc);
  }

  delete = (parc : Parc) : Observable<Parc> => {
    return this.http.request<Parc>('delete', `${environment.apiUrl}/parcs`, { body : parc});
  }
}
