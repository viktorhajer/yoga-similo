import {Component} from '@angular/core';
import {DialogService} from './services/dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  cards = [
    {title: 'abc'},
    {title: 'ddd'},
    {title: 'eee'},
    {title: '9kpfMWJyG3X'},
    {title: 'fdsafd'},
    {title: '3424fsd'},
    {title: 'abc'},
    {title: 'ddd'},
    {title: 'eee'},
    {title: '9kpfMWJyG3X'},
    {title: 'fdsafd'},
    {title: '3424fsd'}
  ];

  constructor(private readonly dialogService: DialogService) {
  }

}
