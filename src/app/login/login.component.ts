import { LoaderService } from '../services/loader.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
})

export class LoginComponent implements OnInit {
    constructor(private _router: Router, private _loader: LoaderService) { }

    signin() {
        this._loader.show();
        setTimeout(() => {
            this._loader.hide();
            this._router.navigate(['/pages']);
        }, 2000);
    }

    ngOnInit() { }
}