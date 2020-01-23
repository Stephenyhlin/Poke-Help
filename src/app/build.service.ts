import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Observable } from 'rxjs';

import { Build } from './Models/build';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BuildService {

  backendURL = "http://localhost:8080";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  addBuild(build: Build): Observable<Build> {
    let url = this.backendURL + "/addBuild"
    return this.http.post<Build>(url, build, this.httpOptions).pipe(
      tap((newBuild: Build) => console.log("Successfully added " + newBuild.name))
    );
  }

}
