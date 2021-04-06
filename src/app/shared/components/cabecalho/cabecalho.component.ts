import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss']
})
export class CabecalhoComponent {

  @Input() cabecalhoTexto: string;

  constructor(
    private location: Location
  ) { }

  selecionarBotao(): void {
    this.location.back();
  }
}
