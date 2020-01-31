import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


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
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ReplacePipe } from './pipes/replace.pipe';
import { ReplaceWithspacePipe } from './pipes/replace-withspace.pipe';
import { SharedModule } from './modules/shared/shared.module';
import { ScrollComponent } from './components/scroll/scroll.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { InfiniteScrollModule} from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    AppComponent,
    // PokemonComponent,
    // AbilitiesComponent,
    // MovesComponent,
    ItemsComponent,
    DashboardComponent,
    HeaderComponent,
    ErrorPageComponent,
    ReplacePipe,
    ScrollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    ReactiveFormsModule,
    ScrollingModule,
    InfiniteScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
