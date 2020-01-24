import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  // goPokemon(){
  //   this.router.navigate(["/pokemon/"]);
  // }

  goAbility(){
    this.router.navigate(["/ability/"]);
  }

  goMove(){
    this.router.navigate(["/moves/","1"]);
  }

}
