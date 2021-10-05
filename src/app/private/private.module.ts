import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { BoardsComponent } from "./boards/boards.component";
import { PrivateLayoutComponent } from './private-layout/private-layout.component';
import { BoardComponent } from './board/board.component';

@NgModule({
  declarations: [
    PrivateLayoutComponent,
    BoardsComponent,
    DashboardComponent,
    BoardComponent
  ],
  imports: [
    CommonModule,

    RouterModule.forChild([
      // {
      // path: '', component: PrivateLayoutComponent, children: [
      //   { path: '', redirectTo: '/private/login', pathMatch: 'full' },
      { path: 'boards', component: BoardsComponent },
      { path: 'dashboard', component: DashboardComponent }
      // ]
      // }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class PrivateModule { }
