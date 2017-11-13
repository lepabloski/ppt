import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
 

@Injectable()

export class ServiceProvider {
 
  constructor(
    public afAuth: AngularFireAuth,
    private database: AngularFireDatabase
  ) {
 
  }


  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(function (result) {      
      }).catch(function (error) {
        var errorMessage = error.message;
        alert('Error de autenticación: ' + errorMessage);
      });

  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
