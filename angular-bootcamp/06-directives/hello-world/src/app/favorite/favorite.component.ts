import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewEncapsulation } from '@angular/compiler/src/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  // The line below is a method to write html for the compenent. It is only recommended to use when content is very small.
  // template: ` `
  styleUrls: ['./favorite.component.css']
  // The line below is a method to add styling to the component. This is also only recommended to use when content is very small.
  // styles: [ ` ` ]
  // The property below is hardly used. It's something that can manipulate the shadow dom.
  // ViewEncapsulation:
})
export class FavoriteComponent  {

  //The benefits of input aliasing is that if we were to change the name of our fields.
  //It will not impact many things in your applications. For example, you won't need 
  //to change the name in all your code. Aliasing will handle it for you.
  @Input("isFavorite") isSelected: boolean;

  //Giving something with an output decorator an alias name will do the samething
  //for an input alias. It helps with preventing our code from breaking.
  @Output("change") click = new EventEmitter;

  onClick() {
    this.isSelected = !this.isSelected;
    this.click.emit({ newValue: this.isSelected });
  }

}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}