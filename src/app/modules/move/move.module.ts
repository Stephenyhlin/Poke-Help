import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoveRoutingModule } from './move-routing.module';
import { MovesComponent } from '../../components/moves/moves.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [MovesComponent],
  imports: [
    CommonModule,
    MoveRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class MoveModule { }
