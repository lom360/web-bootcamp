import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from "@angular/router";
 
import { AppComponent } from './app.component';
import { WelcomeApp } from './welcome/welcome.component';
import { NavComponent } from './navigation/navigation.component';
import { FourohfourComponent } from './fourohfour/fourohfour.component';
import { AboutComponent } from './about/about.component';
import { RoomComponent } from './room/room.component';

const routes: Route[] = [
  {
    component: WelcomeApp,
    path: 'welcome'
  },
  {
    component: AboutComponent,
    path: 'about'
  },
  {
    component: WelcomeApp,
    path: ""
  },
  {
    component: RoomComponent,
    path: "room/:id"
  },
  {
    path: "",
    redirectTo: 'welcome',
    pathMatch: "full"
  },
  {
    path: "**",
    component: FourohfourComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    WelcomeApp,
    FourohfourComponent,
    AboutComponent,
    RoomComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
