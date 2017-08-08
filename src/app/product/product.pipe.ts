import { ProductService } from './product.service';
import { IProduct } from './product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'productPipe'
})
export class ProductPipe implements PipeTransform {
   
    transform(items: any[], args: string): any {
      if (!args){
        return items;
      } else {
        console.log("dsnflknd");
        return items
          .filter(item => 
            item.productName.toLowerCase().includes(args)
          );
      }
    }

   /*
    arr : IProduct[] = [];
    newArr:IProduct[] = [];

    constructor(private pi:ProductService){
        this.arr = this.pi.getProduct();
    }

    transform(value:string,args:string):any {
        
        this.newArr = [];
        this.arr.forEach(element => {
            if((element.productName).includes(args)){
                this.newArr.push(element);
            }
        });
        return this.newArr;
    }
    */

    

}