import { Pipe, PipeTransform } from '@angular/core';
import { Laureate } from '../../nobels.model';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {
  transform(items: Laureate[], genderFilter?: object): Laureate[] {
    if (!items) {
      return [];
    }

    if ((!genderFilter)) {
      return items;
    }

    return items.filter(it => {
      if(!it.gender) {
        return false;
      }

      // If ALL or NONE are selected, show everything
      if(
        (genderFilter['male'] === true && genderFilter['female'] === true && genderFilter['org'] === true) ||
        (genderFilter['male'] !== true && genderFilter['female'] !== true && genderFilter['org'] !== true)) {
        return true;
      }

      if(
        (it.gender === 'male'   && genderFilter['male'] !== true) ||
        (it.gender === 'female' && genderFilter['female'] !== true) ||
        (it.gender === 'org'    && genderFilter['org'] !== true)
        ) {
        return false;
      }
      else {
        return true;
      }
    });
  }
}
