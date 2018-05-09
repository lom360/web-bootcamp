import { Component, OnInit } from '@angular/core';

// A component incapsulates the data, logic and html markup for view.
@Component({
  selector: 'app-courses', //This is the tag name we'll use to call this componenet
  template: '<h2>{{ title }}</h2>',// We will either call an html file or actually write up html code.
  styleUrls: ['./course.component.css'] // This will call the css file that will be used for styling.
})
export class CourseComponent implements OnInit {
  title = "List of courses";

  constructor() { }

  ngOnInit() {// This is used for interface. We will learn this later on.
  }

}
