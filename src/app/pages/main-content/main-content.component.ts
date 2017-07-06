import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'main-content',
    templateUrl: 'main-content.component.html'
})

export class MainContentComponent implements OnInit {
    constructor() { }
    user;
    ngOnInit() {
        this.user = Math.min(Math.random() * 100, 29);
        this.user = Math.floor(this.user);
     }
}