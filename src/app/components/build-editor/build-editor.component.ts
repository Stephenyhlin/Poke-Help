import { Component } from '@angular/core';
import { FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-build-editor',
  templateUrl: './build-editor.component.html',
  styleUrls: ['./build-editor.component.css']
})
export class BuildEditorComponent {

  constructor(private fb: FormBuilder) { }

  buildForm = this.fb.group({
    name: ['', Validators.required],
    ID: [''],
    information: this.fb.group({
      competition: [''],
      IV: [''],
      nature: [''],
    }),
    moves: this.fb.array([
      this.fb.control('')
    ])
  })

  get moves() {
    return this.buildForm.get('moves') as FormArray;
  }

  addMove() {
    this.moves.push(this.fb.control(''));
  }

  // buildForm = new FormGroup({
  //   name: new FormControl(''),
  //   ID: new FormControl(''),
  // });

  onSubmit() {
    console.log(this.buildForm.value);
  }
}
