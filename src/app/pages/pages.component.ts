import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { InputDecorator } from '@angular/core/src/metadata/directives';

@Component({
    selector: 'pages',
    templateUrl: 'pages.component.html'
})

export class PagesComponent implements OnInit {
    searchShow: boolean = false;
    menuShow: boolean = false;

    constructor() { }

    toggleSearch() {
        if (this.menuShow) this.menuShow = false;
        this.searchShow = !this.searchShow;
    }
    toggleMenu() {
        if (this.searchShow) this.searchShow = false;
        this.menuShow = !this.menuShow;
    }



    ngOnInit() {
    }
}