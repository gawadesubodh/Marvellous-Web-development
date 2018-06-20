import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InlineComponent } from './inline/inline.component';
import { MarvellousCompComponent } from './marvellous-comp/marvellous-comp.component';
import { InsideFirstComponent } from './inside-first/inside-first.component';
import { InsideSecondComponent } from './inside-second/inside-second.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    InlineComponent,
    MarvellousCompComponent,
    InsideFirstComponent,
    InsideSecondComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
