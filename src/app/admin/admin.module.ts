import { AdminRouterModule } from './admin-router.module';
import { HeroComponent } from './hero.component';
import { EmpComponent } from './emp.component';
import { DashComponent } from './dash.component';
import { AdminComponent } from './admin.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [ 
        CommonModule,
        FormsModule,
        AdminRouterModule
     ],
    declarations: [
        AdminComponent,
        DashComponent,
        EmpComponent,
        HeroComponent
    ]
})
export class AdminModule { }