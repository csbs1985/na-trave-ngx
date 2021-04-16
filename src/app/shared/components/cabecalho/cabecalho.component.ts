import { Location } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss']
})
export class CabecalhoComponent {

  @Input() cabecalhoTexto: string;
  @Output() cabecalhoResultado = new EventEmitter();

  constructor(
    private location: Location
  ) { }

  selecionarBotao(): void {
    this.location.back();
    this.cabecalhoResultado.emit();
  }
}
