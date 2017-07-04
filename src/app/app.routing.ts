import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';


const routes: Routes = [
  // { path: '', component: AppComponent, },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'pages', loadChildren: './pages/pages.module#PagesModule' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [AppComponent];