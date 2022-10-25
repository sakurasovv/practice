import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MondayComponent } from './monday/monday.component';
import { ProcessingComponent } from './processing/processing.component';
import { TuesdayComponent } from './tuesday/tuesday.component';

const routes: Routes = [
  {path:'', component: MondayComponent },
  {path:'monday', component: MondayComponent },
  {path:'tuesday', component: TuesdayComponent },
  {path:'**', component: ProcessingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
