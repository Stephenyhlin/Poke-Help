import { Injectable } from '@angular/core';
import { Pokemon } from '../pokemon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemon : Pokemon;
  private content : String = 'pokemon/';

  constructor(
    private http: HttpClient,
  ) { }

  //Create the get for pokemon information
  getPokemon(id : number): Observable<Pokemon>{
    return this.http.get<Pokemon>(environment.POKE_API + this.content + id.toString());
  }
}
