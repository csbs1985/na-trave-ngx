import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PlacarComponent } from './placar.component';

@NgModule({
  declarations: [PlacarComponent],
  exports: [PlacarComponent],
  imports: [
    CommonModule
  ]
})
export class PlacarModule { }
