import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StateDataBoxComponent } from './state-data-box/state-data-box.component';
import { StateService } from './state.service';

@NgModule({
  declarations: [
    AppComponent,
    StateDataBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    StateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
