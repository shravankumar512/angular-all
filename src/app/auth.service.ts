import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/Observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthService {
    
    isLoggedIn = false;
    redirectUrl:string;

    Login():Observable<boolean>{
        return Observable.of(true).delay(1000).do(val =>this.isLoggedIn=true);
    }

    logout():void{
        this.isLoggedIn = false;
    }
}