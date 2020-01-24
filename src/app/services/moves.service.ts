import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovesService {

  constructor(
    private http: HttpClient
  ) { }


  //Make get request for moves, and link that shit with my pokemon thing
}
