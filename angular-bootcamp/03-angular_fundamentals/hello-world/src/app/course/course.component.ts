import { Component, OnInit } from '@angular/core';

// A component incapsulates the data, logic and html markup for view.
@Component({
  selector: 'app-courses', //This is the tag name we'll use to call this componenet
  // The double curly braces is used to render data on page. It's called "data binding" or string interpolation.
  // With "template" we will either call an html file or actually write up html code.
  // "*ngFor" is an example of a directive. It is used to manipulate elements from the "DOM".
  // "let" and "of" are both key words.
  // "let" we are defining a variable. In the example below it's "course".
  // "of" we are setting the defined varible with a "field". In the example below we are pulling it from "courses".
  // "*ngFor" works like a loop. It will illiterate each item in the array one by one.
  template: `
    <h2>{{ this.title }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
    `,
  styleUrls: ['./course.component.css'] // This will call the css file that will be used for styling.
})
export class CourseComponent implements OnInit {
  title = "List of courses";
  courses = ["course1", "course2", "course3"];

  constructor() { }

  ngOnInit() {// This is used for interface. We will learn this later on.
  }

  getTitle() {
    return this.title;
  }
}
