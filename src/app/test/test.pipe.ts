import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'testPipe'
})
export class TestPipe implements PipeTransform {

    transform(value: number, pwr: number):number {
        return Math.pow(value, isNaN(pwr) ? 1 : pwr);
    }

}