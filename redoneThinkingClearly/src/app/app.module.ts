import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavParams } from 'ionic-angular';

import {HttpClientModule, HttpClient} from '@angular/common/http';
import{ Network } from '@ionic-native/network';
//Pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SliderComponent } from '../components/slider/slider';
//firebase imports
import *  as firebase from'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NetworkProvider } from '../providers/network/network';
import { ViewPage } from '../pages/view/view';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ComponentsModule } from '../components/components.module';
import { SliderPage } from '../pages/slider/slider';

//Plugins
//firebase config would go here taken out for security purposes
export const firebaseConfig= {
  apiKey: "AIzaSyBnAtpWuFA-4z6zmkByQPHOTmVYrUnHik8",
  authDomain: "thinkingclearly-32938.firebaseapp.com",
  databaseURL: "https://thinkingclearly-32938.firebaseio.com",
  projectId: "thinkingclearly-32938",
  storageBucket: "thinkingclearly-32938.appspot.com",
  messagingSenderId: "816024632443"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ViewPage,
    SliderPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    HttpClientModule,
   
    
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ViewPage,
    SliderPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Network,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NetworkProvider,
   
  ]
})
export class AppModule {}
