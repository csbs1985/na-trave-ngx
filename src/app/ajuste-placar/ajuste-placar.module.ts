import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../shared/components/components.module';
import { AjustePlacarComponent } from './ajuste-placar.component';

@NgModule({
  declarations: [
    AjustePlacarComponent
  ],
  exports: [
    AjustePlacarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule
  ]
})
export class AjustePlacarModule { }
