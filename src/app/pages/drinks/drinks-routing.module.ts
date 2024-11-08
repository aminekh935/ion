// src/app/pages/drinks/drinks-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinksPage } from './drinks.page';

const routes: Routes = [
  {
    path: '',
    component: DrinksPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrinksRoutingModule {}

