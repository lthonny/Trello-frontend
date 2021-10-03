import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {BoardsComponent} from "./boards/boards.component";
import { PrivateLayoutComponent } from './private-layout/private-layout.component';

@NgModule({
  declarations: [
    PrivateLayoutComponent
  ],
  imports: [
    CommonModule,

    RouterModule.forChild([
      {
        path: '', component: PrivateLayoutComponent, children: [
        //   { path: '', redirectTo: '/private/login', pathMatch: 'full' },
          { path: 'boards', component: BoardsComponent },
          { path: 'dashboard', component: DashboardComponent }
        ]
      }
    ])
  ],
  exports: [

  ]
})
export class PrivateModule { }
