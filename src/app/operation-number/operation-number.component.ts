import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-operation-number',
  templateUrl: './operation-number.component.html',
  styleUrls: ['./operation-number.component.less']
})
export class OperationNumberComponent implements OnInit {

  generatedNumber: string = '0';

  constructor() { }

  ngOnInit() {
    this.randomizeOperationNumber();
  }

  randomizeOperationNumber() {

    this.generatedNumber = this.randomNumberString(7);
  }

  randomNumberString(length: number): string {
    let result: string = '',
      numbers: number[] = [],
      crossFootSum: number = 0;

    for (let i = 0; i < length; i++) {
      numbers.push(Math.floor(Math.random() * 10))
    }

    numbers.forEach((number: number, index: number) => {
      crossFootSum += index % 2 == 0 ? number : this.calculateCrossSum(2 * number);
    });

    crossFootSum = Math.floor(crossFootSum);
    numbers.push((crossFootSum + 5) % 10);

    return numbers.join('');
  }

  calculateCrossSum(crossSum: number): number {
    if (crossSum <= 9) {
      return crossSum;
    }

    return crossSum % 10 + this.calculateCrossSum(crossSum / 10);

  }
}
