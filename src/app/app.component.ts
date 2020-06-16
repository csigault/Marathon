import { Component, OnInit } from '@angular/core';
//import * as $ from 'jquery';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'marathon';

  public ngOnInit()
  {
    /*$(document).ready(function(){
        $("button").click(function(){
            var div = $("div");  
            div.animate({left: '100px'}, "slow");
            div.animate({fontSize: '5em'}, "slow");
        });
    });*/
  }
  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyDlqeyRt68umkLQvIos-WTUDjV3vy3sUMI",
      authDomain: "marathon-6b585.firebaseapp.com",
      databaseURL: "https://marathon-6b585.firebaseio.com",
      projectId: "marathon-6b585",
      storageBucket: "marathon-6b585.appspot.com",
      messagingSenderId: "126609129849",
      appId: "1:126609129849:web:c2327aa01fd841fd5f6fa8"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
  }
}
