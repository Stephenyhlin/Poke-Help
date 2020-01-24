import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovesComponent } from '../../components/moves/moves.component';

const routes: Routes = [{ path: '', component: MovesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoveRoutingModule { }
