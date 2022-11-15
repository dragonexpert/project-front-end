import { Pipe, PipeTransform } from '@angular/core';
import { environment } from "../../environments/environment";

@Pipe({
  name: 'tierFormatter'
})
export class TierFormatterPipe implements PipeTransform {

  transform(value: any): any {
     switch(value)
     {
       case 1:
         return "SSS";
       case 2:
         return "SS+";
       case 3:
         return "SS";
       case 4:
         return "S";
       case 5:
         return "A";
       case 6:
         return "B";
       case 7:
         return "C";
       default:
         return "Pending";
     }
  }

}
