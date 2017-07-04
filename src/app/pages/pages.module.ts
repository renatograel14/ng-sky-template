import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';

const routes: Routes = [
    { path: '', loadChildren: '#PagesModule' },
];

export const routedComponents = [PagesComponent];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [...routedComponents],
  exports: [RouterModule],
})
export class PagesModule { }
