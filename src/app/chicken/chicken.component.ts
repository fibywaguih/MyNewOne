import { Component, OnInit } from '@angular/core';
import {trigger, transition, query, stagger, animate, style, animateChild} from '@angular/animations';
@Component({
  selector: 'app-chicken',
  templateUrl: './chicken.component.html',
  styleUrls: ['./chicken.component.css'],
  animations:[
    trigger('fade',[
      transition('void => *',[
        style({transform:'translateX(-100%)',opacity:0.6}),
        animate(500)
    ])
  ])
  ]
})
export class ChickenComponent implements OnInit {

  x : any[] = [
    {type : 'chickenrachy' , image: 'assets/chickenmenu/chicken1.jpg' , salary : "44$", components:"chicken+barbecue sause+onion sause + tomato + catchub sause+cucumber"},
    {type : 'chickenturkish' , image: 'assets/chickenmenu/chicken2.jpg' , salary : "46$", components:"chicken+barbecue sause+onion sause + tomato + catchub sause+cucumber"},
    {type : 'chickenhanabillo' , image: 'assets/chickenmenu/chicken3.jpg' , salary : "54$", components:"chicken+barbecue sause+onion sause + tomato + catchub sause+cucumber"},
    {type : 'chickenrap' , image: 'assets/chickenmenu/chicken4.jpg' , salary : "37$", components:"chicken+barbecue sause+onion sause + tomato + catchub sause+cucumber"},
    {type : 'chickenkrac' , image: 'assets/chickenmenu/chicken5.jpg' , salary : "39$", components:"chicken+barbecue sause+onion sause + tomato + catchub sause+cucumber"},
    {type : 'chickenftower' , image: 'assets/chickenmenu/chicken6.jpg' , salary : "41$", components:"chicken+barbecue sause+onion sause + tomato + catchub sause+cucumber"},
    {type : 'chickenmexician' , image: 'assets/chickenmenu/chicken7.jpg' , salary : "52$", components:"chicken+barbecue sause+onion sause + tomato + catchub sause+cucumber"},
    {type : 'chickenhunyyomy' , image: 'assets/chickenmenu/chicken8.jpg' , salary : "63$", components:"chicken+barbecue sause+onion sause + tomato + catchub sause+cucumber"},
    {type : 'chickensuper' , image: 'assets/chickenmenu/chicken9.jpg' , salary : "50$", components:"chicken+barbecue sause+onion sause + tomato + catchub sause+cucumber"},
    {type : 'bigchicken' , image: 'assets/chickenmenu/chicken10.jpg' , salary : "43$", components:"chicken+barbecue sause+onion sause + tomato + catchub sause+cucumber"},
  ]

  constructor() { }

  ngOnInit() {
  }

}
