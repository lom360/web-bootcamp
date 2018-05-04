import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  public id: string;

  constructor(
    private _route: ActivatedRoute
  ) { }

  public ngOnInit() {
    this._route.paramMap.subscribe(paramMap => {
      this.id = paramMap.get("id");
      this._someOtherWorkHere();
    })
  }

  private _someOtherWorkHere() {
    console.log("Hello World!!!");
  }

}
