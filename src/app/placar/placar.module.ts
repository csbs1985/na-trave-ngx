import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../shared/components/components.module';
import { PlacarComponent } from './placar.component';

@NgModule({
  declarations: [PlacarComponent],
  exports: [PlacarComponent],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule
  ]
})
export class PlacarModule { }
