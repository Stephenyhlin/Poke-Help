import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


// Imports for material angular
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { AbilitiesComponent } from './components/abilities/abilities.component';
import { MovesComponent } from './components/moves/moves.component';
import { ItemsComponent } from './components/items/items.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BuildEditorComponent } from './components/build-editor/build-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    AbilitiesComponent,
    MovesComponent,
    ItemsComponent,
    DashboardComponent,
    HeaderComponent,
    BuildEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }