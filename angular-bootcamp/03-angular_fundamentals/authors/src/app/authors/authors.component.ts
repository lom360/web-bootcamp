import { AuthorsService } from './../authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  title = "Authors";
  authors;
  count;

  constructor(services: AuthorsService) { 
    this.authors = services.getAuthors();
    this.count = services.getAuthors().length;
  }

  ngOnInit() {
  }

}
