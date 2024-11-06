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
   
      this.navCtrl.navigateForward('/home');
    
  }
  onVideoEnd(event: Event) {
    const videoElement = this.videoEl.nativeElement;
    // Aller à la dernière image disponible avant la fin
    videoElement.currentTime = videoElement.duration - 0.1;
  }
}  

