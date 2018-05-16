import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public navArr: INavigationItem[];

  constructor() { }

  ngOnInit() {
    this.navArr = [{
      title: 'Mario',
      url: '/sonic'
    },

    {
      title: 'Zelda',
      url: '/zelda'
    },
    {
      title: 'Star Fox',
      url: '/starfox'
    },
    {
      title: 'Samus',
      url: '/samus'
    },
    {
      title: 'Kirby',
      url: '/kirby'
    },
    {
      title: 'Room',
      url: '/room/:id'
    }  
  ]}

}
