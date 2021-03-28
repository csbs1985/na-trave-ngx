import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DefinirComponent } from './definir.component';

@NgModule({
  declarations: [DefinirComponent],
  exports: [DefinirComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class DefinirModule { }
