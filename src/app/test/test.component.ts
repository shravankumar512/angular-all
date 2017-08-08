import { Component } from '@angular/core';


@Component({
    selector:'app-test',
    templateUrl:'./test.component.html'
})

export class testComponent{
    isVisible = true;
    color : string = 'red';
    list = ["a","b","c","d"]

    title = "angular js...!"

    pass = "";
    pass1 = "";

    t1:number=5;
    t2:number=2;

    check(){
        let len = this.pass1.length;
        if( this.pass1 != this.pass.substr(0,len) ){
            console.log("not same");
            this.color = 'red';
        }
        else{
            this.color = 'black';
        }       
    }

    changeVisiblity(){
        this.isVisible = !(this.isVisible);
    }
    
}




