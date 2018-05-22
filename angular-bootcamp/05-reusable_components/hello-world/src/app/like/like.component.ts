import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input('isActive') isSelected: boolean;
  @Input('likesCount') count: number;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.isSelected = !this.isSelected;
    
    //If the like button is pressed then count will be 1
    //If it is unpressed then count will be 0.
    this.count = (this.count > 0) ? 0 : 1;
  }
}
