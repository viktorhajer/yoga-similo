import {MatDialog} from '@angular/material/dialog';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AsanaDialogComponent} from '../components/asana-dialog/asana-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private readonly dialog: MatDialog) {
  }

  open(model: string): Observable<void> {
    return this.dialog.open(AsanaDialogComponent, {
      panelClass: 'full-modal',
      data: {model}
    }).afterClosed();
  }
}
