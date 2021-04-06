import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html'
})
export class BotaoComponent {

  @Input() botaoRota: string;
  @Input() botaoTexto: string;
  @Output() cliqueBotao = new EventEmitter();

  selecionarBotao(selecao): void {
    this.cliqueBotao.emit(selecao);
  }
}
