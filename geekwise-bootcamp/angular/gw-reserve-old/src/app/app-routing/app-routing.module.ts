import { AboutComponent } from './../rooms/about/about.component';
import { WelcomeComponent } from './../rooms/welcome/welcome.component';
import { WelcomeApp } from './../welcome/welcome.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotFoundComponent },

]
@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [WelcomeComponent, NotFoundComponent, AboutComponent]
