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
    if (this.registerData.fullName && this.registerData.email && this.registerData.password) {
      // Simulate registration success
      console.log('User registered:', this.registerData);
      this.navCtrl.navigateForward('/login');  // Redirect to login after registration
    } else {
      console.log('Please fill out the form correctly.');
    }
  }
}



