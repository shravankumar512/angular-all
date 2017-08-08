import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html'
})
export class ChildComponent implements OnInit {

  @Input() noObject;
  @Output() done : EventEmitter<string> = new EventEmitter<string>();

  a = [1,2,3,4,5,6,7,8,9,10];
  bool : boolean = false;

  constructor() { 

  }

  update(){
    this.bool = !(this.bool);
    this.done.emit("done");
  }
  
  ngOnInit() {
  }

}
