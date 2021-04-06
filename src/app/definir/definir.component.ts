import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoRoute } from '../shared/enum/tipo-route.enum';

@Component({
  selector: 'app-definir',
  templateUrl: './definir.component.html',
  styleUrls: ['./definir.component.scss']
})
export class DefinirComponent implements OnInit {
  botaoRota: string;

  isPartida = false;
  isPlacar = false;
  isConfirmar = false;
  isSelecionarEquipes = false;

  cabecalhoTexto = 'Definir ajustes';
  botaoTexto = 'confirmar';

  cronometro = true;
  duracao: number;
  mandante: string;
  periodo: number;
  visitante: string;

  readonly pagina = 'pagina';
  readonly manual = 'manual';

  formTextoMandante = {};
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
    this.botaoRota = (this.activatedRoute.snapshot.paramMap.get(this.pagina));

    switch (this.botaoRota) {
      case TipoRoute.PARTIDA:
        this.isPartida = true;
        break;
      case TipoRoute.PLACAR:
        this.popularPlacar();
        break;
      case TipoRoute.SELECIONAR_EQUIPE:
        this.isSelecionarEquipes = true;
        this.isConfirmar = false;
        this.botaoRota = this.manual;
        this.botaoTexto = 'definir manualmente';
        break;
    }
  }

  popularPlacar(): void {
    this.cabecalhoTexto = 'Definir placar e cronômetro';
    this.isPlacar = true;
    this.formTextoMandante = {
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

  esporteResultado(resultado: string): void {
    this.isSelecionarEquipes = false;
  }

  mandanteResultado(resultado: string): void {
    this.mandante = resultado;
  }

  visitanteResultado(resultado: string): void {
    this.visitante = resultado;
  }

  cronometroResultado(resultado: boolean): void {
    this.cronometro = resultado;
  }

  periodoResultado(resultado: number): void {
    this.periodo = resultado;
  }

  duracaoResultado(resultado: number): void {
    this.duracao = resultado;
  }


  ////////////////////////////////

  botaoConfirmar(pagina: string): void {
    switch (pagina) {
      case TipoRoute.PARTIDA:

        break;
      case TipoRoute.PLACAR:
        this.validarPlacar();
        break;
      case TipoRoute.SELECIONAR_EQUIPE:

        break;
    }

    // if (pagina === this.manual) {
    //   this.isSelecionarEquipes = false;
    //   this.botaoRota = this.manual;
    //   this.botaoTexto = 'confirmar';
    //   return;
    // }
    this.route.navigate(['/' + pagina]);
  }

  validarPlacar(): any {
    const dados = {
      mandante: this.mandante,
      visitante: this.visitante,
      cronometro: this.cronometro,
      periodo: this.periodo,
      duracao: this.duracao
    };

    console.log(dados);
  }
}
