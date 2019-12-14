import { Component } from '@angular/core';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

import { GooglePlus} from '@ionic-native/google-plus/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	user: Observable<firebase.User>;
  constructor(private afAuth: AngularFireAuth,
  	private gplus:GooglePlus,
  	public platform: Platform) {
  	this.user = this.afAuth.authState;
  }

  	googleLogin() {
	  if (this.platform.is('cordova')) {
	    this.nativeGoogleLogin();
	  } else {
	    this.webGoogleLogin();
	  }
	}

  	async webGoogleLogin(): Promise<void> {
	  	try {
	  		const provider = new firebase.auth.GoogleAuthProvider();
	  		const credential = await this.afAuth.auth.signInWithPopup(provider);
	  	} catch(err) {
	  		console.log(err);
	  	}
  	}

	async nativeGoogleLogin(): Promise<any> {
	  	try {

	    const gplusUser = await this.gplus.login({
	      'webClientId': 'your-webClientId-XYZ.apps.googleusercontent.com',
	      'offline': true,
	      'scopes': 'profile email'
	    })

	    return await this.afAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken))

		  } catch(err) {
		    console.log(err)
		  }
	}

  singOut(){
  	console.log(this.user);
  	this.afAuth.auth.signOut();
  }

}
