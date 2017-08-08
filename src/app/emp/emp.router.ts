import { CanDeactivateGuard } from './CanDeactivateGuard';
import { EmpNoneComponent } from './emp-none.component';
import { NgModule } from '@angular/core';
import { EmpDetailsComponent } from './empdetails.component';
import { EmpComponent } from './emp.component';
import { RouterModule, Routes, CanDeactivate } from '@angular/router';

const routes: Routes = [
    { 
        path: 'emp', 
        component: EmpComponent,
        children:[
            {
                path:'',
                component:EmpNoneComponent,
            },
            {
                path:':name',
                component:EmpDetailsComponent,
                canDeactivate:[CanDeactivateGuard]
            }
        ]
    }
];

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class EmpRouter{}