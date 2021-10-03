import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./public/home/home.component";
import {ErrorComponent} from "./shared/error/error.component";
import {LoginComponent} from "./public/login/login.component";
import {SignupComponent} from "./public/signup/signup.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
    ]
  },
  { path: 'login', component: LoginComponent},
  { path: 'singup', component: SignupComponent},
  {
    path: 'private',
    loadChildren: () => import('./private/private.module').then(module => module.PrivateModule)
  },
  {
    path: 'error', component: ErrorComponent
  },
  {
    path: '**', redirectTo: '/error'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
