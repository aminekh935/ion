import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  registerData = {
    fullName: '',
    email: '',
    password: ''
  };

  constructor(private navCtrl: NavController) {}

  register() {
    const { fullName, email, password } = this.registerData;
    if (fullName && email && password) {
      // Store the registration data in local storage
      localStorage.setItem('user', JSON.stringify(this.registerData));
      console.log('User registered:', this.registerData);

      // Navigate to login page after successful registration
      this.navCtrl.navigateForward('/login');
    } else {
      console.log('Please fill out the form correctly.');
    }
  }
}



