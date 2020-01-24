import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbilitiesComponent } from '../../components/abilities/abilities.component';

const routes: Routes = [{ path: '', component: AbilitiesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbilityRoutingModule { }
