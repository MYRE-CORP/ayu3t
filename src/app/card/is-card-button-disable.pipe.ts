import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'isCardButtonDisable',
  standalone: true,
  pure: true
})
export class IsCardButtonDisablePipe implements PipeTransform {

  transform(cardList: any[]): boolean {
    return cardList.length === 0;
  }

}
