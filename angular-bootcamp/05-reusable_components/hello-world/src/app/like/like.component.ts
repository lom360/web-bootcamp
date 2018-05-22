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
    
    //If the like button is pressed then add 1 to count.
    //If the like button is unpressed then minus 1 to count.
    this.count += (this.count > 0) ? -1 : 1;

    //Below is the instructor's way of adding or subtracting 1.
    //this.likesCount += (this.isActive) ? -1 : 1;
  }
}
