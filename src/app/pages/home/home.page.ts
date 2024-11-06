import { Component} from '@angular/core';
import { Table, Drink } from './home.module';




@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  tables: Table[] = [];
  drinks = [
    { name: 'Coffee', price: 5 },
    { name: 'Tea', price: 3 },
    { name: 'Juice', price: 4 },
  

  ];
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
  openDrinksList(table: Table) {
    this.selectedTable = table;
    this.showDrinksList = true;
  }

  deleteTable(index: number) {
    this.tables.splice(index, 1);  // Supprimer la table par index
  }
  
  addTable() {
    const newTableNumber = this.tables.length + 1;
  this.tables.push({ number: newTableNumber, orders: [], showOrders: false }); 
  }

  selectTable(table: Table) {
    this.selectedTable = table;
    this.showDrinksList = false;
    this.showBill = false;
    this.showDrinksList = true;

  }

  

  addDrinkToTable(drink: { name: string; price: number }) {
    if (this.selectedTable) {
      this.selectedTable.orders.push({ name: drink.name, price: drink.price });
     // this.showDrinksList = false; // Hide the drinks list after adding
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
    this.total = 0;}
  

  }
  printBill() {
    // Logique pour imprimer la  ou générer un reçu
    console.log('payed');
    this.showBill = false;
  
  }
  
    // Implement printing logic here if needed
  
  toggleOrders(table: any) {
    table.showOrders = !table.showOrders;
  }
  
}
