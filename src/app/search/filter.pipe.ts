import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/product.model';

@Pipe({
  name: 'filter',
  standalone: true,
  pure: true,
})
export class FilterPipe implements PipeTransform {
  transform(value: IProduct[], searchInput: string) {
    searchInput = searchInput ? searchInput.toLowerCase() : '';
    return searchInput
      ? value.filter((productos) =>
          productos.title?.toLowerCase().includes(searchInput)
        )
      : value;
  }
}
