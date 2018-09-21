import { Component } from '@angular/core';
import { NavController ,Platform, NavParams} from 'ionic-angular';
import { Network } from '@ionic-native/network';
import { NetworkProvider } from '../../providers/network/network';

//imports
import {FormBuilder,FormGroup,Validators }from '@angular/forms';
import * as firebase from 'firebase';
import{firebaseConfig} from '../../app/app.module';

import{AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument} from'angularfire2/firestore';
import { ErrorHandler } from '@angular/core/src/error_handler';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements ErrorHandler{
  questionAnswers:FormGroup;
  public db = firebase.firestore();
  public errors=[];
  


  constructor(public navCtrl: NavController, private afs:AngularFirestore,public navParams:NavParams,public formBuilder:FormBuilder,private network:NetworkProvider) {
    this.db.collection('posts');
    this.questionAnswers=this.formBuilder.group({
      conflictName:['',Validators.required],
      firstAnswer:['',Validators.required],
      secondAnswer:['',Validators.required],
      thirdAnswer:['',Validators.required],
      fourthAnswer:['',Validators.required]

    });
    
  }
//
  ionViewWillEnter(){
    this.network.getNetworkConnection();
  }
  handleError(error){
    console.log(error);
  }
  //
  //
  onSumbit(){
    //console.log(this.questionAnswers.value.conflictName);
    if(this.questionAnswers.value.conflictName == ''){
      this.errors.push('You must enter a conflict name');
    }
    if(this.questionAnswers.value.firstAnswer == ''){
      this.errors.push('You must add an action')
    }
    if(this.questionAnswers.value.secondAnswer == ''){
      this.errors.push('You must add an behavior');
    }
    if(this.questionAnswers.value.thirdAnswer == ''){
      this.errors.push('You must add consequences');
    }
    
    else{
      this.db.collection('posts').doc(this.questionAnswers.value.conflictName).set({
        conflict:this.questionAnswers.value.conflictName,
        first:this.questionAnswers.value.firstAnswer,
        second:this.questionAnswers.value.secondAnswer,
        third:this.questionAnswers.value.thirdAnswer,
        
      });
      console.log('The form went to the database');
      this.errors.push('Form was sumbited');
      this.questionAnswers.reset();
    }
    
  }
}
