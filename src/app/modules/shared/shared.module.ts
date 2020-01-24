import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReplaceWithspacePipe } from 'src/app/pipes/replace-withspace.pipe';



@NgModule({
  declarations: [
    ReplaceWithspacePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ReplaceWithspacePipe
  ]
})
export class SharedModule { }
