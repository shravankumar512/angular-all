import { IEmp, EmpService } from './emp.service';
import { EmpManageService } from './emp-manage.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes, Router } from "@angular/router";

@Component({
    template:`
    <h4>emp details : <b>{{msg.name}}</b></h4>
    <div class="form-group">
        <input class="form-control" style="width:50%" type="text" [(ngModel)]='empname'>
    </div>
    <button class="btn btn-success"  (click)="save()">save</button>
    <button class="btn btn-danger" (click)="goBack()">back</button><br><br> 
    `
})
export class EmpDetailsComponent implements OnInit {
    
    msg:IEmp;
    empname:string;
    constructor(
        private es:EmpService, 
        private r1:ActivatedRoute,
        private router : Router,
        private emc:EmpManageService) {
    }
    
    ngOnInit() {
        this.emc.curmsg.subscribe(submsg=>{
            this.msg = submsg
            this.empname = this.msg.name;
        })  
    }

    save(){
        this.msg.name = this.empname;
    }
    
    goBack(){   
        console.log("goback");
        this.router.navigate(['emp']);
    }

    canDeactivate(){
        console.log("im nav  away...")

        if(this.msg.name !== this.empname){
            return window.confirm('Discard changes..?');
        }
        
        return true;

    }

}