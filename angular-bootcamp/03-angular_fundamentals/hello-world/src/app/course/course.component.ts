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
  email = "me@example.com";
  
  pipes = {// This object is for practicing and understanding "pipes" in angular.
    title: "The Complete Angular Course",
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1)
    }

  // Below we are practicing custom pipes.
  lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

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

  //"$event" is an object that list the different characteristics of the event. e.g. mouse position, movement
  onSave($event) {
    $event.stopPropagation(); // This is to prevent "event bubbling".
    console.log("Button was clicked",$event);
  }

  // The "method" below is an old method. Angular has a better method which is the next one over. 
  // onKeyUp($event) {
  //   if($event.keyCode === 13) console.log("Enter was pressed");
  // }

  onKeyUp() {
    console.log("Enter was pressed");
  }

  // This example uses template variables.
  // However two way binding should be more effiecient
  // onKeyIn(email) {
  //   console.log(email);
  // }

  // We are using the two-way binding method below.
  // two-way binding vs property binding.
  // property binding only works one way. From component to view.
  // two-way binding work both ways. So from view to component is possible.
  onKeyIn() {
    console.log(this.email);
  }


  // The only logic components should have is the presentation logic
}
