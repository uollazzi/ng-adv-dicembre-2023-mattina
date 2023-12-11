import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CardResponse, SearchResponse } from '../models/pokemon';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      "X-Api-Key": environment.POKEMON_API_KEY
    })
  }

  // generics
  search(pageSize: number = 10, page: number = 1): Observable<SearchResponse> {
    // GET https://api.pokemontcg.io/v2/cards?pageSize=10&page=3
    return this.http
      .get<SearchResponse>(
        `${environment.POKEMON_API_BASE_URL}/cards?pageSize=${pageSize}&page=${page}`,
        this.httpOptions
      );
  }

  getById(codice: string): Observable<CardResponse> {
    // GET https://api.pokemontcg.io/v2/cards/pop6-1
    return this.http
      .get<CardResponse>(
        `${environment.POKEMON_API_BASE_URL}/cards/${codice}`,
        this.httpOptions
      );
  }
}
