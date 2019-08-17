import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multip'
})
export class MultipPipe implements PipeTransform {

  transform(value: string, value2: string): number {

    let primervalor = parseInt(value)
    let segundovalor = parseInt(value2)

    return primervalor * segundovalor ;
  }

}
