import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../Models/pokemon';
import { Sprites } from '../../Models/sprites';
import { PokemonService } from '../../services/pokemon.service';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemon: Pokemon;
  search = new FormControl('');
  poke_id: number;
  poke_name: String;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // this.getPokemon();
    this.route.params.subscribe((params) => {
      if (params['param']) {
        // If it exists we will set it as our pokemon name. Pokemon name will always be the output
        this.poke_name = params['param'];
        this.poke_name = this.poke_name.split(' ').join('-');
        this.search.setValue(this.poke_name);
        this.getPokemonName();
      }
    })
  }

  searchPoke(): void {
    this.router.navigate(['/pokemon/', this.search.value]);
  }

  getPokemon(): void {
    this.pokemonService.getPokemonId(this.poke_id).subscribe(data => this.pokemon = data);
  }

  getPokemonName(): void {
    this.pokemonService.getPokemonName(this.poke_name.toLowerCase()).subscribe(data => this.pokemon = data,error =>{
      if(error.status == 404){
        this.router.navigate(['/error']);
      }
      
    });
  }

}
