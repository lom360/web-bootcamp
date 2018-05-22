import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  isActive: boolean;
  // likesCount: number;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isActive = !this.isActive;
    // this.likesCount += (this.isActive) ? -1 : 1;
  }

}
