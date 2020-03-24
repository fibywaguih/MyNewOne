import { Component, OnInit } from '@angular/core';
import {trigger, transition, query, stagger, animate, style, animateChild} from '@angular/animations';
@Component({
  selector: 'app-juice',
  templateUrl: './juice.component.html',
  styleUrls: ['./juice.component.css'],
  animations:[
    trigger('fade',[
      transition('void => *',[
        style({transform:'translateX(-100%)',opacity:0.6}),
        animate(500)
    ])
  ])
  ]
})
export class JuiceComponent implements OnInit {

  x : any[] = [
    {type : 'mango' , image: 'assets/juicemenu/ju1.jpg' , salary : "12$"},
    {type : 'banana' , image: 'assets/juicemenu/ju2.jpg' , salary : "10$"},
    {type : 'watermelon' , image: 'assets/juicemenu/ju3.png' , salary : "14$"},
    {type : 'cantalope' , image: 'assets/juicemenu/ju4.jpg' , salary : "13$"},
    {type : 'chocolate' , image: 'assets/juicemenu/ju5.jpg' , salary : "18$"},
    {type : 'strawberry' , image: 'assets/juicemenu/ju6.jpg' , salary : "17$"},
    {type : 'orange' , image: 'assets/juicemenu/ju7.jpg' , salary : "8$"},
  ]

  constructor() { }

  ngOnInit() {
  }

}
