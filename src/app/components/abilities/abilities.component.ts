import { Component, OnInit } from '@angular/core';
import { Ability } from 'src/app/Models/ability';
import { AbilityService } from 'src/app/services/ability.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, startWith, map } from 'rxjs/operators';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { constant } from 'src/app/Models/constant';
import { AutoCompleteService } from 'src/app/services/auto-complete.service';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.css']
})
export class AbilitiesComponent implements OnInit {
  ability$: Observable<Ability>;
  name$: Observable<string[]>;
  option;
  a_id: number;
  search_value: string;
  search = new FormControl('');

  constructor(
    private abilityService: AbilityService,
    private route: ActivatedRoute,
    private router: Router,
    private aS: AutoCompleteService
  ) { }

  ngOnInit() {
    this.aS.setContent(constant.abilityContentAPI);

    this.name$ = this.aS.getAll().pipe(
      tap((allAbility : string[]) => {
          this.option = allAbility;
          this.name$ = this.search.valueChanges.pipe(
            //This is to ensure that every time we update a value, it will update and check
            startWith(''),
            map(value => this.aS._filter(value, this.option))
          )
        }
      )
    )


    this.route.params.subscribe(params => {
      if (params['param']) {
        this.search_value = params['param'];
        let reg = new RegExp(' ', 'g');
        this.search_value = this.search_value.replace(reg, '-').toLowerCase();
        this.getAbility();
      }
    })
  }
  searchAb() {
    this.router.navigate([constant.abilityContent, this.search.value]);
  }

  onRight() {
    this.router.navigate([constant.abilityContent, this.a_id + 1]);
  }

  onLeft() {
    if(!(this.a_id === 1)) {
      this.router.navigate([constant.abilityContent, this.a_id - 1]);
    }
  }

  getAbility(): void {
    this.ability$ = this.abilityService.getAbility(this.search_value).pipe(
      tap(ab => {
        this.a_id = ab.id;
        this.search.setValue(this.search_value);
      },
        catchError(() => {
          this.router.navigate(['/error', constant.ability]);
          return throwError('404');
        })
      )
    );
  }
  goTo(name:string,contentType:string){
    this.router.navigate([contentType,name]);
  }
}
