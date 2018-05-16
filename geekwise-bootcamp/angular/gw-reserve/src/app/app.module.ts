import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RoomReservationComponent } from './room-reservation/room-reservation.component';
import { ReservationFormsComponent } from './reservation-forms/reservation-forms.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    RoomReservationComponent,
    ReservationFormsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
