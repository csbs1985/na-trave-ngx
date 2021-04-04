import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BotaoVoltarComponent } from './botao-voltar/botao-voltar.component';
import { BotaoComponent } from './botao/botao.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';

@NgModule({
  declarations: [
    BotaoComponent,
    BotaoVoltarComponent,
    CabecalhoComponent
  ],
  exports: [
    BotaoComponent,
    BotaoVoltarComponent,
    CabecalhoComponent
  ],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
