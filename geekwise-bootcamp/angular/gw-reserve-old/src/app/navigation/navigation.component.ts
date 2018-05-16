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
            title: 'About',
            url: '/about'
        },
        
        {
            title: 'Room',
            url: '/room/:id'
        },
        {
            title: 'Other',
            url: '/other'
        },
        {
            title: 'Pineapple',
            url: '/pineapple'
        }
    ]}


}