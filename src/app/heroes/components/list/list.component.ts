import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroes: string[];
  public deletedHero: string | undefined;

  constructor() {
    this.heroes = ['Hulk', 'Thor', 'Ironman', 'Captain America', 'Deadpool']
    this.deletedHero = ''
  }


  deleteLast(): void {
   this.deletedHero = this.heroes.pop()
  }

  getDeletedHero(): string {
    return this.deletedHero || ''
  }
}
