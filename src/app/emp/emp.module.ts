import { CanDeactivateGuard } from './CanDeactivateGuard';
import { EmpService } from './emp.service';
import { EmpManageService } from './emp-manage.component';
import { EmpNoneComponent } from './emp-none.component';
import { EmpRouter } from './emp.router';
import { FormsModule } from '@angular/forms';
import { EmpDetailsComponent } from './empdetails.component';
import { EmpComponent } from './emp.component';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";


@NgModule({

    declarations:[
        EmpComponent,
        EmpDetailsComponent,
        EmpNoneComponent
    ],
    imports:[
        FormsModule,
        CommonModule,
        EmpRouter  
    ],
    providers:[EmpManageService,EmpService,CanDeactivateGuard]
})

export class EmpModule{}