import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipecli',
})
export class PipecliPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return 'City Name:' + value;
  }
}
