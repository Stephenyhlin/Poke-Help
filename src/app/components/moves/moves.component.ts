import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovesService } from 'src/app/services/moves.service';
import { Move } from 'src/app/Models/move';
import { tap, catchError, startWith, map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { constant } from 'src/app/Models/constant';
import { throwError, Observable } from 'rxjs';
import { AutoCompleteService } from 'src/app/services/auto-complete.service';

@Component({
  selector: 'app-moves',
  templateUrl: './moves.component.html',
  styleUrls: ['./moves.component.css']
})
export class MovesComponent implements OnInit {
  search_move: string;
  move_id: number;
  move$: Observable<Move>;
  name$: Observable<string[]>;
  option;
  search = new FormControl('');


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mS: MovesService,
    private aS: AutoCompleteService
  ) { }

  ngOnInit() {
    this.aS.setContent(constant.moveContentAPI);

    this.name$ = this.aS.getAll().pipe(
      tap((allMove: string[]) => {
        this.option = allMove;
        this.name$ = this.search.valueChanges.pipe(

          startWith(''),
          map(value => this.aS._filter(value, this.option))
        )
      }
      )
    )



    this.route.params.subscribe(params => {
      if (params['param']) {
        this.search_move = params['param'];
        this.search_move = this.search_move.split(' ').join('-');
        this.getMove();
      }

    })
  }

  searchM() {
    this.router.navigate([constant.moveContent, this.search.value]);
  }

  onRight() {
    this.router.navigate([constant.moveContent, this.move_id + 1]);
  }

  onLeft() {
    this.router.navigate([constant.moveContent, this.move_id - 1]);
  }

  getMove() {
    this.move$ = this.mS.getMove(this.search_move.toLowerCase()).pipe(
      tap(move => {
        this.move_id = move.id;
        this.search.setValue(move.name);
      }),
      catchError(() => {
        this.router.navigate([constant.error, constant.moves]);
        return throwError('404');
      })
    )
  }

}
