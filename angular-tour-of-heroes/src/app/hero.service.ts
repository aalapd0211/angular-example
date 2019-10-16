import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';  // URL to web api
  constructor(
    private http :HttpClient, 
    private messageService: MessageService
  ) { }

  public getHeroes(): Observable<Hero[]>{
    this.messageService.addMessage('Fetch heroes using http client');
    return this.http.get<Hero[]>(this.heroesUrl);
    
  }

  public getHero(id):Observable< Hero>{
    this.messageService.addMessage('Get user by id');
    return of(HEROES.find(hero=>hero.id ==id));
  }

  private log(message: string) {
    this.messageService.addMessage(`HeroService: ${message}`);
  }
}
