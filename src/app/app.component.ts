import { RegisterPage } from './../pages/register/register';
import { LoginPage } from './../pages/login/login';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { UsuarioPage } from '../pages/usuario/usuario';
import { BuscaPage } from '../pages/busca/busca';
import { InfoLojaPage } from '../pages/info-loja/info-loja';
import { ListaProdutosPage } from '../pages/lista-produtos/lista-produtos';
import { ProdutoPage } from '../pages/produto/produto';
import { ConfiguracaoPage } from '../pages/configuracao/configuracao';
import { DadosPage } from '../pages/dados/dados';
import { AlterarDadosPage } from '../pages/alterar-dados/alterar-dados';
import {CarrinhoPage} from '../pages/carrinho/carrinho';
import {NotificacaoPage} from '../pages/notificacao/notificacao';

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
          this.nav.setRoot(NotificacaoPage);

      // get user data
      afAuth.authState.subscribe(authData => {
        if (authData) {
          //this.user = authService.getUserData();
        }
      });
    });
  }
}