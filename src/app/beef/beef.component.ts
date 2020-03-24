import { Component, OnInit } from '@angular/core';
import {trigger, transition, query, stagger, animate, style, animateChild} from '@angular/animations';
@Component({
  selector: 'app-beef',
  templateUrl: './beef.component.html',
  styleUrls: ['./beef.component.css'],
  animations:[
    trigger('fade',[
      transition('void => *',[
        style({transform:'translateX(-100%)',opacity:0.6}),
        animate(500)
    ])
  ])
  ]
})
export class BeefComponent implements OnInit {
  x : any[] = [
    {type : 'beefrachy' , image: 'assets/beefmenu/beef1.jpg' , salary : "44$",component:"beef+barbecue sause+onion sause+tomato+catchub sause+cucumber"},
    {type : 'beefturkish' , image: 'assets/beefmenu/beef2.jpg' , salary : "46$",component:"beef+barbecue sause+onion sause+tomato+catchub sause+cucumber"},
    {type : 'beefhanabillo' , image: 'assets/beefmenu/beef3.jpg' , salary : "54$",component:"beef+barbecue sause+onion sause + tomato + ranch sause+cucumber"},
    {type : 'beefrap' , image: 'assets/beefmenu/beef4.jpg' , salary : "37$",component:"beef+barbecue sause+mexico sause + tomato + catchub sause+cucumber"},
    {type : 'beefkrac' , image: 'assets/beefmenu/beef5.jpg' , salary : "39$",component:"beef+barbecue sause+onion sause + tomato + catchub sause+cucumber"},
    {type : 'beeftower' , image: 'assets/beefmenu/beef6.jpeg' , salary : "41$",component:"beef+barbecue sause+onion sause + tomato + catchub sause+cucumber"},
    {type : 'beefmexician' , image: 'assets/beefmenu/beef7.jpg' , salary : "52$",component:"beef+barbecue sause+onion sause + tomato + catchub sause+cucumber"},
    {type : 'beefhunyyomy' , image: 'assets/beefmenu/beef8.jpg' , salary : "63$",component:"beef+barbecue sause+onion sause + tomato + catchub sause+cucumber"},
    {type : 'beefsuper' , image: 'assets/beefmenu/beef9.jpg' , salary : "50$",component:"beef+barbecue sause+onion sause + tomato + catchub sause+cucumber"},
    {type : 'bigbeef' , image: 'assets/beefmenu/beef10.jpeg' , salary : "43$",component:"beef+barbecue sause+onion sause + tomato + catchub sause+cucumber"},
  ]
  ngOnInit() {
  }

}
