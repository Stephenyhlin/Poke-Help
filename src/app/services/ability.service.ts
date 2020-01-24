import { Injectable } from '@angular/core';
import { Ability } from '../Models/ability';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { constant } from '../Models/constant';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AbilityService {

  constructor(
    private http: HttpClient
  ) { }

  getAbility(value : string): Observable<Ability>{
    return this.http.get<Ability>(environment.POKE_API + constant.abilityContent + value).pipe(
      map(data => new Ability(data))
    );
  };
}
