import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  constructor() { }

  firstname="enter your firstname";
  get1(first2){
    this.firstname = first2;
    if(this.firstname == ""){
      this.firstname="enter your firstname";
    }
  }

  lastname="enter your lastname";
  get2(last2){
    this.lastname = last2;
    if(this.lastname == ""){
      this.lastname = "enter your lastname";
    }
  }

  email = "enter your email";
  get3(email2){
    this.email = email2;
    if(this.email == ""){
      this.email = "enter your email";
    }
  }

  city = "enter your city";
  get4(city2){
    this.city = city2;
    if(this.city == ""){
      this.city = "enter your city";
    }
  }

  state="enter your state";
  get5(state2){
    this.state = state2;
    if(this.state == ""){
      this.state = "enter your state";
    }
  }

  zip="enter your zip";
  get6(zip2){
    this.zip = zip2;
    if(this.zip == ""){
      this.zip = "enter your zip";
    }
  }

  ngOnInit() {
  }

}
