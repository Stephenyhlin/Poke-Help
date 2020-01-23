import { Component } from '@angular/core';
import { FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-build-editor',
  templateUrl: './build-editor.component.html',
  styleUrls: ['./build-editor.component.css']
})
export class BuildEditorComponent {

  constructor(private fb: FormBuilder) { }

  numMoves;

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
    console.log(this.buildForm.value);
  }
}
