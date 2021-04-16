import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BuscarPartidaComponent } from './buscar-partida.component';

@NgModule({
  declarations: [BuscarPartidaComponent],
  exports: [BuscarPartidaComponent],
  imports: [
    CommonModule
  ]
})
export class BuscarPartidaModule { }
