import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
      HomeComponent,
      LoginComponent,
      SignupComponent
    ],
  exports: [
      
  ]
})
export class PublicModule { }