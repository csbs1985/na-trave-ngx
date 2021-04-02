import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-botao-voltar',
  templateUrl: './botao-voltar.component.html'
})
export class BotaoVoltarComponent {

  readonly voltar = 'voltar';

  constructor(
    private _location: Location
  ) { }

  selecionarBotao() {
    this._location.back();
  }
}
