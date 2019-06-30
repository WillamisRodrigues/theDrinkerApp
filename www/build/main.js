webpackJsonp([11],{

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the NotificacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificacaoPage = (function () {
    function NotificacaoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NotificacaoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificacaoPage');
    };
    NotificacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-notificacao',template:/*ion-inline-start:"/home/willamis/workspace/TheDrinkerApp/src/pages/notificacao/notificacao.html"*/'<ion-content>\n    <img src="assets/img/back.png" alt="" style="width:20px; top:10px; left:10px; position:absolute;">\n    <ion-title style="padding: 10px!important; margin-left:20px; font-size: 10pt;">Notificações</ion-title>\n    <hr>\n    <br>\n    <ion-list>\n        <ion-item>\n          <img src="assets/img/Notificaçao on.png" alt="" style="width:40px; transform: scaleX(-1); position:absolute; top:2px; right:10px;">\n          <h2 style="margin-left: 10px;">Notificações</h2>\n        </ion-item>\n        <ion-item>\n          <img src="assets/img/Notificaçao off.png" alt="" style="width:40px; transform: scaleX(-1); position:absolute;  top:2px; right:10px;">\n            <h2 style="margin-left: 10px;">Email</h2>\n        </ion-item>\n        <ion-item>\n          <img src="assets/img/Notificaçao off.png" alt="" style="width:40px; transform: scaleX(-1); position:absolute;  top:2px; right:10px;">\n          <h2 style="margin-left: 10px;">SMS</h2>\n        </ion-item>\n        <ion-item>\n          <img src="assets/img/Notificaçao off.png" alt="" style="width:40px; transform: scaleX(-1);   position:absolute;  top:2px; right:10px;">\n            <h2 style="margin-left: 10px;">Whatsapp</h2>\n        </ion-item>\n      </ion-list>\n  </ion-content>\n  '/*ion-inline-end:"/home/willamis/workspace/TheDrinkerApp/src/pages/notificacao/notificacao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], NotificacaoPage);
    return NotificacaoPage;
}());

//# sourceMappingURL=notificacao.js.map

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
	"../pages/alterar-dados/alterar-dados.module": [
		480,
		10
	],
	"../pages/busca/busca.module": [
		481,
		9
	],
	"../pages/carrinho/carrinho.module": [
		482,
		8
	],
	"../pages/configuracao/configuracao.module": [
		483,
		7
	],
	"../pages/dados/dados.module": [
		484,
		6
	],
	"../pages/home/home.module": [
		485,
		5
	],
	"../pages/info-loja/info-loja.module": [
		486,
		4
	],
	"../pages/lista-produtos/lista-produtos.module": [
		487,
		3
	],
	"../pages/notificacao/notificacao.module": [
		488,
		2
	],
	"../pages/produto/produto.module": [
		489,
		1
	],
	"../pages/usuario/usuario.module": [
		490,
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

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(355);
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
            selector: 'page-login',template:/*ion-inline-start:"/home/willamis/workspace/TheDrinkerApp/src/pages/login/login.html"*/'<ion-content>\n  <img src="assets/img/logo.png" />\n  <ion-list class="list-form" padding>\n    <ion-item>\n      <ion-input type="text" placeholder="CPF"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input placeholder="Senha" type="password" [(ngModel)]="userInfo.password"></ion-input>\n    </ion-item>\n    <br>\n    <div text-center>\n      <button padding ion-button round color="primary"> ENTRAR</button>\n      <p ion-text>Esqueceu a senha?</p> \n    </div>\n  </ion-list>\n  <div text-center>\n    <p ion-text>Não tem cadastro?</p> \n    <button padding ion-button routerDirection="root" (click)="signup()"  round color="primary">CRIAR CADASTRO</button>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/willamis/workspace/TheDrinkerApp/src/pages/login/login.html"*/
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(354);
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

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlterarDadosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the AlterarDadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AlterarDadosPage = (function () {
    function AlterarDadosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AlterarDadosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AlterarDadosPage');
    };
    AlterarDadosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-alterar-dados',template:/*ion-inline-start:"/home/willamis/workspace/TheDrinkerApp/src/pages/alterar-dados/alterar-dados.html"*/'<ion-content>\n    <img src="assets/img/back.png" alt="" style="width:20px; top:10px; left:10px; position:absolute;">\n    <ion-title style="padding: 10px!important; margin-left:20px; font-size: 10pt;">Nome da Edição</ion-title>\n    <hr>\n    <br>\n    <ion-list>\n        <ion-item>\n            <ion-input placeholder="item a Editar"></ion-input>\n        </ion-item>\n        <button padding ion-button round style="background: #7ee19c; margin: 20px 100px;"> Salvar</button>\n      </ion-list>\n  </ion-content>\n  '/*ion-inline-end:"/home/willamis/workspace/TheDrinkerApp/src/pages/alterar-dados/alterar-dados.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AlterarDadosPage);
    return AlterarDadosPage;
}());

//# sourceMappingURL=alterar-dados.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuscaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the BuscaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BuscaPage = (function () {
    function BuscaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BuscaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BuscaPage');
    };
    BuscaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-busca',template:/*ion-inline-start:"/home/willamis/workspace/TheDrinkerApp/src/pages/busca/busca.html"*/'<ion-content>\n    <img src="assets/icon/back.png" style="width:35px; top:10px; left:10px; position:absolute;" alt="">\n    <ion-searchbar value="dd" style="width:260px; margin-left:50px;"></ion-searchbar>\n  <!-- <ion-item>\n    \n  </ion-item> -->\n  <ion-grid>\n      <ion-row>\n        <ion-col>\n            <img src="assets/img/drinker.jpg" alt="">\n        </ion-col>\n        <ion-col>\n            <img src="assets/img/drinker.jpg" alt="">\n        </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col>\n              <img src="assets/img/drinker.jpg" alt="">\n          </ion-col>\n          <ion-col>\n              <img src="assets/img/drinker.jpg" alt="">\n          </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <img src="assets/img/drinker.jpg" alt="">\n            </ion-col>\n            <ion-col>\n                <img src="assets/img/drinker.jpg" alt="">\n            </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col>\n                  <img src="assets/img/drinker.jpg" alt="">\n              </ion-col>\n              <ion-col>\n                  <img src="assets/img/drinker.jpg" alt="">\n              </ion-col>\n            </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/willamis/workspace/TheDrinkerApp/src/pages/busca/busca.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], BuscaPage);
    return BuscaPage;
}());

