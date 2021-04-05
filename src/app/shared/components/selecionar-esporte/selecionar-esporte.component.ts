import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-selecionar-esporte',
  templateUrl: './selecionar-esporte.component.html',
  styleUrls: ['./selecionar-esporte.component.scss']
})
export class SelecionarEsporteComponent {
  @Output() FormImagemResultado = new EventEmitter();

  esportes = [
    {
      tipoEsporte: 'futebol',
      imagem: '../../assets/images/futebol.jpg'
    },
    {
      tipoEsporte: 'futsal',
      imagem: '../../assets/images/futsal.png'
    },
    {
      tipoEsporte: 'futebol de areia',
      imagem: '../../assets/images/futebol-areia.jpg'
    },
    {
      tipoEsporte: 'futsete',
      imagem: '../../assets/images/futsete.jpeg'
    }
  ];

  selecionarEsporte(esporte): void {
    this.FormImagemResultado.emit(esporte);
  }
}
