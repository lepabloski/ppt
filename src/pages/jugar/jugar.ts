import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { AngularFireList, AngularFireObject, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { ServiceProvider } from '../../providers/service/service'
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/take';

@IonicPage()
@Component({
  selector: 'page-jugar',
  templateUrl: 'jugar.html',
})
export class JugarPage {

  negociosRef: AngularFireList<any>;
  usuariosRef: AngularFireObject<any>;
  negocios: Observable<any[]>;
  usuario: Observable<any[]>;
  usuarioPuntos: Observable<any[]>;
  public nuevoValor;
  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public database: AngularFireDatabase,
    public servicio: ServiceProvider, public afAuth: AngularFireAuth,
  ) {

    this.negociosRef = this.database.list('clicks/negocios');
    this.negocios = this.negociosRef.valueChanges();

  }

  createTask() {
    let newTaskModal = this.alertCtrl.create({
      title: 'New Task',
      message: "Enter a title for your new task",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.negociosRef.push({
              title: data.title,
              done: false
            });
          }
        }
      ]
    });
    newTaskModal.present(newTaskModal);
  }

  sumarPuntos() {
    if (this.afAuth.authState) {

      this.nuevoValor = 1;
      this.usuariosRef = this.database.object('clicks/usuarios/' + this.afAuth.auth.currentUser.uid);
      this.usuarioPuntos = this.usuariosRef.valueChanges();

      this.usuario = this.usuariosRef.valueChanges();
      this.usuario.take(1).subscribe(action => {
        if (action) {
          this.nuevoValor = action.puntos + 1;
          this.usuariosRef.update({ puntos: this.nuevoValor });
        }
      });
    }
  }

  // this.afAuth.auth.currentUser.uid
  login() {
    this.servicio.login();
  }

  logout() {
    this.servicio.logout();
  }
  removeTask(task) {
    console.log(task);
    this.negociosRef.remove(task.key);
  }
}