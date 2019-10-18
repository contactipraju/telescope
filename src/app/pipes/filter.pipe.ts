import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }

    if (!searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();

    return items.filter(it => {

      // For each field..
      for (var key in it) {
        if(it.hasOwnProperty(key) && it[key].toString().toLowerCase().includes(searchText)) {
          return true;
        }
      }

      return false;
    });
  }
}