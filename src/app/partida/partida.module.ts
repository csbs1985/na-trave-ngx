import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PartidaComponent } from './partida.component';

@NgModule({
  declarations: [PartidaComponent],
  exports: [PartidaComponent],
  imports: [
    CommonModule
  ]
})
export class PartidaModule { }
