import { environment } from './../environments/environment.prod';
import { AppRoutingModule, routedComponents } from './app-routing/app-routing.module';
import { RoomModule } from './rooms/room/room.module';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from "@angular/router";
 
import { AppComponent } from './app.component';
import { WelcomeApp } from './welcome/welcome.component';
import { NavComponent } from './navigation/navigation.component';
// import { FourohfourComponent } from './fourohfour/fourohfour.comnponent';
// import { AboutComponent } from './about/about.component';
import { RoomComponent } from './room/room.component';
import { RoomFormComponent } from './room-form/room-form.component';
import { RoomListComponent } from './room-list/room-list.component';
import { WelcomeComponent } from './rooms/welcome/welcome.component';
import { AboutComponent } from './rooms/about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

// import { AngularFireModule } from "angularfire2";
// import { AngularFireAuthModule } from "angularfire2/auth";
// import { AngularFireDatabaseModule } from "angularfire2/database";

import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule, AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NotFoundComponent,
    routedComponents
  ],
  imports: [
    BrowserModule,
    RoomModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