//# sourceMappingURL=busca.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarrinhoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the CarrinhoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CarrinhoPage = (function () {
    function CarrinhoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CarrinhoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CarrinhoPage');
    };
    CarrinhoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-carrinho',template:/*ion-inline-start:"/home/willamis/workspace/TheDrinkerApp/src/pages/carrinho/carrinho.html"*/'\n<ion-content>\n    <ion-item style="background-color:#7de09d;">\n        <img src="assets/icon/back2.png" alt="" style="width:25px; top:25px; position:absolute;">\n        <img src="assets/img/entrega3.png" alt="" style="width:40px; top:18px; left:50px; position:absolute;">\n        <p style="padding: 10px!important; margin-left:80px; font-size: 17pt; color:#fff;">Rua Tal, 01</p>\n    </ion-item>\n    <ion-item>\n      <h1>Nome do Comercio</h1>\n      <div style="margin-top:10px;">\n        <img src="assets/img/tempo.png" alt="" style="width:25px; top: 45px; position: absolute;">\n        <p style="margin-left: 30px;"> 2 a 5 min </p>\n      </div>\n    </ion-item>\n    <ion-item>\n    <h2>1x Nome do produto</h2>\n    <h2 style="position: absolute; right: 50px; top:12px;">R$ 0,00</h2>\n    <img src="assets/img/editar2.png" alt="" style="width:26px; position: absolute; right: 16px; top:10px;">\n    </ion-item>\n    <ion-row>\n      <h4 style="margin-left: 10px;">Subtotal</h4>\n      <h4 style="position: absolute; right: 20px;">R$ 0,00</h4>\n    </ion-row>\n    <ion-row>\n      <h4 style="margin-left: 10px;">Taxa de Entrega</h4>\n      <h4 style="position: absolute; right: 20px;">R$ 0,00</h4>\n    </ion-row>\n    <ion-row>\n        <h4 style="margin-left: 10px;">Total</h4>\n        <h4 style="position: absolute; right: 20px;">R$ 0,00</h4>\n      </ion-row>\n        <button padding ion-button block round color="primary" style="padding: 20px; display: block; margin:280px auto; width:90%;">Escolher Forma de Pagamento</button>\n</ion-content>\n'/*ion-inline-end:"/home/willamis/workspace/TheDrinkerApp/src/pages/carrinho/carrinho.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CarrinhoPage);
    return CarrinhoPage;
}());

