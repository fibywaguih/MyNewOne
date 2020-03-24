import { Component, OnInit } from '@angular/core';
import {trigger, transition, query, stagger, animate, style, animateChild} from '@angular/animations';
@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.css'],
  animations:[
    trigger('fade',[
      transition('void => *',[
        style({transform:'translateX(-100%)',opacity:0.6}),
        animate(500)
    ])
  ])
  ]
})
export class ExtraComponent implements OnInit {

  x : any[] = [
    {type : 'coleslaw' , image: 'assets/extra/ex1.jpg' , salary : "10$"},
    {type : 'katchub sause' , image: 'assets/extra/ex2.jpg' , salary : "10$"},
    {type : 'chesse sause' , image: 'assets/extra/ex3.jpg' , salary : "10$"},
    {type : 'ranch sause' , image: 'assets/extra/ex4.jpg' , salary : "10$"},
    {type : 'barbecue sause' , image: 'assets/extra/ex5.jpg' , salary : "10$"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
