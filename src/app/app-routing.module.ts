import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './login/login.component';
import {CommonModule} from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { InfoComponent } from './info/info.component';
import { PayComponent } from './pay/pay.component';
import { SuccessComponent } from './success/success.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { PlanComponent } from './plan/plan.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path:'login', component: LoginComponent
  },
  {
    path:'signup', component: SignupComponent
  },
  {
    path:'info', component: InfoComponent
  },
  {
    path:'pay', component: PayComponent
  },
  {
    path:'success', component: SuccessComponent
  },
  {
    path:'home', component: HomeComponent
  },
  {
    path:'services', component: ServicesComponent
  },
  {
    path:'plan', component: PlanComponent
  },
  {
    path:'about', component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
