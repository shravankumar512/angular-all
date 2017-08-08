import { CanActivateChild } from '@angular/router';
import { AuthGuard } from './../auth-gaurd.service';
import { NgModule } from '@angular/core';
import { HeroComponent } from './hero.component';
import { EmpComponent } from './emp.component';
import { DashComponent } from './dash.component';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';

const adminRoutes: Routes = [
    { 
        path: 'admin',
        component: AdminComponent,
        canActivate:[AuthGuard],
        children:[
            {
                path:'',
                canActivateChild:[AuthGuard],
                children:[
                    { path:'empAdmin',component:EmpComponent },
                    { path:'heroAdmin',component:HeroComponent },
                    { path:'',component:DashComponent }
                ]              
            }
        ]
    }
];

@NgModule({
    imports:[
        RouterModule.forChild(adminRoutes)
    ],
    exports:[
        RouterModule
    ]
})

export class AdminRouterModule{}
