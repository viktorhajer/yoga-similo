import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-asana-dialog',
  templateUrl: './asana-dialog.component.html',
  styleUrls: ['./asana-dialog.component.scss']
})
export class AsanaDialogComponent {

  constructor(protected dialogRef: MatDialogRef<AsanaDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { model: string }) {
  }

  close() {
    this.dialogRef.close();
  }
}
