import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.scss']
})
export class BotaoComponent {

  @Input() rotaBotao: string;
  @Input() textoBotao: string;
  @Output() cliqueBotao = new EventEmitter();

  selecionarBotao(selecao): void {
    this.cliqueBotao.emit(selecao);
  }
}
