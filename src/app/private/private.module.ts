import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { BoardsComponent } from "./boards/boards.component";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderLayoutComponent } from './header-layout/header-layout.component';

import {AuthGuard} from "../services/auth.guard";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import {AuthInterceptor} from "../services/auth.interceptor";

@NgModule({
  declarations: [
    BoardsComponent,
    DashboardComponent,
    HeaderLayoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    RouterModule.forChild([
      {
        path: '', component: HeaderLayoutComponent, children: [
          { path: '', redirectTo: 'login', pathMatch: 'full' },
          { path: 'boards', component: BoardsComponent, canActivate: [AuthGuard] },
          { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }
        ]
      }
    ])
  ],
  exports: [
    RouterModule,
    // HttpClientModule
  ],
  providers: [
    // {
    //   provide : HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptor,
    //   multi: true,
    // }
  ]
})
export class PrivateModule { }
