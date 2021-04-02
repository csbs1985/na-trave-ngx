import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../shared/components/components.module';
import { DefinirComponent } from './definir.component';

@NgModule({
  declarations: [DefinirComponent],
  exports: [DefinirComponent],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule
  ]
})
export class DefinirModule { }
