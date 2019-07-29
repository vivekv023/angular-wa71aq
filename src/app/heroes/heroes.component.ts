import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {Heroes} from'../mock-heros';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
hero  :Hero ={
  id:1,
  name:'Amir Khan'
};
heros = Heroes;
selectedHero: Hero;

  constructor() { }

  ngOnInit() {
  }
  onSelect(hero: Hero): void {
  this.selectedHero = hero;
}

}