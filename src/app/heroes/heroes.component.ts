import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  /*
  hero = 'Windstorm';
  
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };*/
  
    heroes: Hero[];
  selectedHero: Hero;
  
  constructor(private heroService: HeroService) { }
  
  getHeroes(): void {
  this.heroes = this.heroService.getHeroes();
  }
  
  onSelect(hero: Hero): void {
  this.selectedHero = hero;
}

  constructor() { }

  ngOnInit() {
  this.getHeroes();
  }

}
