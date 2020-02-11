import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbilityRoutingModule } from './ability-routing.module';
import { AbilitiesComponent } from '../../components/abilities/abilities.component';
import { ReplaceWithspacePipe } from 'src/app/pipes/replace-withspace.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [AbilitiesComponent,
  // ReplaceWithspacePipe
],
  imports: [
    CommonModule,
    AbilityRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class AbilityModule { }
