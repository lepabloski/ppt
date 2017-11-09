import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CargaDeUsuarioPage } from './carga-de-usuario';

@NgModule({
  declarations: [
    CargaDeUsuarioPage,
  ],
  imports: [
    IonicPageModule.forChild(CargaDeUsuarioPage),
  ],
})
export class CargaDeUsuarioPageModule {}
