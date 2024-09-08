import { Component } from '@angular/core';

@Component({
  selector: 'counter-component',
  template: `
    <h2>{{ counter }}</h2>
    <hr>
    <button (click)="increase(1)">+1</button>
    &NonBreakingSpace;
    <button (click)="reset()">Reset</button>
    &NonBreakingSpace;
    <button (click)="increase(-1)">-1</button>
    <hr>
  `
})

export class CounterComponent {
  constructor() { }

  public counter: number = 10
  private original: number = this.counter

  increase(value: number): void {
    this.counter += value
  }

  reset() {
    this.counter = this.original
  }
}
