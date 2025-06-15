import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hungarianCurrency',
  standalone: true,
})
export class HungarianCurrencyPipe implements PipeTransform {
  transform(value: number | string | null | undefined): string {
    if (value === null || value === undefined || value === '') {
      return '0 Ft';
    }

    const numValue = typeof value === 'string' ? parseFloat(value) : value;

    if (isNaN(numValue)) {
      return '0 Ft';
    }

    // Egész számra kerekítés
    const roundedValue = Math.round(numValue);

    // Számjegyek szétválasztása szóközzel (magyar formátum)
    const formattedNumber = roundedValue
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

    return `${formattedNumber} Ft`;
  }
}
