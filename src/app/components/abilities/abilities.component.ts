import { Component, OnInit } from '@angular/core';
import { Ability } from 'src/app/Models/ability';
import { AbilityService } from 'src/app/services/ability.service';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.css']
})
export class AbilitiesComponent implements OnInit {
  ability: Ability;
  a_id: number = 69;
  
  constructor(
    private abilityService : AbilityService
  ) { }

  ngOnInit() {
    this.getAbility();
  }

  getAbility(): void{
    this.abilityService.getAbility(this.a_id).subscribe(data => this.ability = data);
  }
}
