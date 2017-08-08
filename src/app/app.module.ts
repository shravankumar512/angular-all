import { AuthService } from './auth.service';
import { AuthGuard } from './auth-gaurd.service';
import { CommonModule } from '@angular/common';
import { AdminModule } from './admin/admin.module';
import { LoginComponent } from './login.component';
import { EmpModule } from './emp/emp.module';
import { EmpRouter } from './emp/emp.router';
import { ProductPipe } from './product/product.pipe';
import { ProductService } from './product/product.service';
import { ProductComponent } from './product/product.component';
import { routes } from './app.router';
import { ParentComponent } from './parent/parent.component';
import { TestModule } from './test/test.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { EmpComponent } from './emp/emp.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    ProductComponent,
    CalculatorComponent,
    ProductPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TestModule,
    routes,
    EmpModule,
    AdminModule,
    CommonModule
  ],
  providers: [ProductService,AuthGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
