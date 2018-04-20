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
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/mergeMap';
/**
 * Generated class for the SliderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export interface Post{
  name:string,
  firstAnswer:string,
  secondAnswer:string,
  thirdAnswer:string
}
@IonicPage()
@Component({
  selector: 'page-slider',
  templateUrl: 'slider.html',
})
export class SliderPage {

  public firstScreen;
  public secondScreen;
  public thirdScreen;

  public itemToSearch:string;
  public db=firebase.firestore();
  //public dataCalled:string;
  public getToScreen;
  objectThing={}as Post;
  dataToScreen:AngularFirestoreCollection<Post>=this.afs.collection('posts');
  //post$:Observable<Post>;
  public dataCalled:string;
  public dataSelected:any;
  public arrayToPresent=[];
  constructor(private afs:AngularFirestore,public events:Events,public navCtrl: NavController,public navParams:NavParams, public viewController:ViewController,public network:NetworkProvider) {
    
  
    
  }

  ionViewDidLoad() {
    
    this.dataSelected=this.navParams.get('first');
    
    console.log(typeof this.dataSelected);
    
    
    this.getToScreen=this.afs.collection('posts',ref => ref.where('conflict','==',this.dataSelected).limit(1))
    .valueChanges()
    .flatMap(result => result)
    .subscribe(
      v =>{
        let y=JSON.parse(JSON.stringify(v));
        this.dataToScreen=y.conflict;
        this.firstScreen=y.first;
        this.secondScreen=y.second;
        this.thirdScreen=y.third;
      }
      
    );
    
    
  }
 
  
 closeModal(){
   this.viewController.dismiss();
 }
}
