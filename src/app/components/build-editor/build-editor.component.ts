import { Component } from '@angular/core';
import { FormBuilder, FormArray, Validators } from '@angular/forms';

import { Build } from '../../Models/build'
import { BuildService } from '../../build.service';

@Component({
  selector: 'app-build-editor',
  templateUrl: './build-editor.component.html',
  styleUrls: ['./build-editor.component.css']
})
export class BuildEditorComponent {

  successfulBuilds: Build[];

  constructor(
    private fb: FormBuilder,
    private buildService: BuildService
    ) { }

  buildForm = this.fb.group({
    name: ['', Validators.required],
    ID: ['', Validators.required],
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
      subscribe(build => {
        this.successfulBuilds.push(build);
      });
  }
}
