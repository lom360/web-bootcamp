import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

  //Giving something with an output decorator an alias name will do the samething
  //for an input alias. It helps with preventing our code from breaking.
  @Output("change") click = new EventEmitter;

  constructor() { 
    
  }

  ngOnInit() {
  }


  onClick() {
    this.isSelected = !this.isSelected;
    this.click.emit({ newValue: this.isSelected });
  }

}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}