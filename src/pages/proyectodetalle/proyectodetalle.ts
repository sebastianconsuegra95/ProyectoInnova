import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ComentariosquejasPage } from "../comentariosquejas/comentariosquejas";

/**
 * Generated class for the ProyectodetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-proyectodetalle',
  templateUrl: 'proyectodetalle.html',
})
export class ProyectodetallePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProyectodetallePage');
  }
  goToComment() {
    this.navCtrl.push(ComentariosquejasPage)
  }
}
