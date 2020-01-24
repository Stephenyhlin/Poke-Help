import { Component, OnInit } from '@angular/core';
import { Ability } from 'src/app/Models/ability';
import { AbilityService } from 'src/app/services/ability.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { constant } from 'src/app/Models/constant';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.css']
})
export class AbilitiesComponent implements OnInit {
  ability$: Observable<Ability>;
  a_id: number = 69;
  search_value: string;
  search = new FormControl('');
  
  constructor(
    private abilityService : AbilityService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.search_value = params['param'];
      let reg = new RegExp(' ', 'g');
      this.search_value = this.search_value.replace(reg,'-').toLowerCase();
      this.getAbility();
    })
  }
  searchAb(){
    this.router.navigate([constant.abilityContent, this.search.value]);
  }

  getAbility(): void{
    this.ability$ = this.abilityService.getAbility(this.search_value).pipe(
      tap(ab => {
        this.a_id = ab.id;
        this.search.setValue(this.search_value);
      },
      catchError(() => {
        this.router.navigate(['/error',constant.ability]);
        return throwError('404');
      })
      )
    );
  }
}
