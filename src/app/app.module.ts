import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes, ChildrenOutletContexts } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app.routing';
import { LoaderService } from "app/services/loader.service";



@NgModule({
  declarations: [
    ...routedComponents
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }



