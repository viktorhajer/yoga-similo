import {Component, Input} from '@angular/core';
import {Card} from '../../model/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() card: Card = null as any;
  @Input() highlighted = false;
  @Input() done = false;
  @Input() cheat = false;
}
