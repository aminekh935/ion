
import { Component, OnInit } from '@angular/core';
import { Drink } from './drinks.module'; // Assuming Drink model is already created
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.page.html',
  styleUrls: ['./drinks.page.scss'],
})
export class DrinksPage implements OnInit {
  drinks: Drink[] = [];
  newDrink: Drink = { id: 0, name: '', price: 0, image: '' }; // Object to hold new drink data
  selectedImage: string | ArrayBuffer | null = null; // To store the image preview

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    const storedDrinks = localStorage.getItem('drinks');
    if (storedDrinks) {
      this.drinks = JSON.parse(storedDrinks);
    }
  }
  
  goToHome() {
    this.navCtrl.navigateBack('/home');
  }

  // Get the background image for the card
  getBackgroundImage(drink: Drink): string {
    return drink.image ? `url(${drink.image})` : `url(assets/img/default.jpg)`; // Use default image if no image is set
  }

  // Handle the file input for selecting an image
  onImageSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result; // This can be string | ArrayBuffer | null | undefined
  
        if (typeof result === 'string') {
          this.selectedImage = result; // Ensure result is a string before assigning
          this.newDrink.image = this.selectedImage; // Store the image in the new drink object
        }
      };
      reader.readAsDataURL(file);
    }
  }

  // Add a new drink
  addDrink() {
    if (this.newDrink.name && this.newDrink.price) {
      this.newDrink.id = this.drinks.length + 1; // Assign an ID based on the number of drinks
      this.drinks.push({ ...this.newDrink }); // Add the new drink to the drinks array

      // Save drinks to local storage
      localStorage.setItem('drinks', JSON.stringify(this.drinks));

      // Reset the form fields
      this.newDrink = { id: 0, name: '', price: 0, image: '' };
      this.selectedImage = null; // Reset the image preview
    }
  }

  // Delete a drink by id
  deleteDrink(id: number) {
    this.drinks = this.drinks.filter(drink => drink.id !== id);
    // Update local storage after deletion
    localStorage.setItem('drinks', JSON.stringify(this.drinks));
  }
}
