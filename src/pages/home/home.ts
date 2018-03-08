import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuPage } from "../menu/menu";
import { ContenidoPage } from "../contenido/contenido";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // splash = true;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad(){
    // setTimeout(() => this.splash = false, 4000);
  }

  goPage(){
    this.navCtrl.push(ContenidoPage)
  }

}
