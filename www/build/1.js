webpackJsonp([1],{

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JugarPageModule", function() { return JugarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jugar__ = __webpack_require__(452);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var JugarPageModule = (function () {
    function JugarPageModule() {
    }
    JugarPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__jugar__["a" /* JugarPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__jugar__["a" /* JugarPage */]),
            ],
        })
    ], JugarPageModule);
    return JugarPageModule;
}());

//# sourceMappingURL=jugar.module.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JugarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(133);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JugarPage = (function () {
    function JugarPage(navCtrl, navParams, servicio, afAuth, database) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.servicio = servicio;
        this.afAuth = afAuth;
        this.database = database;
        this.shoppingItem = {};
        this.shoppingItemRef = this.database.list('shopping-list');
    }
    JugarPage.prototype.ionViewDidLoad = function () {
        if (this.afAuth.authState) {
            this.algo = this.shoppingItemRef.valueChanges();
        }
    };
    JugarPage.prototype.login = function () {
        this.servicio.login();
    };
    JugarPage.prototype.logout = function () {
        this.servicio.logout();
    };
    //  this.shoppingItemRef.update(this.afAuth.auth.currentUser.uid, { opcion: item });
    JugarPage.prototype.opcion = function (item) {
        if (this.afAuth.authState) {
            this.shoppingItemRef.update(this.afAuth.auth.currentUser.uid, { opcion: item });
        }
    };
    JugarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jugar',template:/*ion-inline-start:"C:\xampp\htdocs\ppt\src\pages\jugar\jugar.html"*/`<!--\n\n  Generated template for the JugarPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>jugar</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div *ngIf="afAuth.authState | async; let user;">\n\n    <h1>Hello {{ afAuth.auth.currentUser.displayName }}!</h1>\n\n    <button (click)="logout()">Logout</button>\n\n    <button (click)="opcion(1)">piedra</button>\n\n    <button (click)="opcion(2)">papel</button>\n\n    <button (click)="opcion(3)">tijera</button>\n\n  </div>\n\n  <div #showLogin>\n\n    <p>Please login.</p>\n\n    <button (click)="login()">Login with Google</button>\n\n  </div>\n\n\n\n  <ion-list>\n\n    <ion-item *ngFor="let item of algo | async">\n\n      <h2>Producto: {{item.opcion}}</h2>\n\n      \n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\xampp\htdocs\ppt\src\pages\jugar\jugar.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _e || Object])
    ], JugarPage);
    return JugarPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=jugar.js.map

/***/ })

});
//# sourceMappingURL=1.js.map