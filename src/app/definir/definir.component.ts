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

  isPartida = false;
  isPlacar = false;
  isConfirmar = false;
  isSelecionarEquipes = false;

  textoCabecalho = 'Definir ajustes';
  textoBotao = 'confirmar';

  readonly pagina = 'pagina';
  readonly manual = 'manual';

  formTextoCasa = {};
  formTextoVisitante = {};
  FormToggleCronometro = {};
  FormToggleOutro = {};

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
        this.isPartida = true;
        break;
      case TipoRoute.PLACAR:
        this.iniciarPlacar();
        break;
      case TipoRoute.SELECIONAR_EQUIPE:
        this.isSelecionarEquipes = true;
        this.isConfirmar = false;
        this.rotaBotao = this.manual;
        this.textoBotao = 'definir manualmente';
        break;
    }
  }

  iniciarPlacar(): void {
    this.isPlacar = true;
    this.formTextoCasa = {
      titulo: 'time 1',
      descricao: '',
      placeholder: 'time 1'
    };
    this.formTextoVisitante = {
      titulo: 'time 2',
      descricao: '',
      placeholder: 'time 2'
    };
    this.FormToggleCronometro = {
      titulo: 'titulo',
      descricao: 'não tem descrição'
    };
    this.FormToggleOutro = {
      titulo: 'titulo',
      descricao: 'não tem descrição'
    };
  }

  selecionarPagina(pagina: string): void {
    if (pagina === this.manual) {
      this.isSelecionarEquipes = false;
      this.rotaBotao = this.manual;
      this.textoBotao = 'confirmar';
      return;
    }
    this.route.navigate(['/' + pagina]);
  }

  esporteSelecionado(esporte: string): void {
    this.isSelecionarEquipes = false;
  }

  formToggleResultadoCronometro(resultado) {
    console.log(resultado);
  }
}
