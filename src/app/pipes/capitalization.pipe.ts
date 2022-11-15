import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalization'
})
export class CapitalizationPipe implements PipeTransform {

  transform(value: string): any {
    if(value.indexOf("-") != -1)
    {
      // Hypenated
      let splitter = value.split("-");
      let name = "";
      let hypen = "";
      for(let x = 0; x < splitter.length; x++)
      {
        name += hypen + splitter[x].substring(0, 1).toUpperCase() + splitter[x].substring(1).toLowerCase();
        hypen = "-";
      }
      return name;
    }
    return value.substring(0, 1).toUpperCase() + value.substring(1).toLowerCase();
  }

}
