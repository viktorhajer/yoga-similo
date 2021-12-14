import {Component} from '@angular/core';
import {DialogService} from './services/dialog.service';
import {Card, CARDS} from './model/card.model';
import {Stat} from './model/stat.model';

// @ts-ignore

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  selected1: Card = new Card();
  selected2: Card = new Card();
  blocked = false;
  done: Card[] = [];
  stat = new Stat();
  randomCards: Card[] = [];
  level = 1;
  cheat = false;

  constructor(private readonly dialogService: DialogService) {
    this.start();
  }

  start(level = 1) {
    this.level = level;
    const size = level === 1 ? 10 : (level === 2 ? 15 : (level === 3 ? 20 : 5));
    this.clearAll();
    const cards = CARDS.slice(0, size * 2);
    const randomNums: number[] = [];
    while (randomNums.length !== cards.length) {
      let random = Math.floor(Math.random() * cards.length);
      if (!randomNums.some(c => c === random)) {
        randomNums.push(random);
      }
    }
    for (let i = 0; i < randomNums.length; i++) {
      this.randomCards[i] = {id: i+'', title: cards[randomNums[i]].title, image: cards[randomNums[i]].image};
    }
  }

  isHighlighted(id: string): boolean {
    return this.selected1.id === id || this.selected2.id === id;
  }

  isDone(id: string): boolean {
    return this.done.some(card => card.id === id);
  }

  select(card: Card) {
    if (!this.blocked && !this.isDone(card.id)) {
      if (this.selected2.id) {
        this.clearSelected();
      }
      if (!this.selected1.id) {
        this.selected1 = card;
      } else if (this.selected1.id === card.id) {
        this.clearSelected();
      } else {
        this.stat.increase();
        this.selected2 = card;
        this.checkResult();
      }
    }
  }

  getEncodedURL(): string {
    return encodeURIComponent(window.location.origin + window.location.pathname);
  }

  private checkResult() {
    if (!!this.selected1.id && this.selected1.title === this.selected2.title) {
      this.blocked = true;
      setTimeout(() => {
        this.done.push(...[this.selected1, this.selected2]);
        this.clearSelected();
        this.blocked = false;
        if (this.done.length === this.randomCards.length) {
          this.stat.finish();
          this.dialogService.winner(this.stat);
        }
      }, 800);
    }
  }

  private clearSelected() {
    this.selected1 = new Card();
    this.selected2 = new Card();
  }

  private clearAll(){
    this.clearSelected();
    this.randomCards = [];
    this.stat = new Stat();
    this.stat.level = this.level;
    this.done = [];
  }
}
