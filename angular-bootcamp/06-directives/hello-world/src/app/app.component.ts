import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  viewMode = 'map';

  post = {
    title: "Title",
    isFavorite: true
  }

  tweet = {
    body: "Here is the body of a tweet...",
    isActive: false,
    likesCount: 0
  }

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log("Favorite changed: ", eventArgs);
  }

  courses = [
    { id: 1, name: 'course1 '},
    { id: 1, name: 'course2 '},
    { id: 1, name: 'course3 '},
  ];
}
