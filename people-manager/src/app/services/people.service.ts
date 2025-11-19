import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../models/person';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private base = environment.apiBaseUrl;
  constructor(private http: HttpClient) {}

  list(): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.base}/people`);
  }
  get(id: number): Observable<Person> {
    return this.http.get<Person>(`${this.base}/people/${id}`);
  }
  update(p: Person): Observable<Person> {
    return this.http.put<Person>(`${this.base}/people/${p.id}`, p);
  }
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.base}/people/${id}`);
  }
}
