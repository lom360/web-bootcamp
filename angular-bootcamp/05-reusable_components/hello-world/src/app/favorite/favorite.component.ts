import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  //The benefits of input aliasing is that if we were to change the name of our fields.
  //It will not impact many things in your applications. For example, you won't need 
  //to change the name in all your code. Aliasing will handle it for you.
  @Input("isFavorite") isSelected: boolean;

  constructor() { 
    
  }

  ngOnInit() {
  }


  onClick() {
    this.isSelected = !this.isSelected; 
  }

}
