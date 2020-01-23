import { Injectable } from '@angular/core';
import { Pokemon } from '../Models/pokemon';
import { Sprites } from '../Models/sprites';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { constant } from '../Models/constant';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemon : Pokemon;

  constructor(
    private http: HttpClient,
  ) { }

  // Create the get for pokemon information
  getPokemon(id : number): Observable< Pokemon>{
    return this.http.get< Pokemon>(environment.POKE_API + constant.pokemonContent + id.toString())
    .pipe(
      map(data => (new Pokemon(data)))
      );
  }
  // .pipe(map(data => (new Pokemon())))
}
