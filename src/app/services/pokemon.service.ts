import { Injectable } from '@angular/core';
import { Pokemon } from '../Models/pokemon';
import { Sprites } from '../Models/sprites';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { constant } from '../Models/constant';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemon: Pokemon;

  constructor(
    private http: HttpClient,
  ) { }

  // Create the get for pokemon information
  getPokemonId(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(environment.POKE_API + constant.pokemonContentAPI + id.toString())
      .pipe(
        map(data => (new Pokemon(data)))
      );
  }

  getPokemonName(name: String): Observable<Pokemon> {
    return this.http.get<Pokemon>(environment.POKE_API + constant.pokemonContentAPI + name)
      .pipe(
        map(data => (new Pokemon(data))),
      );
  }

  // .pipe(map(data => (new Pokemon())))
}
