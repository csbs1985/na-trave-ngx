import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BotaoVoltarComponent } from './botao-voltar/botao-voltar.component';
import { BotaoComponent } from './botao/botao.component';

@NgModule({
  declarations: [
    BotaoComponent, BotaoVoltarComponent
  ],
  exports: [
    BotaoComponent,
    BotaoVoltarComponent
  ],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
