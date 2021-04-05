import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BotaoVoltarComponent } from './botao-voltar/botao-voltar.component';
import { BotaoComponent } from './botao/botao.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { FormTextoComponent } from './form-texto/form-texto.component';
import { SelecionarEsporteComponent } from './selecionar-esporte/selecionar-esporte.component';

@NgModule({
  declarations: [
    BotaoComponent,
    BotaoVoltarComponent,
    CabecalhoComponent,
    SelecionarEsporteComponent,
    FormTextoComponent
  ],
  exports: [
    BotaoComponent,
    BotaoVoltarComponent,
    CabecalhoComponent,
    SelecionarEsporteComponent,
    FormTextoComponent
  ],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
