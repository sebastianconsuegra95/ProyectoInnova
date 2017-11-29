import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuPage } from "../pages/menu/menu";
import { Menu } from 'ionic-angular/components/menu/menu';
import { ProyectosPage } from "../pages/proyectos/proyectos";
import { ProyectodetallePage } from "../pages/proyectodetalle/proyectodetalle";
import { ComentariosquejasPage } from "../pages/comentariosquejas/comentariosquejas";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    ProyectosPage,
    ProyectodetallePage,
    ComentariosquejasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, 
    MenuPage,
    ProyectosPage,
    ProyectodetallePage,
    ComentariosquejasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
