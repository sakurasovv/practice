import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'Понедельник', component:AppComponent},
  {path:'Вторник', component:AppComponent},
  {path:'Среда', component:AppComponent},
  {path:'Четверг', component:AppComponent},
  {path:'Пятница', component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
