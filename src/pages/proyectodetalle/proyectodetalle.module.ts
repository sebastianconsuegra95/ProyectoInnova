import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProyectodetallePage } from './proyectodetalle';

@NgModule({
  declarations: [
    ProyectodetallePage,
  ],
  imports: [
    IonicPageModule.forChild(ProyectodetallePage),
  ],
})
export class ProyectodetallePageModule {}
