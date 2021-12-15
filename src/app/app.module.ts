import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {WinnerDialogComponent} from './components/winner-dialog/winner-dialog.component';
import {CardComponent} from './components/card/card.component';
import {MatButtonModule} from '@angular/material/button';
import {SafeUrlPipe} from './components/safeurl.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    WinnerDialogComponent,
    SafeUrlPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
