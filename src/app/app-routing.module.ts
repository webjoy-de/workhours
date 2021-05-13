import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WorkhoursComponent} from './workhours/workhours.component';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'workhours', component: WorkhoursComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
