import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CookieService } from 'ngx-cookie-service';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { SharedModule } from './shared/shared.module';
import { PublicModule } from './public/public.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { PrivateModule } from './private/private.module';


import { MatSliderModule } from '@angular/material/slider';

import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    // PrivateModule,
    // SharedModule
    MatSliderModule,
    MatIconModule
  ],
  providers: [
    CookieService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