//# sourceMappingURL=carrinho.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfiguracaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the ConfiguracaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConfiguracaoPage = (function () {
    function ConfiguracaoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ConfiguracaoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfiguracaoPage');
    };
    ConfiguracaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-configuracao',template:/*ion-inline-start:"/home/willamis/workspace/TheDrinkerApp/src/pages/configuracao/configuracao.html"*/'<ion-content>\n  <img src="assets/img/back.png" alt="" style="width:20px; top:10px; left:10px; position:absolute;">\n  <ion-title style="padding: 10px!important; margin-left:20px; font-size: 10pt;">Configurações</ion-title>\n  <hr>\n  <br>\n  <ion-list>\n      <ion-item>\n        <img src="assets/icon/back.png" alt="" style="width:20px; transform: scaleX(-1); position:absolute; right:10px;">\n        <h3 style="margin-left: 10px;">Editar dados</h3>\n      </ion-item>\n      <ion-item>\n        <img src="assets/icon/back.png" alt="" style="width:20px; transform: scaleX(-1); position:absolute; right:10px;">\n          <h3 style="margin-left: 10px;">Notificações</h3>\n      </ion-item>\n      <ion-item>\n        <img src="assets/icon/back.png" alt="" style="width:20px; transform: scaleX(-1); position:absolute; right:10px;">\n        <h3 style="margin-left: 10px;">Limpar histórico de busca</h3>\n      </ion-item>\n      <ion-item>\n        <img src="assets/icon/back.png" alt="" style="width:20px; transform: scaleX(-1);   position:absolute; right:10px;">\n          <h3 style="margin-left: 10px;">Sair</h3>\n      </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/willamis/workspace/TheDrinkerApp/src/pages/configuracao/configuracao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ConfiguracaoPage);
    return ConfiguracaoPage;
}());

//# sourceMappingURL=configuracao.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DadosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the DadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DadosPage = (function () {
    function DadosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DadosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DadosPage');
    };
    DadosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-dados',template:/*ion-inline-start:"/home/willamis/workspace/TheDrinkerApp/src/pages/dados/dados.html"*/'<ion-content>\n  <img src="assets/img/back.png" alt="" style="width:20px; top:10px; left:10px; position:absolute;">\n  <ion-title style="padding: 10px!important; margin-left:20px; font-size: 10pt;">Editar dados</ion-title>\n  <hr>\n  <br>\n  <ion-list>\n        <ion-item>\n          <h3 style="margin-left: 10px;">Nome Completo</h3>\n        </ion-item>\n        <ion-item>\n            <h3 style="margin-left: 10px;">CPF</h3>\n          </ion-item>\n      <ion-item>\n        <img src="assets/icon/back.png" alt="" style="width:20px; transform: scaleX(-1); position:absolute; right:10px;">\n        <h3 style="margin-left: 10px;">Telefone</h3>\n      </ion-item>\n      <ion-item>\n        <img src="assets/icon/back.png" alt="" style="width:20px; transform: scaleX(-1); position:absolute; right:10px;">\n          <h3 style="margin-left: 10px;">E-mail</h3>\n      </ion-item>\n      <ion-item>\n        <img src="assets/icon/back.png" alt="" style="width:20px; transform: scaleX(-1); position:absolute; right:10px;">\n        <h3 style="margin-left: 10px;">Senha</h3>\n      </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/willamis/workspace/TheDrinkerApp/src/pages/dados/dados.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], DadosPage);
    return DadosPage;
}());

