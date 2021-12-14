import {MatDialog} from '@angular/material/dialog';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {WinnerDialogComponent} from '../components/winner-dialog/winner-dialog.component';
import {Stat} from '../model/stat.model';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private readonly dialog: MatDialog) {
  }

  winner(stat: Stat): Observable<void> {
    return this.dialog.open(WinnerDialogComponent, {
      panelClass: 'full-modal',
      data: {stat}
    }).afterClosed();
  }
}
