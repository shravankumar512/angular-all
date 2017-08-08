import { TestPipe } from './test.pipe';
import { TestDirective } from './test.directive';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { testComponent } from './test.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations:[
        testComponent,
        TestDirective,
        TestPipe
    ],
    imports:[
        BrowserModule,
        FormsModule
    ],
    exports:[
        testComponent
    ]
})
    
export class TestModule{}