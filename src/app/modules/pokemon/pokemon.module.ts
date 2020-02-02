import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonComponent } from '../../components/pokemon/pokemon.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [PokemonComponent,
    // ReplaceWithspacePipe
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule
  ],
  bootstrap: [PokemonComponent]
})
export class PokemonModule { }
