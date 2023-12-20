import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CardResponse, NuovoPokemonCatturatoDto, Pokemon, PokemonCatturato, SearchResponse } from '../models/pokemon';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private http: HttpClient, private authService: AuthService) { }

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

  cattura(pokemon: Pokemon): Observable<PokemonCatturato | undefined> {

    if (this.authService.isUserLogged) {
      let model = new NuovoPokemonCatturatoDto(this.authService.getLoggedUser()!.user.id, pokemon);

      const httpOptions = {
        headers: new HttpHeaders({
          Authorization: "Bearer " + this.authService.getLoggedUser()?.accessToken
        })
      };

      return this.http.post<PokemonCatturato>(
        `${environment.JSON_SERVER_BASE_URL}/pokemons`,
        model,
        httpOptions
      );
    } else {
      return of(undefined);
    }

  }

  getCatturati(): Observable<PokemonCatturato[]> {
    if (this.authService.isUserLogged) {
      const httpOptions = {
        headers: new HttpHeaders({
          Authorization: "Bearer " + this.authService.getLoggedUser()!.accessToken
        })
      };

      return this.http.get<PokemonCatturato[]>(
        // GET http://localhost:3000/pokemons?userId=1
        `${environment.JSON_SERVER_BASE_URL}/pokemons?userId=${this.authService.getLoggedUser()!.user.id}`,
        httpOptions
      );
    } else {
      return of([]);
    }
  }
}
