import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articolo, NuovoArticoloDto } from '../models/articolo';
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

  nuovoArticolo(model: NuovoArticoloDto): Observable<Articolo> {
    return this.http.post<Articolo>(`${environment.JSON_SERVER_BASE_URL}/articoli`, model);
  }

  getArticoloById(id: number): Observable<Articolo> {
    return this.http.get<Articolo>(`${environment.JSON_SERVER_BASE_URL}/articoli/${id}`);
  }

  // togliere any il prima possibile
  deleteArticoloById(id: number): Observable<any> {
    return this.http.delete<any>(`${environment.JSON_SERVER_BASE_URL}/articoli/${id}`);
  }
}
