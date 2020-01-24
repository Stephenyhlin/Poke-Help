import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovesService } from 'src/app/services/moves.service';

@Component({
  selector: 'app-moves',
  templateUrl: './moves.component.html',
  styleUrls: ['./moves.component.css']
})
export class MovesComponent implements OnInit {
  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mS: MovesService
  ) { }

  ngOnInit() {
  }

}
