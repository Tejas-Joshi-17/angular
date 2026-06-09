import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseSentence'
})
export class ReverseSentencePipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    console.log(args);
    return value.split(' ').reverse().join(' ');
  }

}
