import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BuildEditorComponent } from './components/build-editor/build-editor.component'


const routes: Routes = [
  {path: 'pokemon', component: PokemonComponent },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'build', component: BuildEditorComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
