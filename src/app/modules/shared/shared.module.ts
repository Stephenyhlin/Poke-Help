import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReplaceWithspacePipe } from 'src/app/pipes/replace-withspace.pipe';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [
    ReplaceWithspacePipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ReplaceWithspacePipe
  ]
})
export class SharedModule { }
