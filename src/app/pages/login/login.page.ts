import { Component,  ViewChild, ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  @ViewChild('videoEl', { static: false }) videoEl!: ElementRef;

  loginData = {
    email: '',
    password: ''
  };

  constructor(private navCtrl: NavController) {}

  login() {
    // Retrieve stored user data
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');

    // Check if email and password match stored credentials
    if (
      storedUser &&
      this.loginData.email === storedUser.email &&
      this.loginData.password === storedUser.password
    ) {
      console.log('Login successful');
      this.navCtrl.navigateForward('/home');
    } else {
      console.log('Invalid email or password');
    }
  }
  onVideoEnd(event: Event) {
    const videoElement = this.videoEl.nativeElement;
    // Aller à la dernière image disponible avant la fin
    videoElement.currentTime = videoElement.duration - 30;
  }
}  

