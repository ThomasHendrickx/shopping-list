import { Injectable, OnDestroy } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable, Subscription } from "rxjs/Rx";

@Injectable()
export class AuthService implements OnDestroy {

  usersubscr: Subscription;
  private loggedin = false;

  constructor(public af: AngularFireAuth) {
    this.usersubscr = af.authState.subscribe((user: firebase.User) => {

    });

  }

  ngOnDestroy() {
    this.usersubscr.unsubscribe();
  }

  login(email: string, password: string) {
    return this.af.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    this.af.auth.signOut();
  }

}
