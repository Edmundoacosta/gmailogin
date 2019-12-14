import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

const firebaseConfig = {
    apiKey: "AIzaSyDsDCh1_eqm2-zNzTL-4bSz-BiyUKShYU0",
    authDomain: "login-91954.firebaseapp.com",
    databaseURL: "https://login-91954.firebaseio.com",
    projectId: "login-91954",
    storageBucket: "login-91954.appspot.com",
    messagingSenderId: "6315715226",
    appId: "1:6315715226:web:24d79d92c1fa4b63d04d23"
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
	  BrowserModule,
	  IonicModule.forRoot(),
	  AppRoutingModule,
	  AngularFireModule.initializeApp(firebaseConfig), // <-- firebase here
      AngularFireAuthModule
	],
  providers: [
    StatusBar,
    SplashScreen,
    GooglePlus,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