//# sourceMappingURL=dados.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
            selector: 'page-home',template:/*ion-inline-start:"/home/willamis/workspace/TheDrinkerApp/src/pages/home/home.html"*/'<ion-content>\n    <img src="assets/img/user.png" style="width:35px; top:10px; left:10px; position:absolute;" alt="">\n    <ion-searchbar style="width:260px; margin-left:50px;"></ion-searchbar>\n  <ion-item detail>\n    <ion-label>\n      <img src="assets/img/entrega2.png" style="width:30px; position:absolute;" alt="">\n      <p style="margin-left:40px; margin-top:8px;"> Rua Tal, 01 </p>\n    </ion-label>\n  </ion-item>\n  <!-- <ion-item>\n    \n  </ion-item> -->\n  <ion-grid>\n      <ion-row>\n        <ion-col>\n            <img src="assets/img/drinker.jpg" alt="">\n            <p style="position: absolute; top:88px;">Titulo da propaganda</p>\n            <p style="font-size: 9pt;"> descrição propaganda</p>\n        </ion-col>\n        <ion-col>\n            <img src="assets/img/drinker.jpg" alt="">\n            <p style="position: absolute; top:88px;">Titulo da propaganda</p>\n            <p style="font-size: 9pt;"> descrição propaganda</p>\n        </ion-col>\n      </ion-row>\n      <ion-list>\n          <hr>\n          <ion-item>  <img src="assets/img/loja.png" alt="" style="width:25px; position:absolute;"> <p style="margin-left:30px; margin-top:5px; font-weight: bold;">Comércios</p></ion-item>\n          <ion-item>\n              <img src="assets/img/user.png" alt="" style="width:30px; position:absolute;">\n                <p style="margin-left:35px;">Nome </p>\n              <ion-row>\n                  <img src="assets/img/local.png" style="width:10px; left:50px; position:absolute;" alt="">\n                <p style="margin-left:45px; font-size:8pt;">10k</p>\n                <img src="assets/img/entrega2.png" style="width:12px; left:90px; position:absolute;" alt="">\n                <p style="margin-left:28px; font-size:8pt;">R$ 00,00</p>\n                <img src="assets/img/tempo.png" style="width:12px; left:156px; position:absolute;" alt="">\n                <p style="margin-left:22px; font-size:8pt;">2 a 5 min </p>\n                <img src="assets/img/platina.png" style="width:12px; top:24px; right:35px; position:absolute;" alt="">\n                <h3 style="position: absolute; top:20px; right:10px; color: #668292;">0.0</h3>\n              </ion-row>\n          </ion-item>\n          <ion-item>\n              <img src="assets/img/user.png" alt="" style="width:30px; position:absolute;">\n                <p style="margin-left:35px;">Nome </p>\n              <ion-row>\n                  <img src="assets/img/local.png" style="width:10px; left:50px; position:absolute;" alt="">\n                <p style="margin-left:45px; font-size:8pt;">10k</p>\n                <img src="assets/img/entrega2.png" style="width:12px; left:90px; position:absolute;" alt="">\n                <p style="margin-left:28px; font-size:8px">R$ 00,00</p>\n                <img src="assets/img/tempo.png" style="width:12px; left:156px; position:absolute;" alt="">\n                <p style="margin-left:22px; font-size:8pt;">2 a 5 min </p>\n                <img src="assets/img/platina.png" style="width:12px; top:24px; right:35px; position:absolute;" alt="">\n                <h3 style="position: absolute; top:20px; right:10px; color: #668292;">0.0</h3>\n              </ion-row>\n          </ion-item>\n        </ion-list>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/willamis/workspace/TheDrinkerApp/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoLojaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the InfoLojaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InfoLojaPage = (function () {
    function InfoLojaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InfoLojaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InfoLojaPage');
    };
    InfoLojaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-info-loja',template:/*ion-inline-start:"/home/willamis/workspace/TheDrinkerApp/src/pages/info-loja/info-loja.html"*/'<ion-content>\n    <!-- Default Item -->\n    <img src="assets/icon/back.png" style="width:35px; top:10px; left:10px; position:absolute;" alt="">\n    <img src="assets/img/user.png" style="width:38px; top:10px; left:140px; position:absolute;" alt="">\n<ion-item style="margin-top: 50px;">\n    <ion-label>\n      <img src="assets/img/estrela.png" alt="" style="width: 15px; position:absolute; left:258px;">\n        <p style="position: absolute; left:280px; color: #f9d33f;">0.00</p>\n      <h2> Nome </h2>\n      <p style="font-size: 8pt; margin-top:8px;">Descrição</p>\n    </ion-label>\n  </ion-item>\n  <ion-item>\n      <ion-label>\n        <h2> Horários de entrega</h2>\n        <ion-row>\n            <p style="font-size: 8pt; margin-top:8px;">Dia</p>\n            <p style="font-size: 8pt; margin-top:8px; margin-left:50px;">11:11 ás 12:12 - 20h ás 01:00</p>\n        </ion-row>\n       \n      </ion-label>\n    </ion-item>\n    <ion-item>\n        <ion-label style="height: 100px;">\n          <h2> Pagamentos na Entrega</h2>\n         \n        </ion-label>\n      </ion-item>\n      <ion-item>\n          <ion-label style="height: 100px;">\n            <h2> Pagamentos pelo App</h2>\n           \n          </ion-label>\n        </ion-item>\n</ion-content>\n'/*ion-inline-end:"/home/willamis/workspace/TheDrinkerApp/src/pages/info-loja/info-loja.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], InfoLojaPage);
    return InfoLojaPage;
}());

