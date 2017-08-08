import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
    template:`
        <h3>login</h3>
        <p>{{message}}</p>
        <p>
            <button (click)="login()"  *ngIf="!authService.isLoggedIn">Login</button>
            <button (click)="logout()" *ngIf="authService.isLoggedIn">Logout</button>
        </p>
    `

})
export class LoginComponent  {
    
    message:string;

    constructor(public authService:AuthService,private router:Router) { 
        this.setMessage();
    }

    setMessage() {
       this.message = 'Logged '+(this.authService.isLoggedIn ?'in':'out');
    }

    login(){
        this.message = 'trying to log in..';
        this.authService.Login().subscribe(()=>{
            this.setMessage();
            if(this.authService.isLoggedIn){
                let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';
                console.log('redirect: ', redirect);
                this.router.navigate([redirect]);
            }
        })
        
    }

    logout(){
        this.authService.logout();
        this.setMessage();
    }

}