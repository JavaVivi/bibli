import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const config = {
      apiKey: "AIzaSyBAi2oLjlYmQuX_h2zkuNBxiU9pF1GCkz0",
      authDomain: "library-866c0.firebaseapp.com",
      databaseURL: "https://library-866c0.firebaseio.com",
      projectId: "library-866c0",
      storageBucket: "library-866c0.appspot.com",
      messagingSenderId: "308929490085",
      appId: "1:308929490085:web:b3e73b2fba66d4f9e2f14c"
    };
    firebase.initializeApp(config);
  }
}
