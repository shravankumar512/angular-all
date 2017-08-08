import { ProductService } from './product.service';
import { IProduct } from './product';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls:['./product.component.css']
})
export class ProductComponent implements OnInit{
    
    t1:string="";

    public products : IProduct[]= [];
    showImg = true;
    showhide = 'hide';
    constructor(private pd:ProductService) { }
    dateToggle = true;
    show(){
        this.showImg=!this.showImg;
        if(this.showhide == 'show')
            this.showhide = 'hide'
        else
            this.showhide = 'show'
    }

    dateFormat(){
        this.dateToggle = !this.dateToggle;
    }

    get format(){
        return this.dateToggle ? 'shortDate' : 'fullDate';
    }

    ngOnInit(): void {
        this.products = this.pd.getProduct();
    }
}