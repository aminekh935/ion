import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
export interface Table {
  
    number: number;
    orders: { name: string, price: number }[];
    showOrders?: boolean; // Ajout de showOrders avec une valeur facultative
  
  
}

export interface Drink {
  name: string;
  price: number;
}

