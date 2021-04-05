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
  formToggleCronometro = {};
  formRadioQtdPeriodo = {};
  formRadioDuracaoPeriodo = {};

  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.popularDefinir();
  }

  popularDefinir(): void {
    this.rotaBotao = (this.activatedRoute.snapshot.paramMap.get(this.pagina));

    switch (this.rotaBotao) {
      case TipoRoute.PARTIDA:
        this.isPartida = true;
        break;
      case TipoRoute.PLACAR:
        this.popularPlacar();
        break;
      case TipoRoute.SELECIONAR_EQUIPE:
        this.isSelecionarEquipes = true;
        this.isConfirmar = false;
        this.rotaBotao = this.manual;
        this.textoBotao = 'definir manualmente';
        break;
    }
  }

  popularPlacar(): void {
    this.textoCabecalho = 'Definir placar e cronômetro'
    this.isPlacar = true;
    this.formTextoCasa = {
      titulo: 'time mandante',
      descricao: '',
      placeholder: 'Mandante',
      textoPadrao: 'Mandante',
    };
    this.formTextoVisitante = {
      titulo: 'time visitante',
      descricao: '',
      placeholder: 'Visitante',
      textoPadrao: 'Visitante',
    };
    this.formToggleCronometro = {
      titulo: 'cronômetro',
      descricao: 'Habilita o Cronômetro junto ao placar.'
    };
    this.formRadioQtdPeriodo = {
      titulo: 'Periodos',
      descricao: 'Quantidade de periodos da partida.',
      valor: [
        1, 2
      ]
    };
    this.formRadioDuracaoPeriodo = {
      titulo: 'Duração',
      descricao: 'Duração de cada periodo.',
      valor: [
        10, 15, 20, 25, 30, 35, 40, 45
      ]
    };
  }

  ////////////////////////////////////////////////////
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

  formToggleResultadoCronometro(resultado): void {
    console.log(resultado);
  }

  formRadioResultadoPediodo(resultado): void {
    console.log(resultado);
  }
}
