import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  search_id = new FormControl('');
  page_nav :String;

  constructor(
    private route: ActivatedRoute,
    private router: Router, 
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.page_nav = params['param'];
    })
  }


  search(){
    this.router.navigate([this.page_nav,this.search_id.value]);
  }
  //Probably need to pass params to it lmao

}
