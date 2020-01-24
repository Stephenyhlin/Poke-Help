import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../Models/pokemon';
import { Sprites } from '../../Models/sprites';
import { PokemonService } from '../../services/pokemon.service';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, take, first, catchError, tap } from 'rxjs/operators';
import { environment } from 'src/app/environments/environment';
import { constant } from 'src/app/Models/constant';
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemon$: Observable<Pokemon>;

  pokemon: Pokemon;
  search = new FormControl('Enter a pokemon name');
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
        this.getPokemonName();
      }
    })
  }

  onRight() {
    this.router.navigate(['/pokemon/', this.poke_id + 1]);
  }

  onLeft() {
    this.router.navigate(['/pokemon/', this.poke_id - 1]);
  }
  searchPoke(): void {
    this.router.navigate(['/pokemon/', this.search.value]);
  }

  goTo(name:string,contentType:string){
    this.router.navigate([contentType,name]);
  }

  // getPokemon(): void {
  //   this.pokemonService.getPokemonId(this.poke_id).subscribe(data => this.pokemon = data);
  // }

  getPokemonName(): void {
    this.pokemon$ = this.pokemonService.getPokemonName(this.poke_name.toLowerCase()).pipe(
      tap(pkmn => {
        this.poke_id = pkmn.id;
        this.search.setValue(pkmn.name);
      }),
    catchError((err: Response) => {
      this.router.navigate(['/error', constant.pokemon]);
      return throwError('404');
    }
    )
   );

    // this.pokemon$.
    // .subscribe(data => {
    //   this.poke_id = data.id;
    //   this.search.setValue(data.name);
    // }
    //);

    // .subscribe(data => this.pokemon = data,error =>{
    //   if(error.status == 404){
    //     this.router.navigate(['/error',constant.pokemon]);
    //   }
    // }, () => {
    //   this.poke_id = this.pokemon.id;
    //   //Basically when subscribe finishes, we set poke_id = pokemon.id
    //   this.search.setValue(this.poke_name);
    // }); Anything commented was my old naive code.
  }

  ngOnDelete(){

  }

}
