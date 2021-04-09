import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CountdownModule } from 'ngx-countdown';
import { ComponentsModule } from '../shared/components/components.module';
import { PlacarComponent } from './placar.component';

@NgModule({
  declarations: [PlacarComponent],
  exports: [PlacarComponent],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    CountdownModule
  ]
})
export class PlacarModule { }
