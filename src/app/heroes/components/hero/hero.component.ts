import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  private name:string;
  private age: number;

  constructor() {
    this.name = 'ironman'
    this.age = 39
  }

  get getName(): string {
    return this.name
  }

  get getAge(): number {
    return this.age
  }

  public getDescription(): string {
    return `${this.name} - ${this.age}`
  }

  public get getCapitalized(): string {
    return this.name.toUpperCase()
  }

  public changeAge(): void {
    this.age = 45
  }

  public changeName(): void {
      this.name = 'spiderman'
  }

  public reset(): void {
    this.age = 39
    this.name = 'ironman'
  }
}
