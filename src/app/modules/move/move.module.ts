import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoveRoutingModule } from './move-routing.module';
import { MovesComponent } from '../../components/moves/moves.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [MovesComponent],
  imports: [
    CommonModule,
    MoveRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class MoveModule { }
