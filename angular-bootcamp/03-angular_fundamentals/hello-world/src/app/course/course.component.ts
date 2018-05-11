import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

// A component incapsulates the data, logic and html markup for view.
@Component({
  selector: 'app-courses', 
  templateUrl: "./course.component.html",
  styleUrls: ['./course.component.css'] // This will call the css file that will be used for styling.
})
export class CourseComponent implements OnInit {
  title = "List of courses";
  isActive = true;
  courses;

  //By adding that parameter in the constructor.
  // What will happen is that "service" will be instantiated by "CoursesServcie".
  // This is called dependency injection.
  constructor(service: CoursesService) { 
    // let service = new CoursesService(); We don't use this method because it can affect the parameters of other instantiation.
    //Using the method getCourses() to set the value of courses. Which is an array of generic courses.
    this.courses = service.getCourses();
  }

  ngOnInit() {// This is used for interface. We will learn this later on.
  }

  getTitle() {
    return this.title;
  }

  // The only logic components should have is the presentation logic
}
