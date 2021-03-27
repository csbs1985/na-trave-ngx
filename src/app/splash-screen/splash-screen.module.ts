import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SplashScreenComponent } from './splash-screen.component';

@NgModule({
  declarations: [SplashScreenComponent],
  exports: [SplashScreenComponent],
  imports: [
    CommonModule
  ]
})
export class SplashScreenModule { }
