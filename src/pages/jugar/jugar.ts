import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service'
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase/app';

/**
 * Generated class for the JugarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export interface ShoppingItem {
  // $key?: string,
  opcion: string

}
@IonicPage()
@Component({
  selector: 'page-jugar',
  templateUrl: 'jugar.html',
})
export class JugarPage {
  shoppingItem = {} as ShoppingItem;
  shoppingItemRef: AngularFireList<ShoppingItem>;
  public algo;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public servicio: ServiceProvider, public afAuth: AngularFireAuth,
    private database: AngularFireDatabase) {
    this.shoppingItemRef = this.database.list('shopping-list');
  }

  ionViewDidLoad() {

     if (this.afAuth.authState) {
    this.algo = this.shoppingItemRef.valueChanges(); 
    }
  }

  login() {
    this.servicio.login();
  }

  logout() {
    this.servicio.logout();
  }
  //  this.shoppingItemRef.update(this.afAuth.auth.currentUser.uid, { opcion: item });
  opcion(item) {
    if (this.afAuth.authState) {
      this.shoppingItemRef.update(this.afAuth.auth.currentUser.uid, { opcion: item });
    }
  }
}
