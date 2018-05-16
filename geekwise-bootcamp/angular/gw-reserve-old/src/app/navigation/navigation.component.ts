import { Component, OnInit } from "@angular/core";
import { INavigationItem } from './../../interfaces/navigation';

@Component({
    selector: 'nav-component',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})

export class NavComponent implements OnInit {

    public navArr: INavigationItem[];

    ngOnInit() {
        this.navArr = [{
            title: 'Mario',
            url: '/mario'
        },
        
        {
            title: 'Zelda',
            url: 'zelda'
        },
        {
            title: 'Star Fox',
            url: 'starfox'
        },
        {
            title: 'Room',
            url: '/room/:id'
        }
    ]}


}