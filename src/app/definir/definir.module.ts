import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DefinirComponent } from './definir.component';

@NgModule({
  declarations: [DefinirComponent],
  exports: [DefinirComponent],
  imports: [
    CommonModule
  ]
})
export class DefinirModule { }
