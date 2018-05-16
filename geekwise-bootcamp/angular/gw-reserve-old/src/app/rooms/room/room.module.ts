import { RoomService } from './../../room.service';
import { routingComponents, RoomRoutingModule } from './../room-routing/room-routing.module';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [RoomRoutingModule,
    FormsModule,
    CommonModule,
    BrowserModule
  ],
  declarations: [routingComponents],
  providers: [RoomService]

})

export class RoomModule { }  