import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articolo } from '../models/articolo';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getArticoli(): Observable<Articolo[]> {
    return this.http.get<Articolo[]>(`${environment.JSON_SERVER_BASE_URL}/articoli`);
  }
}