//# sourceMappingURL=info-loja.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaProdutosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the ListaProdutosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListaProdutosPage = (function () {
    function ListaProdutosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ListaProdutosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListaProdutosPage');
    };
    ListaProdutosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-lista-produtos',template:/*ion-inline-start:"/home/willamis/workspace/TheDrinkerApp/src/pages/lista-produtos/lista-produtos.html"*/'<ion-content>\n  <!-- Default Item -->\n  <ion-item>\n      <img src="assets/icon/back.png" style="width:30px; top:15px; left:10px; position:absolute;" alt="">\n    <img src="assets/img/user.png" alt="" style="width:30px; position:absolute; right:10px;">\n      <p style="margin-left:35px;">Nome </p>\n    <ion-row>\n        <img src="assets/img/local.png" style="width:10px; margin-top:10px; left:50px; position:absolute;" alt="">\n      <p style="margin-left:45px; margin-top:10px; font-size:8pt;">10k</p>\n      <img src="assets/img/entrega2.png" style="width:12px; margin-top:10px; left:90px; position:absolute;" alt="">\n      <p style="margin-left:28px; margin-top:10px; font-size:8pt;">R$ 00,00</p>\n      <img src="assets/img/tempo.png" style="width:12px; margin-top:10px; left:156px; position:absolute;" alt="">\n      <p style="margin-left:22px; font-size:8pt; margin-top:10px;">2 a 5 min </p>\n      <img src="assets/img/estrela.png" style="width:12px;  top:10px; right:70px; position:absolute;" alt="">\n      <h3 style="position: absolute; top:6px; right:45px; color: #f9d33f;">0.0</h3>\n      <p style="font-size:10px; position: absolute; top:50px; right: 30px;">Ver Mais</p>\n      <img src="assets/icon/back.png" style="transform: scaleX(-1); width:10px; top:49px; right:18px; position:absolute;" alt="">\n    </ion-row>\n</ion-item>\n<ion-item>\n  Nome da Categoria\n  <hr>\n  <br>\n  <ion-row>\n      <p style="margin-left:10px; position: absolute; top:50px;">Nome </p>\n  </ion-row>\n  <ion-row style="height: 30px;">\n      <p style="margin-left:10px; position: absolute; top:75px; font-size: 8px;">\n        <span style="color:#7fe29b;">R$ </span> 00,00 </p>\n  </ion-row>\n      <img src="assets/img/user.png" alt="" style="width:30px; position:absolute; top:60px; right:10px;">\n \n</ion-item>\n</ion-content>\n'/*ion-inline-end:"/home/willamis/workspace/TheDrinkerApp/src/pages/lista-produtos/lista-produtos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ListaProdutosPage);
    return ListaProdutosPage;
}());

//# sourceMappingURL=lista-produtos.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the ProdutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProdutoPage = (function () {
    function ProdutoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProdutoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProdutoPage');
    };
    ProdutoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-produto',template:/*ion-inline-start:"/home/willamis/workspace/TheDrinkerApp/src/pages/produto/produto.html"*/'<ion-content>\n  <img src="assets/icon/back.png" alt="" style="width:20px; top:10px; position:absolute;">\n  <ion-title style="padding: 10px!important; margin-left:20px; font-size: 10pt;">Detalhes</ion-title>\n  <hr>\n  <br>\n  <ion-grid>\n    <ion-row>\n          <img src="assets/img/drinker.jpg" alt="">\n    </ion-row>\n          <h5>Nome do Produto</h5>\n          <p style="position: absolute; top:310px;">Descrição do produto</p>\n          <p><span style="color:#7ee19c;"> R$ </span> 00,00</p>\n    <ion-row style="margin-top: 50px;">\n      <button ion-button type="submit" style="background:#fff; color:#000; width: 120px;">\n        <img src="assets/img/mais.png" alt="" style="width: 10px; margin-right:10px;"> \n        1  <img src="assets/img/mais.png" alt="" style="width: 10px; margin-left:10px;">\n      </button>\n      <button ion-button type="submit" style="background:#7ee19c;">Adicionar R$ 10,00</button>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/willamis/workspace/TheDrinkerApp/src/pages/produto/produto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ProdutoPage);
    return ProdutoPage;
}());

