import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators } from '@angular/forms';

import { Build } from '../../Models/build'
import { BuildService } from '../../build.service';

@Component({
  selector: 'app-build-editor',
  templateUrl: './build-editor.component.html',
  styleUrls: ['./build-editor.component.css']
})
export class BuildEditorComponent implements OnInit{

  successfulBuilds: Build[];

  constructor(
    private fb: FormBuilder,
    private buildService: BuildService
    ) { }

    ngOnInit() {
      this.successfulBuilds = [];
    }

  buildForm = this.fb.group({
    name: ['', Validators.required],
    id: ['', Validators.required],
    information: this.fb.group({
      competition: ['', Validators.required],
      IV: ['', Validators.required],
      nature: ['', Validators.required],
    }),
    moves: this.fb.array([
      this.fb.control('', Validators.required), 
      this.fb.control('', Validators.required),
      this.fb.control('', Validators.required),
      this.fb.control('', Validators.required)
    ])
  });

  get moves() {
    return this.buildForm.get('moves') as FormArray;
  }

  onSubmit() {
    let build = new Build(this.buildForm.value);
    console.log(build);
    this.buildService.addBuild(build).
      subscribe(newBuild => this.successfulBuilds.push(newBuild));
  }
}
