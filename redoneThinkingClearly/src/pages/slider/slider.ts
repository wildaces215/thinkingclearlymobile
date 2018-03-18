import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { ViewPage } from '../view/view';
import{Events} from'ionic-angular';
import * as firebase from 'firebase';
import{firebaseConfig} from '../../app/app.module';
import{ AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument } from'angularfire2/firestore';
import { ErrorHandler } from '@angular/core/src/error_handler';
import { Network } from '@ionic-native/network';
import { NetworkProvider } from '../../providers/network/network';


/**
 * Generated class for the SliderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slider',
  templateUrl: 'slider.html',
})
export class SliderPage {
  public itemToSearch:string;
  public db=firebase.firestore();
  public searchOne;
  public dataSelected:any;
  public arrayToPresent=[];
  constructor(public events:Events,public navCtrl: NavController, public viewController:ViewController,public network:NetworkProvider) {
    //this.itemToSearch=this.navParams.get('param1');
    this.network.getSingleDatabase();
    this.dataSelected = this.network.getSingleDatabase(); 

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Modal');
    console.log(this.searchOne);
    this.presentModalConflict();
  }
 
  presentModalConflict(){
    
    console.log(this.searchOne);
  }
 closeModal(){
   this.searchOne=[];
   this.viewController.dismiss();
 }
}