//# sourceMappingURL=produto.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the UsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UsuarioPage = (function () {
    function UsuarioPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UsuarioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UsuarioPage');
    };
    UsuarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-usuario',template:/*ion-inline-start:"/home/willamis/workspace/TheDrinkerApp/src/pages/usuario/usuario.html"*/'<ion-content>\n    <img src="assets/icon/back.png" alt="" style="width:20px; top:10px; position:absolute;">\n    <ion-title style="padding: 10px!important; margin-left:20px; font-size: 10pt;">Nome do Usuário</ion-title>\n    <hr>\n    <br>\n    <ion-list>\n        <ion-item>\n          <img src="assets/img/config.png" alt="" style="width:20px; position:absolute;">\n          <h3 style="margin-left: 30px;">Configurações</h3>\n        </ion-item>\n        <ion-item>\n            <img src="assets/img/pedidos.png" alt="" style="width:20px; position:absolute;">\n            <h3 style="margin-left: 30px;">Pedidos</h3>\n        </ion-item>\n        <ion-item>\n            <img src="assets/img/carteira.png" alt="" style="width:20px; position:absolute;">\n          <h3 style="margin-left: 30px;">Formas de Pagamento</h3>\n        </ion-item>\n        <ion-item>\n            <img src="assets/img/cupons.png" alt="" style="width:20px; position:absolute;">\n            <h3 style="margin-left: 30px;">Cupons e Promoção</h3>\n        </ion-item>\n        <ion-item>\n            <img src="assets/img/avalie.png" alt="" style="width:20px; position:absolute;">\n            <h3 style="margin-left: 30px;">Avaliar o app</h3>\n        </ion-item>\n        <ion-item>\n            <img src="assets/img/ajuda.png" alt="" style="width:20px; position:absolute;">\n            <h3 style="margin-left: 30px;">Ajuda</h3>\n        </ion-item>\n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/willamis/workspace/TheDrinkerApp/src/pages/usuario/usuario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], UsuarioPage);
    return UsuarioPage;
}());

