import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutoCompleteService {
  content: string;
  constructor(private http: HttpClient) { 
  }

  getAll(): Observable<string[]>{
    let returnArray = [];
    console.log(environment.POKE_API+this.content+'?limit=1200');
    return this.http.get(environment.POKE_API+this.content+'?limit=1200').pipe(
      map(
      (data:any) => {
        for(let array of data['results']){
          returnArray.push(this.updateName(array['name']));
        }
        //Returns the sorted array
        return returnArray.sort();
      }
    ));
  } 

  updateName(name: string): string{
    name = name.split('-').join(' ');
    return name.replace(/\b\w/g, first => first.toLocaleUpperCase());
  }

  setContent(pass:string){
    this.content = pass;
  }

  _filter(value : string, option: string[]){
    const filterValue = value.toLowerCase();
    return option.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
}
