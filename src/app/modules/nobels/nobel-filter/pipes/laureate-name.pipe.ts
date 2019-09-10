import { Pipe, PipeTransform } from '@angular/core';
import { Laureate } from '../../nobels.model';
import { Filter } from '../../nobel-filter/nobel-filter.model';

@Pipe({
  name: 'laureateName'
})
export class LaureateNamePipe implements PipeTransform {
  transform(items: Laureate[], search: string): Laureate[] {
    if (!items) {
      return [];
    }

    if (!search) {
      return items;
    }

    search = search.toLowerCase();

    return items.filter( it => {
      if((it.firstname && it.firstname.toLowerCase().includes(search)) || (it.surname && it.surname.toLowerCase().includes(search)))
        return true;
      else
        return false;
    });
  }
}