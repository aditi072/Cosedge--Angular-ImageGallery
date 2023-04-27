import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByDescription'
})
export class FilterByDescriptionPipe implements PipeTransform {

  transform(images: any[], searchTerm: string): any[] {
    if (!images) { return []; }
    if (!searchTerm) { return images; }

    searchTerm = searchTerm.toLowerCase();

    return images.filter(image => {
      return image.description.toLowerCase().includes(searchTerm);
    });
  }
}
