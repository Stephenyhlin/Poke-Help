import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Move } from '../Models/move';
import { environment } from '../environments/environment';
import { constant } from '../Models/constant';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovesService {

  constructor(
    private http: HttpClient
  ) { }




  //Make get request for moves, and link that shit with my pokemon thing
  getMove(search_id: string): Observable<Move>{
    return this.http.get<Move>(environment.POKE_API+constant.moveContentAPI+search_id).pipe(
      map( data => (new Move(data)))
    );
  }
}
