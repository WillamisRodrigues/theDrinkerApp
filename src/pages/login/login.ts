import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, ToastController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home'
import * as firebase from 'firebase';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  userInfo: any = {};

  constructor(public nav: NavController, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public toast: ToastController) { }

  // go to signup page
  signup() {
    this.nav.push(RegisterPage);
  }
}