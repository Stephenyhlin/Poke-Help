import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { PokemonComponent } from './components/pokemon/pokemon.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AbilitiesComponent } from './components/abilities/abilities.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { MovesComponent } from './components/moves/moves.component';


const routes: Routes = [
  // {path: 'pokemon', component: PokemonComponent },
  // {path: 'pokemon/:param', component: PokemonComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  // {path: 'ability', component: AbilitiesComponent},
  // {path: 'ability/:param', component: AbilitiesComponent},
  {path: 'error/', component: ErrorPageComponent},
  {path: 'error/:param', component: ErrorPageComponent},
  // {path: 'moves/:param', component: MovesComponent},
  { path: 'pokemon', loadChildren: () => import('./modules/pokemon/pokemon.module').then(m => m.PokemonModule) },
  { path: 'pokemon/:param', loadChildren: () => import('./modules/pokemon/pokemon.module').then(m => m.PokemonModule) },
  { path: 'ability', loadChildren: () => import('./modules/ability/ability.module').then(m => m.AbilityModule) },
  { path: 'ability/:param', loadChildren: () => import('./modules/ability/ability.module').then(m => m.AbilityModule) },
  { path: 'moves/:param', loadChildren: () => import('./modules/move/move.module').then(m => m.MoveModule) },
  { path: 'moves', loadChildren: () => import('./modules/move/move.module').then(m => m.MoveModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
