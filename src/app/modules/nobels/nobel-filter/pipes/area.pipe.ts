import { Pipe, PipeTransform } from '@angular/core';
import { Laureate } from '../../nobels.model';

@Pipe({
  name: 'area'
})

export class AreaPipe implements PipeTransform {

  transform(items: Laureate[], areaFilter?: object): Laureate[] {
    if (!items) {
      return [];
    }

    if ((!areaFilter)) {
      return items;
    }

    return items.filter(it => {
      if(!it.prizes || !it.prizes.length) {
        return false;
      }

      // For each selected area..
      for (var key in areaFilter) {
        if (areaFilter.hasOwnProperty(key)) {

          // For each prize..
          for(let i=0; i<it.prizes.length; i++) {
            if(areaFilter[key] === true && it.prizes[i].category === key) {
              return true;
            }
          }
        }
      }

      return false;
    });
  }
}
