import { WelcomeApp } from './welcome/welcome.component';
import { NavComponent } from './navigation/navigation.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    WelcomeApp
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
