import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AbilitiesComponent } from './components/abilities/abilities.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';


const routes: Routes = [
  {path: 'pokemon', component: PokemonComponent },
  {path: 'pokemon/:param', component: PokemonComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'ability', component: AbilitiesComponent},
  {path: 'ability/:param', component: AbilitiesComponent},
  {path: 'error/', component: ErrorPageComponent},
  {path: 'error/:param', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
