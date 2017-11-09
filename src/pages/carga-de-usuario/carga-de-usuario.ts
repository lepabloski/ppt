import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CargaDeUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-carga-de-usuario',
  templateUrl: 'carga-de-usuario.html',
})
export class CargaDeUsuarioPage {
  nombreUsuario: string;
  constructor(private navCtrl: NavController, private navParams: NavParams) {
  }

  agregarylistar() {
    this.navCtrl.push('ListarUsuariosPage');
  }

}
