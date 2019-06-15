import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// Import moment module
import { MomentModule } from 'angular2-moment';

// import services
//importar as paginas criadas aqui
import { HttpClientModule } from '@angular/common/http';
import { LoginPage } from '../pages/login/login';
import { HomePage } from './../pages/home/home';
import {RegisterPage} from './../pages/register/register';
import {UsuarioPage} from './../pages/usuario/usuario';
import {BuscaPage} from './../pages/busca/busca';

export const firebaseConfig = {
  apiKey: "AIzaSyBrtAgU0fHKzwi99jFC0ETM_GRgnTwxoY4",
    authDomain: "dbfp-da58f.firebaseapp.com",
    databaseURL: "https://dbfp-da58f.firebaseio.com",
    projectId: "dbfp-da58f",
    storageBucket: "dbfp-da58f.appspot.com",
    messagingSenderId: "347251983378"
};


@NgModule({
  declarations: [
    //incorporar cada pagina criada aqui
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    UsuarioPage,
    BuscaPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MomentModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    // incorporar cada pagina aqui
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    UsuarioPage,
    BuscaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler}  
  ]
})
export class AppModule {
}