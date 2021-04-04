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
        break;
      case TipoRoute.PLACAR:
        this.textoBotao = 'placar';
        break;
      case TipoRoute.SELECIONAR_EQUIPE:
        this.textoBotao = 'selecionar equipe';
        break;
    }
  }

  selecionarPagina(pagina: string): void {
    this.route.navigate(['/' + pagina]);
  }
}
