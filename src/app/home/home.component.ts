import { Component, OnInit } from '@angular/core';
import { dbhome } from './dbhome'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  y;
  constructor(dd:dbhome) {
    this.y = dd.getdb();
   }

  ngOnInit() {
  }

}
