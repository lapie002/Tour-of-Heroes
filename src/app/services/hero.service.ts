import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


import { HEROES } from '../mocked_data/mock-heroes';
import { Hero } from '../models/hero';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService){}

  public getHeroes(): Observable<Hero[]>{
      // Todo: send the message _after_ fetching the heroes
      this.messageService.clear();
      this.messageService.addMessage('HeroService: fetched heroes');
      return of(HEROES);
  }

  public getHeroe(id: number): Observable<Hero>{
      // Todo: send the message _after_ fetching the heroes
      this.messageService.clear();
      this.messageService.addMessage(`HeroService: fetched a hero id=${id}`);
      return of(HEROES.find(hero => hero.id === id));
  }

}
