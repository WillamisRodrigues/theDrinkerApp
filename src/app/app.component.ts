import { RegisterPage } from './../pages/register/register';
import { LoginPage } from './../pages/login/login';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { UsuarioPage } from '../pages/usuario/usuario';

// import pages
import { AngularFireAuth } from "angularfire2/auth/auth";

@Component({
  templateUrl: 'app.html',
  queries: {
    nav: new ViewChild('content')
  }
})

export class MyApp {
  rootPage: any;
  nav: any;
  user = {};

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public afAuth: AngularFireAuth) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
          this.nav.setRoot(UsuarioPage);

      // get user data
      afAuth.authState.subscribe(authData => {
        if (authData) {
          //this.user = authService.getUserData();
        }
      });
    });
  }
}