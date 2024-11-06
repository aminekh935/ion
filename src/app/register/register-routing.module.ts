import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterPage } from './register.page';

const routes: Routes = [
  
 // { path: 'login', loadChildren: () => import('src\\app\\pages\\login\\login.module').then(m => m.LoginModel) },
  { path: 'register', loadChildren: () => import('./register.module').then(m => m.RegisterPageModule) },
  {
    path: '',
    component: RegisterPage
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterPageRoutingModule {}

