import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-Assignments';


  numbers = [1,2,3,4,5,6,7,8,9,10];
  oddNumber = [1,3,5,7,9];
  evenNumber= [2,4,6,8,10];
  onlyOdd = false;

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  onIntervalFired(firedNumber: number) {
    console.log(firedNumber);
    if (firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber);
    } else {
      this.oddNumbers.push(firedNumber);
    }
  }

}
