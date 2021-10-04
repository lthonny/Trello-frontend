import {NgModule} from '@angular/core';

import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

// import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
// import {SignupComponent} from './signup/signup.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    // HomeComponent,
    LoginComponent,
    // SignupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    RouterModule,
    HttpClientModule
  ]
})
export class PublicModule {}
