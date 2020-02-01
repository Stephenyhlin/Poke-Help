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
  next: string;
  public id: string[] = [];

  constructor(
    private http: HttpClient,
  ) { }

  // Create the get for pokemon information
  parseID(url:string): string{
    let regex = new RegExp(environment.POKE_API+constant.pokemonContentAPI,'g');
    let temp: string;
    temp =url.replace(regex,'/');
    let reg = new RegExp('/','g');
    return temp.replace(reg,'');
  }

  getPokemonName(name: String): Observable<Pokemon> {
    return this.http.get<Pokemon>(environment.POKE_API + constant.pokemonContentAPI + name)
      .pipe(
        map(data => (new Pokemon(data))),
      );
  }

  getSomePokemon(url: string): Observable<any[]>{
    let array = [];
    let temp: any;
    return this.http.get(url).pipe(map(data => {
      for(let pokemon of data['results']){
        temp = pokemon;
        temp.url = environment.SPRITE + constant.pokemonContentAPI+this.parseID(temp.url)+'.png';
        array.push(temp);
        // console.log(temp.url);
        // this.id.push((this.parseID(pokemon.url)));
      }
      this.next = data['next'];
      return array;
    }))


  }

  // .pipe(map(data => (new Pokemon())))
}
