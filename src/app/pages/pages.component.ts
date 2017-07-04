import { Component, OnInit } from '@angular/core';
import { routerTransition } from "../../animations/router.animations";


@Component({
    selector: 'pages',
    templateUrl: 'pages.component.html',
    animations: [routerTransition()],
    host: { '[@routerTransition]': '' }
})

export class PagesComponent implements OnInit {
    searchPopup: boolean = false;
    constructor() { }

    ngOnInit() {
    }
}