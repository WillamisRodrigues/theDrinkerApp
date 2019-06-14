import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})

export class RegisterPage {
  userInfo: any = {};
  constructor(public nav: NavController, public alertCtrl: AlertController, public loadingCtrl: LoadingController) { }

  login() {
    this.nav.setRoot(LoginPage);
  }
}
