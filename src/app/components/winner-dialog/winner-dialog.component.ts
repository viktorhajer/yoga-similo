import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Stat} from '../../model/stat.model';

@Component({
  selector: 'app-winner-dialog',
  templateUrl: './winner-dialog.component.html',
  styleUrls: ['./winner-dialog.component.scss']
})
export class WinnerDialogComponent {

  minutes = 0;
  seconds = 0;

  constructor(protected dialogRef: MatDialogRef<WinnerDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { stat: Stat }) {
    this.minutes = Math.floor(this.data.stat.time / 1000 / 60);
    this.seconds = Math.floor(this.data.stat.time / 1000) - (this.minutes * 60);
  }

  close() {
    this.dialogRef.close();
  }
}
