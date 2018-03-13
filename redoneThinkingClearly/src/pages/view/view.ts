import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import *  as firebase from'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule, AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { NetworkProvider } from '../../providers/network/network';
import { Observable } from '@firebase/util';
import { SliderPage } from '../slider/slider';

import { Events } from 'ionic-angular';
/**
 * Generated class for the ViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
interface Posts{
  name:String,
  firstAnswer:string,
  secondAnswer:string,
  thirdAnswer:string,
  foruthString:string
}
@IonicPage()
@Component({
  selector: 'page-view',
  templateUrl: 'view.html',
})
export class ViewPage {
  public dataPosts:any;

  public buttonSelected;

  constructor(public events:Events,public navCtrl: NavController,private afs:AngularFirestore,public modal:ModalController,public network:NetworkProvider) {
    this.dataPosts=this.network.getCollectionDatabase();
    //console.log(this.dataPosts);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPage');
    //this.dataPosts=this.network.getCollectionDatabase();
  }
  showPost(dataPost:string){
    //console.log(dataPost);

    this.buttonSelected=dataPost;
    console.log(typeof dataPost);
    //this.events.publish('userClicked',dataPost,this.buttonSelected);
    this.events.publish('userClickedName',dataPost);
    //this.navCtrl.push(SliderPage,{param1:this.buttonSelected});
    let pop=this.modal.create(SliderPage);
    pop.present();
  }
  

 
}
