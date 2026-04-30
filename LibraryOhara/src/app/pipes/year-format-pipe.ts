import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yearFormat',
  standalone: true
})
export class YearFormatPipe implements PipeTransform {

  transform(year: number): string {
    if (!year) return '';

    return `Publicado em ${year}`;
  }
}