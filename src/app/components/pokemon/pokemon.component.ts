import { Component, OnInit } from '@angular/core';
import { Pokemon, MoreData } from '../../Models/pokemon';
// import { Sprites } from '../../Models/sprites';
import { PokemonService } from '../../services/pokemon.service';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, take, first, catchError, tap, map, startWith } from 'rxjs/operators';
import { environment } from 'src/app/environments/environment';
import { constant } from 'src/app/Models/constant';
import { Observable, throwError } from 'rxjs';
import { AutoCompleteService } from 'src/app/services/auto-complete.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemon$: Observable<Pokemon>;
  name$ : Observable<string[]>;
  option;
  pokemon: Pokemon;
  search = new FormControl('');
  poke_id: number;
  poke_name: String;
  moreData$: Observable<MoreData>;

  constructor(
    private pokemonService: PokemonService,
    private aService : AutoCompleteService,
    private route: ActivatedRoute,
    private router: Router
  ) {
   }

  ngOnInit() {
    // this.getPokemon();
    this.aService.setContent(constant.pokemonContentAPI);
    // this.aService.getAll().subscribe((allPokemon : string[]) => {
    //   this.option = allPokemon;
    //   this.name$ = this.search.valueChanges.pipe(
    //     startWith(''),
    //     map(value => this.aService._filter(value, this.option))
    //   )
    // });
    this.name$ = this.aService.getAll().pipe(
      tap((allPokemon : string[]) => {
          this.option = allPokemon;
          //This is to ensure that as we type the displayed name array is different
          this.name$=this.search.valueChanges.pipe(
            //This is to ensure that every time we update a value, it will update and check
            startWith(''),
            map(value => this.aService._filter(value, this.option))
          )
        }

      )
    )
    // console.log(this.option);

    this.route.params.subscribe((params) => {
      if (params['param']) {
        // If it exists we will set it as our pokemon name. Pokemon name will always be the output
        this.poke_name = params['param'];
        this.poke_name = this.poke_name.split(' ').join('-');
        this.getPokemonName();
        this.getMoreData();
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

  getMoreData(): void{
    this.moreData$ = this.pokemonService.getMoreData(this.poke_name.toLowerCase()).pipe(
      catchError((err:Response) => {
        this.router.navigate(['/error', constant.pokemon]);
        return throwError('404');
      })
    )
  }
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
  
  


}
