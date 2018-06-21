import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GradientDirective } from '../gradient/gradient.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ GradientDirective ],
  exports: [ GradientDirective ]
})
export class GradientModule { }
