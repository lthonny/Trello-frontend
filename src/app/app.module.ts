import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {CookieService} from 'ngx-cookie-service';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {PublicModule} from './public/public.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialModule} from './material.module';
import {PrivateModule} from "./private/private.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    PublicModule,
    PrivateModule,
    // SharedModule
  ],
  providers: [
    CookieService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
