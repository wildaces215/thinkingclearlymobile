import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network';
import { NavController, NavParams, Events } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import *  as firebase from'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument } from'angularfire2/firestore';
import { ViewPage } from '../../pages/view/view';
/*
  Generated class for the NetworkProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
interface Posts{
    name:string,
    secondAnswer:undefined,
    thirdAnswer:undefined,
}

@Injectable()
export class NetworkProvider {
  

  public networkConnection;
  public collectionReference:any;
  public db=firebase.firestore();
  public data = {} as Posts;
  public firstGet=[];
  public dataCalled;
  public something=[];

  constructor(public event:Events,public http:HttpClient,private network:Network ,private afs:AngularFirestore) {
    this.db.collection('posts');
    console.log('Hello NetworkProvider Provider');
    
  }
  
  getNetworkConnection(){
    console.log(this.network.type);
  }
  getCollectionDatabase(){
  this.collectionReference=this.db.collection('posts');
    this.collectionReference.get()
    .then(snapshot =>{
      snapshot.forEach(doc => {
       
        this.something.push(doc.id);
      });
    })
    .catch(err =>{
      console.log(err);
    });
    return this.something;
  }
  getSingleDatabase(){
    this.collectionReference=this.db.collection('posts');
    this.collectionReference.get()
    .then(snapshot =>{
      snapshot.forEach(doc => {
       
        this.firstGet.push(doc.data());
      });
    })
    .catch(err =>{
      console.log(err);
    });
    return this.firstGet;
    
  }

}
