
import { Component, OnInit } from '@angular/core';
import { Table } from './home.module';
import { Drink } from '../drinks/drinks.module'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  tables: Table[] = [];
  drinks: Drink[] = []; // Array to hold drinks loaded from localStorage
  isToastOpen = false;
  selectedTable: Table | null = null;
  showDrinksList = false;
  showBill = false;
  total = 0;

  constructor() {
    // Add some sample tables for demonstration
    this.tables = [
      { number: 1, orders: [], showOrders: false },
      { number: 2, orders: [], showOrders: false },
      { number: 3, orders: [], showOrders: false },
      { number: 4, orders: [], showOrders: false },
      { number: 5, orders: [], showOrders: false },
      { number: 6, orders: [], showOrders: false },
      { number: 7, orders: [], showOrders: false },
      { number: 8, orders: [], showOrders: false },
    ];
  }

  ngOnInit() {
    // Load drinks from local storage
    const storedDrinks = localStorage.getItem('drinks');
    if (storedDrinks) {
      this.drinks = JSON.parse(storedDrinks);
    }
  }

  public alertButtons = [
    {
      text: 'Annuler',
      role: 'cancel',
      handler: () => {
        console.log('Suppression annulée');
      },
    },
    {
      text: 'Supprimer',
      role: 'confirm',
      handler: () => {
        console.log('Suppression confirmée');
      },
    },
  ];

  setResult(ev: CustomEvent, index: number) {
    if (ev.detail.role === 'confirm') {
      this.deleteTable(index);
      this.selectedTable = null;
    }
  }

  openDrinksList() {
    
    this.selectedTable = null;
  }

  deleteTable(index: number) {
    this.tables.splice(index, 1); // Supprimer la table par index
  }
  
  addTable() {
    const newTableNumber = this.tables.length + 1;
    this.tables.push({ number: newTableNumber, orders: [], showOrders: false });
  }

  selectTable(table: Table) {
    this.selectedTable = table;
    this.showDrinksList = true;
    this.showBill = false;
  }

  addDrinkToTable(drink: Drink) {
    if (this.selectedTable) {
      this.selectedTable.orders.push({ name: drink.name, price: drink.price });
    }
  }

  getTableTotal(table: Table): number {
    return table.orders.reduce((sum, order) => sum + order.price, 0);
  }

  payTable() {
    if (this.selectedTable) {
      this.total = this.getTableTotal(this.selectedTable);
      this.showBill = true;
    }
  }

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
    this.showBill = isOpen;
    if (this.selectedTable) {
      this.selectedTable.orders = [];
      this.total = 0;
    }
  }

  printBill() {
    console.log('Payed');
    this.showBill = false;
  }

  toggleOrders(table: Table) {
    table.showOrders = !table.showOrders;
  }
}
