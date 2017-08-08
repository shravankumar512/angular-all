import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate,CanActivateChild {
    

    constructor(private authService:AuthService,private router:Router){}
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
        let url:string = state.url;
        return this.isLoggedIn(url);
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(childRoute,state)
    }

    isLoggedIn(url:string):boolean{
        
        if(this.authService.isLoggedIn) { return true; }

        this.authService.redirectUrl = url;
        this.router.navigate(['/login'])        
        
        return false;
    }

}