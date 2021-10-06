import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { BoardsComponent } from "./boards/boards.component";
import { BoardComponent } from './board/board.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderLayoutComponent } from './header-layout/header-layout.component';

@NgModule({
  declarations: [
    BoardsComponent,
    DashboardComponent,
    BoardComponent,
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
          { path: 'boards', component: BoardsComponent },
          { path: 'dashboard', component: DashboardComponent }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class PrivateModule { }
