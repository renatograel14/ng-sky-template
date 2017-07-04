import { Component, OnInit } from '@angular/core';
import { routerTransition } from "../../animations/router.animations";

@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    animations: [routerTransition()],
    host: { '[@routerTransition]': '' }
})

export class LoginComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}