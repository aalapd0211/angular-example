import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import {HEROES} from '../mock-heroes'
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes:Hero[];
  hero : Hero={
    id:1,
    name : 'Aalap',

  };

  constructor( 
    private heroService :HeroService,
    private messageService :MessageService
    ) { }

  ngOnInit() {
    this.heroService.getHeroes().subscribe(heroes=>{
      this.heroes=heroes;
    });
  }

  onSelect(hero:Hero){
    this.messageService.addMessage('Fetch hero details')
    this.selectedHero = hero;
  }
}
