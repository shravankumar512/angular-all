import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html'
})

export class CalculatorComponent {
  //string reverse..
  title = 'shravan' ;
  
  reverse(){
    this.title = this.title.split("").reverse().join("");
  }

  //arithmetic operations..
  result=0;
  p1:number;
  p2:number;

  changeNumberOne(z,op){
    this.p1 = parseInt(z);
    console.log(z);
    this.changeEvent(op);
  }
  changeNumberTwo(z,op){
    this.p2 = parseInt(z);
    console.log(z);
    this.changeEvent(op);
  }


  changeEvent(op){
    switch(op){
      case 'add' : this.result = this.p1+this.p2;break;
      case 'sub' : this.result = this.p1-this.p2;break;
      case 'mul' : this.result = this.p1*this.p2;break;
      case 'div' : this.result = this.p1/this.p2;break;
    }
  }
}