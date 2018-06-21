import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({ selector: '[appGradient]' })
export class GradientDirective implements OnInit {
    @Input() appGradient: string;
    constructor(private elem: ElementRef, private renderer: Renderer2) {}
    ngOnInit() {
      if (this.appGradient) {
        const ascii_code = (this.appGradient.toLowerCase().charCodeAt(0) +
          this.appGradient.toLowerCase().charCodeAt(this.appGradient.length - 1)) / 2;
        if (ascii_code >= 97 && ascii_code <= 102) {
          this.renderer.setStyle(this.elem.nativeElement,
            'background', 'linear-gradient(135deg, #FAD961 30%, #F76B1C 100%)');
        } else if (ascii_code > 102 && ascii_code <= 107) {
          this.renderer.setStyle(this.elem.nativeElement,
            'background', 'linear-gradient(135deg, #822DAF 30%, #D80F5B 100%)');
        } else if (ascii_code > 107 && ascii_code <= 112) {
          this.renderer.setStyle(this.elem.nativeElement,
            'background', 'linear-gradient(135deg, #67C0F5 30%, #328AFE 100%)');
        } else if (ascii_code > 112 && ascii_code <= 117) {
          this.renderer.setStyle(this.elem.nativeElement,
            'background', 'linear-gradient(135deg, #B05FDC 30%, #FF82E0 100%)');
        } else {
          this.renderer.setStyle(this.elem.nativeElement,
            'background', 'linear-gradient(135deg, #B4EC51 30%, #429321 100%)');
        }
      }
    }
}
