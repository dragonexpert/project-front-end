import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spiritFormatter'
})
export class SpiritFormatterPipe implements PipeTransform {

  transform(value: any): string {
    switch(value)
    {
      case 1:
        return "Bind Heart";
      case 2:
        return "Heart of Singing";
      case 3:
        return "Sky Heart";
      case 4:
        return "Calm Heart";
      case 5:
        return "Strong Heart";
      case 6:
        return "Power Heart";
      case 7:
        return "Proud Heart";
      case 8:
        return "Windy of Singing";
      case 9:
        return "Fighting Heart";
      default:
        return "Error Heart (" + value + ")";
    }
  }

}
