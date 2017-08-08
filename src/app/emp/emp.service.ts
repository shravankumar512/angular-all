import { element } from 'protractor';
import { IEmp } from './emp.service';

import { Injectable } from '@angular/core';

export interface IEmp{
    id:number,
    name:string
}

let emp:IEmp[] = [
    {id:1,name:'shravan'},
    {id:2,name:'srivardhan'},
    {id:3,name:'harish'},
    {id:4,name:'mahender'},
    {id:5,name:'prashanth'},
    {id:6,name:'Akash'}
]

@Injectable()
export class EmpService {
    
    constructor() { }

    getEmpList(){ return emp; }
}