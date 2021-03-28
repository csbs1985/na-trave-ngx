import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SelecionarEquipeComponent } from './selecionar-equipe.component';

@NgModule({
  declarations: [
    SelecionarEquipeComponent
  ],
  exports: [
    SelecionarEquipeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SelecionarEquipeModule { }
