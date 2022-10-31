import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  //returns a single value, the array of mock heroes
  getHeroes():Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }

  constructor() { }
}
