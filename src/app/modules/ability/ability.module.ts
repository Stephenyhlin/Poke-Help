import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbilityRoutingModule } from './ability-routing.module';
import { AbilitiesComponent } from '../../components/abilities/abilities.component';
import { ReplaceWithspacePipe } from 'src/app/pipes/replace-withspace.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [AbilitiesComponent,
  // ReplaceWithspacePipe
],
  imports: [
    CommonModule,
    AbilityRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AbilityModule { }
