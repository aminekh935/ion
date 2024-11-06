import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrinksRoutingModule } from './drinks-routing.module';

import { DrinksPage } from './drinks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrinksRoutingModule
  ],
  declarations: [DrinksPage]
})
export class DrinksPageModule {}
// src/app/pages/drinks/drink.model.ts
export interface Drink {
  id: number;
  name: string;
  price: number;
  image?: string;     // Image URL or Base64 string for the drink (optional)

}


