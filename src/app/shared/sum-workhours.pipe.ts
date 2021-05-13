import { Pipe, PipeTransform } from '@angular/core';
import {Workhours} from '../services/workhours';

@Pipe({
  name: 'sumWorkhours'
})
export class SumWorkhoursPipe implements PipeTransform {
  transform(value: Workhours): number {
    let sum = 0;
    for (const [key, val] of Object.entries(value.registration_list)) {
      sum += val.hours.reduce(this.add, 0);
    }
    return sum;
  }

  private add(accumulator: number, a: number): number {
    return accumulator + a;
  }
}
