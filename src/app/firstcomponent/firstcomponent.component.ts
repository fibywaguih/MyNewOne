import { Component } from '@angular/core';
import { db } from './dbfirst';
import { Routes } from '@angular/router';
import { BeefComponent } from '../beef/beef.component';
import { ChickenComponent } from '../chicken/chicken.component';
import { DessertComponent } from '../dessert/dessert.component';
import { JuiceComponent } from '../juice/juice.component';
@Component({
  selector: 'first',
  templateUrl: './firstcomponent.component.html',
  styleUrls: ['./firstcomponent.component.css']
})
export class FirstcomponentComponent{


  ngOnInit() {
  }

}
