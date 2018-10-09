import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StateDataBoxComponent } from './state-data-box/state-data-box.component';

import { StateData } from './states.data';

@NgModule({
  declarations: [
    AppComponent,
    StateDataBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    StateData
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
