import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuccessComponent } from './success/success.component';
import { ServicesComponent } from './services/services.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { InfoComponent } from './info/info.component';
import { PayComponent } from './pay/pay.component';
import { HomeComponent } from './home/home.component';
import { PlanComponent } from './plan/plan.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    SuccessComponent,
    ServicesComponent,
    LoginComponent,
    SignupComponent,
    InfoComponent,
    PayComponent,
    HomeComponent,
    PlanComponent,
    AboutComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
