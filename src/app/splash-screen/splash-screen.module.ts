import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SplashScreenComponent } from './splash-screen.component';

@NgModule({
  declarations: [SplashScreenComponent],
  exports: [SplashScreenComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SplashScreenModule { }
