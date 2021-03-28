import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PartidaComponent } from './partida.component';

@NgModule({
  declarations: [PartidaComponent],
  exports: [PartidaComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PartidaModule { }
