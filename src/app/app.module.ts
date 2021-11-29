import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBottonComponent } from './top-botton/top-botton.component';
import { DownBottonComponent } from './down-botton/down-botton.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBottonComponent,
    DownBottonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
