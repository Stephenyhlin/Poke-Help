import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AbilitiesComponent } from './components/abilities/abilities.component';


const routes: Routes = [
  {path: 'pokemon', component: PokemonComponent },
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'ability', component: AbilitiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
