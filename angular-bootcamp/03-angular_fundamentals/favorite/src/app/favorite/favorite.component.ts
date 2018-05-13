import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  // All the commented lines is a part of the solution I made for the assignment.
  // isClicked = true;
  // myClass;
  isFavorite: boolean;

  constructor() { }

  ngOnInit() {
  }

  // onToggle() {
  //   this.isClicked = !this.isClicked;
  // }

  // setGlyphicon() {
  //   if(this.isClicked) {
  //     this.myClass = "glyphicon-star";
  //     return this.myClass;
  //   }else{
  //     this.myClass = "glyphicon-star-empty";
  //     return this.myClass;
  //   }
  // }

  onClick() {
    this.isFavorite = !this.isFavorite;
  }
}
