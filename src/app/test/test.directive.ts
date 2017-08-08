

import { Directive, Input, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector:'[testDir]'
})

export class TestDirective{

    constructor(private el:ElementRef){}

    @Input('testDir') hightlightcolor : string;

    @HostListener('mouseenter') onMouseEnter() {
         this.highlight(this.hightlightcolor || 'red');
    }

    @HostListener('mouseleave') onmouseleave(){
        this.highlight(null);
    }

    private highlight(color: string) {
        this.el.nativeElement.style.color = color;
    }
}