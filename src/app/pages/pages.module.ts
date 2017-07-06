import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';



import { PagesComponent } from './pages.component';
import { PagesRoutingModule, routedComponents } from './pages.routing';

@NgModule({
    imports: [
        PagesRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [...routedComponents],
    bootstrap: [PagesComponent],
})
export class PagesModule { }
