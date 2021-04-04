import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoRoute } from '../shared/enum/tipo-route.enum';

@Component({
  selector: 'app-definir',
  templateUrl: './definir.component.html',
  styleUrls: ['./definir.component.scss']
})
export class DefinirComponent implements OnInit {
  rotaBotao: string;
  textoBotao: string;

  isPartida = false;
  isPlacar = false;
  isConfirmar = true;
  isSelecionarEquipes = false;

  readonly textoCabecalho = 'Definição ajustes';
  readonly pagina = 'pagina';

  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.iniciarPagina();
  }

  iniciarPagina(): void {
    this.rotaBotao = (this.activatedRoute.snapshot.paramMap.get(this.pagina));

    switch (this.rotaBotao) {
      case TipoRoute.PARTIDA:
        this.textoBotao = 'partida';
        this.isPartida = true;
        break;
      case TipoRoute.PLACAR:
        this.textoBotao = 'placar';
        this.isPlacar = true;
        break;
      case TipoRoute.SELECIONAR_EQUIPE:
        this.textoBotao = 'selecionar equipe';
        this.isSelecionarEquipes = true;
        this.isConfirmar = false;
        break;
    }
  }

  selecionarPagina(pagina: string): void {
    this.route.navigate(['/' + pagina]);
  }

  esporteSelecionado(esporte: string): void {
    console.log(esporte);
    this.isSelecionarEquipes = false;
  }
}
