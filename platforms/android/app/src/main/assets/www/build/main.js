webpackJsonp([1],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterPage = (function () {
    function RegisterPage(nav, alertCtrl, loadingCtrl) {
        this.nav = nav;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userInfo = {};
    }
    RegisterPage.prototype.login = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-register',template:/*ion-inline-start:"/home/willamis/workspace/TheDrinkerApp/src/pages/register/register.html"*/'<ion-content>\n    <img src="assets/icon/back.png" alt="" style="position: absolute; width:30px; top:10px;" (click)="login()">\n    <img src="assets/img/logo.png" />\n  <ion-list class="list-form" padding>\n    <ion-item>\n      <ion-input type="text" placeholder="NOME" class="text-cadastro"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type="text" placeholder="CPF"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type="text" placeholder="RG"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type="text" placeholder="DATA DE NASCIMENTO"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type="text" placeholder="SENHA"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type="text" placeholder="CONFIRMAR SENHA"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type="text" placeholder="EMAIL"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type="text" placeholder="TELEFONE"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label style="font-size:10px; margin-left:5px;">Deseja receber novidades e ofertas via email.</ion-label>\n      <ion-checkbox style="margin:0 0 0 20px!important;"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <ion-label style="font-size:10px; margin-left:5px;">Eu concordo com termos e condições.</ion-label>\n      <ion-checkbox style="margin:0 0 0 20px!important;"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <button ion-button padding block (click)="signup()" round>CRIAR CADASTRO</button>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/willamis/workspace/TheDrinkerApp/src/pages/register/register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/home/home.module": [
		470,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 164;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPage = (function () {
    function LoginPage(nav, alertCtrl, loadingCtrl, toast) {
        this.nav = nav;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toast = toast;
        this.userInfo = {};
    }
    // go to signup page
    LoginPage.prototype.signup = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/home/willamis/workspace/TheDrinkerApp/src/pages/login/login.html"*/'<ion-content>\n  <img src="assets/img/logo.png" />\n  <ion-list class="list-form" padding>\n    <ion-item>\n      <ion-input type="text" placeholder="CPF"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input placeholder="Senha" type="password" [(ngModel)]="userInfo.password"></ion-input>\n    </ion-item>\n    <br>\n    <div text-center>\n      <button padding ion-button round color="primary"> ENTRAR</button>\n      <p ion-text>Esqueceu a senha?</p> \n    </div>\n  </ion-list>\n  <div text-center>\n    <p ion-text>Não tem cadastro?</p> \n    <button padding ion-button routerDirection="root"  round color="primary">CRIAR CADASTRO</button>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/willamis/workspace/TheDrinkerApp/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/home/willamis/workspace/TheDrinkerApp/src/pages/home/home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>casa</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/willamis/workspace/TheDrinkerApp/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(377);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_moment__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_home_home__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_register_register__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// Import the AF2 Module



// Import moment module

// import services
//importar as paginas criadas aqui




var firebaseConfig = {
    apiKey: "AIzaSyBrtAgU0fHKzwi99jFC0ETM_GRgnTwxoY4",
    authDomain: "dbfp-da58f.firebaseapp.com",
    databaseURL: "https://dbfp-da58f.firebaseio.com",
    projectId: "dbfp-da58f",
    storageBucket: "dbfp-da58f.appspot.com",
    messagingSenderId: "347251983378"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                //incorporar cada pagina criada aqui
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_register_register__["a" /* RegisterPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["a" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__["a" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_11_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                // incorporar cada pagina aqui
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_register_register__["a" /* RegisterPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_register_register__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth_auth__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import pages

var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, afAuth) {
        var _this = this;
        this.afAuth = afAuth;
        this.user = {};
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_0__pages_register_register__["a" /* RegisterPage */]);
            // get user data
            afAuth.authState.subscribe(function (authData) {
                if (authData) {
                    //this.user = authService.getUserData();
                }
            });
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"/home/willamis/workspace/TheDrinkerApp/src/app/app.html"*/'<ion-nav [root]="rootPage" #content></ion-nav>\n'/*ion-inline-end:"/home/willamis/workspace/TheDrinkerApp/src/app/app.html"*/,
            queries: {
                nav: new __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"]('content')
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth_auth__["a" /* AngularFireAuth */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 462:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 221,
	"./af.js": 221,
	"./ar": 222,
	"./ar-dz": 223,
	"./ar-dz.js": 223,
	"./ar-kw": 224,
	"./ar-kw.js": 224,
	"./ar-ly": 225,
	"./ar-ly.js": 225,
	"./ar-ma": 226,
	"./ar-ma.js": 226,
	"./ar-sa": 227,
	"./ar-sa.js": 227,
	"./ar-tn": 228,
	"./ar-tn.js": 228,
	"./ar.js": 222,
	"./az": 229,
	"./az.js": 229,
	"./be": 230,
	"./be.js": 230,
	"./bg": 231,
	"./bg.js": 231,
	"./bm": 232,
	"./bm.js": 232,
	"./bn": 233,
	"./bn.js": 233,
	"./bo": 234,
	"./bo.js": 234,
	"./br": 235,
	"./br.js": 235,
	"./bs": 236,
	"./bs.js": 236,
	"./ca": 237,
	"./ca.js": 237,
	"./cs": 238,
	"./cs.js": 238,
	"./cv": 239,
	"./cv.js": 239,
	"./cy": 240,
	"./cy.js": 240,
	"./da": 241,
	"./da.js": 241,
	"./de": 242,
	"./de-at": 243,
	"./de-at.js": 243,
	"./de-ch": 244,
	"./de-ch.js": 244,
	"./de.js": 242,
	"./dv": 245,
	"./dv.js": 245,
	"./el": 246,
	"./el.js": 246,
	"./en-au": 247,
	"./en-au.js": 247,
	"./en-ca": 248,
	"./en-ca.js": 248,
	"./en-gb": 249,
	"./en-gb.js": 249,
	"./en-ie": 250,
	"./en-ie.js": 250,
	"./en-il": 251,
	"./en-il.js": 251,
	"./en-nz": 252,
	"./en-nz.js": 252,
	"./eo": 253,
	"./eo.js": 253,
	"./es": 254,
	"./es-do": 255,
	"./es-do.js": 255,
	"./es-us": 256,
	"./es-us.js": 256,
	"./es.js": 254,
	"./et": 257,
	"./et.js": 257,
	"./eu": 258,
	"./eu.js": 258,
	"./fa": 259,
	"./fa.js": 259,
	"./fi": 260,
	"./fi.js": 260,
	"./fo": 261,
	"./fo.js": 261,
	"./fr": 262,
	"./fr-ca": 263,
	"./fr-ca.js": 263,
	"./fr-ch": 264,
	"./fr-ch.js": 264,
	"./fr.js": 262,
	"./fy": 265,
	"./fy.js": 265,
	"./gd": 266,
	"./gd.js": 266,
	"./gl": 267,
	"./gl.js": 267,
	"./gom-latn": 268,
	"./gom-latn.js": 268,
	"./gu": 269,
	"./gu.js": 269,
	"./he": 270,
	"./he.js": 270,
	"./hi": 271,
	"./hi.js": 271,
	"./hr": 272,
	"./hr.js": 272,
	"./hu": 273,
	"./hu.js": 273,
	"./hy-am": 274,
	"./hy-am.js": 274,
	"./id": 275,
	"./id.js": 275,
	"./is": 276,
	"./is.js": 276,
	"./it": 277,
	"./it.js": 277,
	"./ja": 278,
	"./ja.js": 278,
	"./jv": 279,
	"./jv.js": 279,
	"./ka": 280,
	"./ka.js": 280,
	"./kk": 281,
	"./kk.js": 281,
	"./km": 282,
	"./km.js": 282,
	"./kn": 283,
	"./kn.js": 283,
	"./ko": 284,
	"./ko.js": 284,
	"./ky": 285,
	"./ky.js": 285,
	"./lb": 286,
	"./lb.js": 286,
	"./lo": 287,
	"./lo.js": 287,
	"./lt": 288,
	"./lt.js": 288,
	"./lv": 289,
	"./lv.js": 289,
	"./me": 290,
	"./me.js": 290,
	"./mi": 291,
	"./mi.js": 291,
	"./mk": 292,
	"./mk.js": 292,
	"./ml": 293,
	"./ml.js": 293,
	"./mn": 294,
	"./mn.js": 294,
	"./mr": 295,
	"./mr.js": 295,
	"./ms": 296,
	"./ms-my": 297,
	"./ms-my.js": 297,
	"./ms.js": 296,
	"./mt": 298,
	"./mt.js": 298,
	"./my": 299,
	"./my.js": 299,
	"./nb": 300,
	"./nb.js": 300,
	"./ne": 301,
	"./ne.js": 301,
	"./nl": 302,
	"./nl-be": 303,
	"./nl-be.js": 303,
	"./nl.js": 302,
	"./nn": 304,
	"./nn.js": 304,
	"./pa-in": 305,
	"./pa-in.js": 305,
	"./pl": 306,
	"./pl.js": 306,
	"./pt": 307,
	"./pt-br": 308,
	"./pt-br.js": 308,
	"./pt.js": 307,
	"./ro": 309,
	"./ro.js": 309,
	"./ru": 310,
	"./ru.js": 310,
	"./sd": 311,
	"./sd.js": 311,
	"./se": 312,
	"./se.js": 312,
	"./si": 313,
	"./si.js": 313,
	"./sk": 314,
	"./sk.js": 314,
	"./sl": 315,
	"./sl.js": 315,
	"./sq": 316,
	"./sq.js": 316,
	"./sr": 317,
	"./sr-cyrl": 318,
	"./sr-cyrl.js": 318,
	"./sr.js": 317,
	"./ss": 319,
	"./ss.js": 319,
	"./sv": 320,
	"./sv.js": 320,
	"./sw": 321,
	"./sw.js": 321,
	"./ta": 322,
	"./ta.js": 322,
	"./te": 323,
	"./te.js": 323,
	"./tet": 324,
	"./tet.js": 324,
	"./tg": 325,
	"./tg.js": 325,
	"./th": 326,
	"./th.js": 326,
	"./tl-ph": 327,
	"./tl-ph.js": 327,
	"./tlh": 328,
	"./tlh.js": 328,
	"./tr": 329,
	"./tr.js": 329,
	"./tzl": 330,
	"./tzl.js": 330,
	"./tzm": 331,
	"./tzm-latn": 332,
	"./tzm-latn.js": 332,
	"./tzm.js": 331,
	"./ug-cn": 333,
	"./ug-cn.js": 333,
	"./uk": 334,
	"./uk.js": 334,
	"./ur": 335,
	"./ur.js": 335,
	"./uz": 336,
	"./uz-latn": 337,
	"./uz-latn.js": 337,
	"./uz.js": 336,
	"./vi": 338,
	"./vi.js": 338,
	"./x-pseudo": 339,
	"./x-pseudo.js": 339,
	"./yo": 340,
	"./yo.js": 340,
	"./zh-cn": 341,
	"./zh-cn.js": 341,
	"./zh-hk": 342,
	"./zh-hk.js": 342,
	"./zh-tw": 343,
	"./zh-tw.js": 343
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 462;

/***/ })

},[356]);
//# sourceMappingURL=main.js.map