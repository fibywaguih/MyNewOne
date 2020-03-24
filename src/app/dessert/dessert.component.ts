import { Component, OnInit } from '@angular/core';
import {trigger, transition, query, stagger, animate, style, animateChild} from '@angular/animations';
@Component({
  selector: 'app-dessert',
  templateUrl: './dessert.component.html',
  styleUrls: ['./dessert.component.css'],
  animations:[
    trigger('fade',[
      transition('void => *',[
        style({transform:'translateX(-100%)',opacity:0.6}),
        animate(500)
    ])
  ])
  ]
})
export class DessertComponent implements OnInit {

  x : any[] = [
    {type : 'molten cake' , image: 'assets/dessertmenu/des1.jpg' , salary : "44$"},
    {type : 'wavel nutella' , image: 'assets/dessertmenu/des2.jpg' , salary : "46$"},
    {type : 'cheese cake' , image: 'assets/dessertmenu/des3.jpg' , salary : "54$"},
    {type : 'red filfet' , image: 'assets/dessertmenu/des4.jpg' , salary : "37$"},
    {type : 'black forest' , image: 'assets/dessertmenu/des5.jpg' , salary : "39$"},
    {type : 'choclate cake' , image:'assets/dessertmenu/des6.jpg' , salary : "41$"},
    {type : 'caramel cake' , image: 'assets/dessertmenu/des7.jpg' , salary : "52$"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
