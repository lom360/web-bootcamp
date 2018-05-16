import { RoomFormComponent } from './../../room-form/room-form.component';
import { RoomComponent } from './../../room/room.component';
import { RoomListComponent } from './../../room-list/room-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: "rooms/:id",
    // resolve: { resvList: ReservationListResolverService },
    component: RoomComponent,
    children: [
      { path: 'form', component: RoomFormComponent },
      { path: 'list', /*resolve: { resvList: ReservationListResolverService },*/ component: RoomListComponent },
      {
        path: "",
        redirectTo: "list",
        pathMatch: "full"
      },
      {
        path: "**",
        redirectTo: "/not/found",
        pathMatch: "full"
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomRoutingModule { }

export const routingComponents = [RoomComponent, RoomFormComponent, RoomListComponent]