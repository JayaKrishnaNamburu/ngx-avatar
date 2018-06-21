import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileImageComponent } from './profile-image.component';
import { GradientModule } from '../../gradient/gradient.module';

@NgModule({
  imports: [
    CommonModule,
    GradientModule
  ],
  declarations: [ProfileImageComponent],
  exports: [ProfileImageComponent]
})
export class ProfileImageModule { }
