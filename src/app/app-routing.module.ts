import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './compnents/home/home.component';
import { NavbarComponent } from './compnents/navbar/navbar.component';
import { AboutComponent } from './compnents/about/about.component';
const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'home/about', component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
