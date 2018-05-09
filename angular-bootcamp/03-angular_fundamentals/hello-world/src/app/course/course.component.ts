import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course', //This is the tag name we'll use to call this componenet
  templateUrl: './course.component.html',// We will either call an html file or actually write up html code.
  styleUrls: ['./course.component.css'] // This will call the css file that will be used for styling.
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit() {// This is used for interface. We will learn this later on.
  }

}
