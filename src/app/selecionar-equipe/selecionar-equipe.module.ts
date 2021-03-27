import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SelecionarEquipeComponent } from './selecionar-equipe.component';

@NgModule({
  declarations: [
    SelecionarEquipeComponent
  ],
  exports: [
    SelecionarEquipeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SelecionarEquipeModule { }
