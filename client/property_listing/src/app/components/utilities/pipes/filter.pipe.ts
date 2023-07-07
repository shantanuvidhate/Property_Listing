import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(properties: any[], minPrice: number, maxPrice: number): any[] {
    if (!minPrice && !maxPrice) {
      return properties;
    }

    return properties.filter(property => {
      return (!minPrice || property.price >= minPrice) && (!maxPrice || property.price <= maxPrice);
    });
  }

}
