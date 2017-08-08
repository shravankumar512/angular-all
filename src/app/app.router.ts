import { LoginComponent } from './login.component';
import { AdminComponent } from './admin/admin.component';
import { EmpRouter } from './emp/emp.router';
import { EmpComponent } from './emp/emp.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ProductComponent } from './product/product.component';
import { ParentComponent } from './parent/parent.component';
import { testComponent } from './test/test.component';

import {Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from "@angular/core";

export const router : Routes = [
    {path:'', redirectTo:'emp', pathMatch:'full'},
    {path:'admin',component:AdminComponent, loadChildren:'app/admin/admin.module#AdminModule'},
    {path:'test', component:testComponent},
    {path:'parent', component:ParentComponent},
    {path:'product', component:ProductComponent},
    {path:'calculator', component:CalculatorComponent},
    {path:'emp', component:EmpComponent, loadChildren:'./emp/emp.module#EmpModule'}, 
    {path:'login',component:LoginComponent}

];

export const routes : ModuleWithProviders = RouterModule.forRoot(router);