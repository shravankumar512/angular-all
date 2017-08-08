import { IEmp } from './emp.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class EmpManageService {

    private obj:IEmp = {id:0,name:'default'};
    private emp = new BehaviorSubject<IEmp>(this.obj);

    curmsg = this.emp.asObservable();

    constructor(){}

    changeMessage(i:IEmp){
        this.emp.next(i)
    }
} 