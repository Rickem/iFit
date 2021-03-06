// Angular
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// Ionic
import {
  AlertController,
  IonicPage,
  Loading,
  LoadingController,
  NavController,
  NavParams
} from 'ionic-angular';

// Firebase
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@IonicPage({
  name: 'login'
})
@Component({
  templateUrl: 'login.html'
})
export class LoginPage {
  private _history: string;
  private _loader: Loading;
  public email: FormControl = new FormControl('', [Validators.required, Validators.email]);
  public loginForm: FormGroup;
  public password: FormControl = new FormControl('', Validators.required);
  constructor(
    private _afAuth: AngularFireAuth,
    private _alertCtrl: AlertController,
    private _loadCtrl: LoadingController,
    private _navCtrl: NavController,
    private _params: NavParams
  ) {
    this._history = this._params.get('history');
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password
    });
  }

  public forgotPassword(): void {
    this._navCtrl.setRoot('forgot-password', {
      history: this._history
    })
  }

  public login(): void {
    this._loader = this._loadCtrl.create({
      content: 'Please wait...',
      duration: 10000,
      spinner: 'crescent'
    });
    this._loader.present();
    this._afAuth.auth.signInWithEmailAndPassword(this.loginForm.get('email').value.trim(), this.loginForm.get('password').value.trim())
      .then((user: firebase.User) => {
        if (this._loader) {
          this._loader.dismiss();
          this._loader = null;
        }
        if (this._history) {
          this._navCtrl.setRoot(this._history);
        } else {
          this._navCtrl.setRoot('fitness');
        }
      }).catch((err: firebase.FirebaseError) => {
        if (this._loader) {
          this._loader.dismiss();
          this._loader = null;
        }
        this._alertCtrl.create({
          title: 'Uhh ohh...',
          subTitle: 'Something went wrong',
          message: err.message,
          buttons: ['OK']
        }).present();
      });
  }

  public register(): void {
    this._navCtrl.setRoot('registration', {
      history: this._history
    })
  }

  ionViewWillLeave(): void {
    if (this._loader) {
      this._loader.dismiss();
      this._loader = null;
    }
  }

}
