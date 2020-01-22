import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../services/pokemon.service'

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemon : Pokemon;
  poke_id = 42;

  constructor(
    private pokemonService : PokemonService,
  ) { }

  ngOnInit() {
    this.getPokemon();
  }

  getPokemon(): void{
    this.pokemonService.getPokemon(this.poke_id).subscribe(data => this.pokemon = data);
  }

}
