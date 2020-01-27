import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { constant } from 'src/app/Models/constant';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goHome(){
    this.router.navigate([""]);
  }

  goPokemon(){
    this.router.navigate([constant.pokemonContent]);
  }

  goAbility(){
    this.router.navigate([constant.abilityContent]);
  }

  goMove(){
    this.router.navigate([constant.moveContent]);
  }

}
