import { IEmp } from './emp.service';
import { EmpManageService } from './emp-manage.component';
import { Component } from '@angular/core';

@Component({
    template:`
        <h2>none</h2>
    `
})
export class EmpNoneComponent{

    msg :IEmp;
    constructor(private emc:EmpManageService) { }
    
}