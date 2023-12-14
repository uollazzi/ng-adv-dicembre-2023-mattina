import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articolo, NuovoArticoloDto } from '../models/articolo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  getArticoli(): Observable<Articolo[]> {
    return this.http.get<Articolo[]>(`${environment.JSON_SERVER_BASE_URL}/articoli`);
  }

  nuovoArticolo(model: NuovoArticoloDto): Observable<Articolo> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Bearer " + this.authService.getLoggedUser()?.accessToken
      })
    };

    return this.http.post<Articolo>(
      `${environment.JSON_SERVER_BASE_URL}/articoli`,
      model,
      httpOptions
    );
  }

  getArticoloById(id: number): Observable<Articolo> {
    return this.http.get<Articolo>(`${environment.JSON_SERVER_BASE_URL}/articoli/${id}`);
  }

  // togliere any il prima possibile
  deleteArticoloById(id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Bearer " + this.authService.getLoggedUser()?.accessToken
      })
    };

    return this.http.delete<any>(`${environment.JSON_SERVER_BASE_URL}/articoli/${id}`, httpOptions);
  }
}
