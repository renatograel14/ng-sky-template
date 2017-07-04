import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule, routedComponents } from './pages.routing';

@NgModule({
    imports: [
        PagesRoutingModule,
    ],
    declarations: [...routedComponents],
    providers: [/* TODO: Providers go here */],
    bootstrap: [PagesComponent],
})
export class PagesModule { }
