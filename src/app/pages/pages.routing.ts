import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainContentComponent } from './main-content/main-content.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '', component: PagesComponent, children: [
      { path: '', pathMatch: 'full', redirectTo: 'main' },
      { path: 'main', component: MainContentComponent },
    ]
  },
];

export const routedComponents = [
  PagesComponent,
  MainContentComponent
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
