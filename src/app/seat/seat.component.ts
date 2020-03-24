import { Component, OnInit } from '@angular/core';
import {trigger, transition, query, stagger, animate, style, animateChild} from '@angular/animations';
@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.css'],
  animations:[
    trigger('fade',[
      transition('void => *',[
        style({opacity:0.2}),
        animate(500)
    ])
  ])
  ]
})
export class SeatComponent implements OnInit {

  constructor() { }

  x : number[] = [1];
  book(){
  for(var i=2 ; i<60 ; i++){
    this.x[i-1] = i;
  }
}

  ngOnInit() {
  }

  z="name";
  get1(first){
    this.z=first;
    if (this.z == ""){
      this.z="name";
    }
  }

}
