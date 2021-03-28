import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PlacarComponent } from './placar.component';

@NgModule({
  declarations: [PlacarComponent],
  exports: [PlacarComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PlacarModule { }
