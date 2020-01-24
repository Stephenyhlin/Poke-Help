import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceWithspace'
})
export class ReplaceWithspacePipe implements PipeTransform {

  transform(value: string ): any {
    let regex = new RegExp('-','g');
    return value.replace(regex,' ');
  }

}
