import { Component } from '@angular/core';

@Component({
    selector:'app-parent',
    templateUrl:'./parent.component.html'
})

export class ParentComponent{

     no:number ;
     progress :string = "not done";

    constructor() { }

    countChange(event){
        this.progress = event;
    }
}

