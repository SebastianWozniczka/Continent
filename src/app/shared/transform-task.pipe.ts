import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformTask'
})
export class TransformTaskPipe implements PipeTransform {

  transform(value: any, ...args: Array<String>): any {
    return value;
  }

}