//# sourceMappingURL=usuario.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(387);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_moment__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_home_home__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_register_register__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_usuario_usuario__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_busca_busca__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_info_loja_info_loja__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_lista_produtos_lista_produtos__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_produto_produto__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_configuracao_configuracao__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_dados_dados__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_alterar_dados_alterar_dados__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_carrinho_carrinho__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_notificacao_notificacao__ = __webpack_require__(114);
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
                __WEBPACK_IMPORTED_MODULE_15__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_usuario_usuario__["a" /* UsuarioPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_busca_busca__["a" /* BuscaPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_info_loja_info_loja__["a" /* InfoLojaPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_lista_produtos_lista_produtos__["a" /* ListaProdutosPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_produto_produto__["a" /* ProdutoPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_configuracao_configuracao__["a" /* ConfiguracaoPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_dados_dados__["a" /* DadosPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_alterar_dados_alterar_dados__["a" /* AlterarDadosPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_carrinho_carrinho__["a" /* CarrinhoPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_notificacao_notificacao__["a" /* NotificacaoPage */]
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
                        { loadChildren: '../pages/alterar-dados/alterar-dados.module#AlterarDadosPageModule', name: 'AlterarDadosPage', segment: 'alterar-dados', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/busca/busca.module#BuscaPageModule', name: 'BuscaPage', segment: 'busca', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/carrinho/carrinho.module#CarrinhoPageModule', name: 'CarrinhoPage', segment: 'carrinho', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/configuracao/configuracao.module#ConfiguracaoPageModule', name: 'ConfiguracaoPage', segment: 'configuracao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dados/dados.module#DadosPageModule', name: 'DadosPage', segment: 'dados', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/info-loja/info-loja.module#InfoLojaPageModule', name: 'InfoLojaPage', segment: 'info-loja', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lista-produtos/lista-produtos.module#ListaProdutosPageModule', name: 'ListaProdutosPage', segment: 'lista-produtos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notificacao/notificacao.module#NotificacaoPageModule', name: 'NotificacaoPage', segment: 'notificacao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/produto/produto.module#ProdutoPageModule', name: 'ProdutoPage', segment: 'produto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/usuario/usuario.module#UsuarioPageModule', name: 'UsuarioPage', segment: 'usuario', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                // incorporar cada pagina aqui
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_usuario_usuario__["a" /* UsuarioPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_busca_busca__["a" /* BuscaPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_info_loja_info_loja__["a" /* InfoLojaPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_lista_produtos_lista_produtos__["a" /* ListaProdutosPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_produto_produto__["a" /* ProdutoPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_configuracao_configuracao__["a" /* ConfiguracaoPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_dados_dados__["a" /* DadosPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_alterar_dados_alterar_dados__["a" /* AlterarDadosPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_carrinho_carrinho__["a" /* CarrinhoPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_notificacao_notificacao__["a" /* NotificacaoPage */]
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

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_notificacao_notificacao__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth_auth__ = __webpack_require__(109);
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
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_notificacao_notificacao__["a" /* NotificacaoPage */]);
            // get user data
            afAuth.authState.subscribe(function (authData) {
                if (authData) {
                    //this.user = authService.getUserData();
                }
            });
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/willamis/workspace/TheDrinkerApp/src/app/app.html"*/'<ion-nav [root]="rootPage" #content></ion-nav>\n'/*ion-inline-end:"/home/willamis/workspace/TheDrinkerApp/src/app/app.html"*/,
            queries: {
                nav: new __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"]('content')
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth_auth__["a" /* AngularFireAuth */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 472:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 220,
	"./af.js": 220,
	"./ar": 221,
	"./ar-dz": 222,
	"./ar-dz.js": 222,
	"./ar-kw": 223,
	"./ar-kw.js": 223,
	"./ar-ly": 224,
	"./ar-ly.js": 224,
	"./ar-ma": 225,
	"./ar-ma.js": 225,
	"./ar-sa": 226,
	"./ar-sa.js": 226,
	"./ar-tn": 227,
	"./ar-tn.js": 227,
	"./ar.js": 221,
	"./az": 228,
	"./az.js": 228,
	"./be": 229,
	"./be.js": 229,
	"./bg": 230,
	"./bg.js": 230,
	"./bm": 231,
	"./bm.js": 231,
	"./bn": 232,
	"./bn.js": 232,
	"./bo": 233,
	"./bo.js": 233,
	"./br": 234,
	"./br.js": 234,
	"./bs": 235,
	"./bs.js": 235,
	"./ca": 236,
	"./ca.js": 236,
	"./cs": 237,
	"./cs.js": 237,
	"./cv": 238,
	"./cv.js": 238,
	"./cy": 239,
	"./cy.js": 239,
	"./da": 240,
	"./da.js": 240,
	"./de": 241,
	"./de-at": 242,
	"./de-at.js": 242,
	"./de-ch": 243,
	"./de-ch.js": 243,
	"./de.js": 241,
	"./dv": 244,
	"./dv.js": 244,
	"./el": 245,
	"./el.js": 245,
	"./en-au": 246,
	"./en-au.js": 246,
	"./en-ca": 247,
	"./en-ca.js": 247,
	"./en-gb": 248,
	"./en-gb.js": 248,
	"./en-ie": 249,
	"./en-ie.js": 249,
	"./en-il": 250,
	"./en-il.js": 250,
	"./en-nz": 251,
	"./en-nz.js": 251,
	"./eo": 252,
	"./eo.js": 252,
	"./es": 253,
	"./es-do": 254,
	"./es-do.js": 254,
	"./es-us": 255,
	"./es-us.js": 255,
	"./es.js": 253,
	"./et": 256,
	"./et.js": 256,
	"./eu": 257,
	"./eu.js": 257,
	"./fa": 258,
	"./fa.js": 258,
	"./fi": 259,
	"./fi.js": 259,
	"./fo": 260,
	"./fo.js": 260,
	"./fr": 261,
	"./fr-ca": 262,
	"./fr-ca.js": 262,
	"./fr-ch": 263,
	"./fr-ch.js": 263,
	"./fr.js": 261,
	"./fy": 264,
	"./fy.js": 264,
	"./gd": 265,
	"./gd.js": 265,
	"./gl": 266,
	"./gl.js": 266,
	"./gom-latn": 267,
	"./gom-latn.js": 267,
	"./gu": 268,
	"./gu.js": 268,
	"./he": 269,
	"./he.js": 269,
	"./hi": 270,
	"./hi.js": 270,
	"./hr": 271,
	"./hr.js": 271,
	"./hu": 272,
	"./hu.js": 272,
	"./hy-am": 273,
	"./hy-am.js": 273,
	"./id": 274,
	"./id.js": 274,
	"./is": 275,
	"./is.js": 275,
	"./it": 276,
	"./it.js": 276,
	"./ja": 277,
	"./ja.js": 277,
	"./jv": 278,
	"./jv.js": 278,
	"./ka": 279,
	"./ka.js": 279,
	"./kk": 280,
	"./kk.js": 280,
	"./km": 281,
	"./km.js": 281,
	"./kn": 282,
	"./kn.js": 282,
	"./ko": 283,
	"./ko.js": 283,
	"./ky": 284,
	"./ky.js": 284,
	"./lb": 285,
	"./lb.js": 285,
	"./lo": 286,
	"./lo.js": 286,
	"./lt": 287,
	"./lt.js": 287,
	"./lv": 288,
	"./lv.js": 288,
	"./me": 289,
	"./me.js": 289,
	"./mi": 290,
	"./mi.js": 290,
	"./mk": 291,
	"./mk.js": 291,
	"./ml": 292,
	"./ml.js": 292,
	"./mn": 293,
	"./mn.js": 293,
	"./mr": 294,
	"./mr.js": 294,
	"./ms": 295,
	"./ms-my": 296,
	"./ms-my.js": 296,
	"./ms.js": 295,
	"./mt": 297,
	"./mt.js": 297,
	"./my": 298,
	"./my.js": 298,
	"./nb": 299,
	"./nb.js": 299,
	"./ne": 300,
	"./ne.js": 300,
	"./nl": 301,
	"./nl-be": 302,
	"./nl-be.js": 302,
	"./nl.js": 301,
	"./nn": 303,
	"./nn.js": 303,
	"./pa-in": 304,
	"./pa-in.js": 304,
	"./pl": 305,
	"./pl.js": 305,
	"./pt": 306,
	"./pt-br": 307,
	"./pt-br.js": 307,
	"./pt.js": 306,
	"./ro": 308,
	"./ro.js": 308,
	"./ru": 309,
	"./ru.js": 309,
	"./sd": 310,
	"./sd.js": 310,
	"./se": 311,
	"./se.js": 311,
	"./si": 312,
	"./si.js": 312,
	"./sk": 313,
	"./sk.js": 313,
	"./sl": 314,
	"./sl.js": 314,
	"./sq": 315,
	"./sq.js": 315,
	"./sr": 316,
	"./sr-cyrl": 317,
	"./sr-cyrl.js": 317,
	"./sr.js": 316,
	"./ss": 318,
	"./ss.js": 318,
	"./sv": 319,
	"./sv.js": 319,
	"./sw": 320,
	"./sw.js": 320,
	"./ta": 321,
	"./ta.js": 321,
	"./te": 322,
	"./te.js": 322,
	"./tet": 323,
	"./tet.js": 323,
	"./tg": 324,
	"./tg.js": 324,
	"./th": 325,
	"./th.js": 325,
	"./tl-ph": 326,
	"./tl-ph.js": 326,
	"./tlh": 327,
	"./tlh.js": 327,
	"./tr": 328,
	"./tr.js": 328,
	"./tzl": 329,
	"./tzl.js": 329,
	"./tzm": 330,
	"./tzm-latn": 331,
	"./tzm-latn.js": 331,
	"./tzm.js": 330,
	"./ug-cn": 332,
	"./ug-cn.js": 332,
	"./uk": 333,
	"./uk.js": 333,
	"./ur": 334,
	"./ur.js": 334,
	"./uz": 335,
	"./uz-latn": 336,
	"./uz-latn.js": 336,
	"./uz.js": 335,
	"./vi": 337,
	"./vi.js": 337,
	"./x-pseudo": 338,
	"./x-pseudo.js": 338,
	"./yo": 339,
	"./yo.js": 339,
	"./zh-cn": 340,
	"./zh-cn.js": 340,
	"./zh-hk": 341,
	"./zh-hk.js": 341,
	"./zh-tw": 342,
	"./zh-tw.js": 342
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
webpackContext.id = 472;

/***/ })

},[366]);
//# sourceMappingURL=main.js.map