import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListarUsuariosPage } from './listar-usuarios';

@NgModule({
  declarations: [
    ListarUsuariosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListarUsuariosPage),
  ],
})
export class ListarUsuariosPageModule {}
