import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/Models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { environment } from 'src/app/environments/environment';
import { constant } from 'src/app/Models/constant';
import { stringify } from 'querystring';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private router: Router,
    private pService: PokemonService
  ) { }
  private cachedF = Array.from<string>({length:0});
  private id: string[];
  // private cachedF$: Observable<Pokemon[]>;
  private next: string;
  private end: boolean = false;
  // currentPokemon: number = 20;
  ngOnInit(){
    this.loadInit();
  }

  //Load initial 20 pokemon
  loadInit(){
    this.pService.getSomePokemon(environment.POKE_API+constant.pokemonContentAPI+'?limit=30').subscribe(
      data =>{
        this.cachedF = this.cachedF.concat(data);
        // this.id = this.pService.id;
        this.next = this.pService.next;
        console.log(this.id);
      }
    ) 
    
  }

  loadMore(){
    this.pService.getSomePokemon(this.next).subscribe(
      data => {
        this.cachedF = this.cachedF.concat(data);
        this.next = this.pService.next;
        if(this.next === null){
          this.end = true;
        }
      }
    )
  }

  onScroll(){
    if(this.end === false){
      this.loadMore();
    }
  }
}
