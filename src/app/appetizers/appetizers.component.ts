import { Component, OnInit } from '@angular/core';
import {trigger, transition, query, stagger, animate, style, animateChild} from '@angular/animations';
@Component({
  selector: 'app-appetizers',
  templateUrl: './appetizers.component.html',
  styleUrls: ['./appetizers.component.css'],
  animations:[
    trigger('fade',[
      transition('void => *',[
        style({transform:'translateX(-100%)',opacity:0.6}),
        animate(500)
    ])
  ])
  ]
})
export class AppetizersComponent implements OnInit {

  x : any[] = [
    {type : 'onion rings' , image: 'assets/appetizers/ap1.jpg' , salary : "18$"},
    {type : 'mozarella sticks' , image: 'assets/appetizers/ap2.jpg' , salary : "29$"},
    {type : 'chessy fries' , image: 'assets/appetizers/ap3.jpg' , salary : "24$"},
    {type : 'chicken fries' , image: 'assets/appetizers/ap4.jpg' , salary : "32$"},
    {type : 'chicken wings' , image: 'assets/appetizers/ap5.jpeg' , salary : "34$"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
