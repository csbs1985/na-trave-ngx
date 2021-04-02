import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BotaoComponent } from './botao/botao.component';

@NgModule({
  declarations: [BotaoComponent],
  exports: [BotaoComponent],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
