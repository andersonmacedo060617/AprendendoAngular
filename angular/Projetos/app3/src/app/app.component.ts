import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app3';

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyDVJsZYitvlf6AJtuRFyki0nkHU2hD2tPQ",
      authDomain: "jta-instagram-clone-ebae2.firebaseapp.com",
      databaseURL: "https://jta-instagram-clone-ebae2.firebaseio.com",
      projectId: "jta-instagram-clone-ebae2",
      storageBucket: "jta-instagram-clone-ebae2.appspot.com",
      messagingSenderId: "662231850204"
    })
    
  }
  


}
