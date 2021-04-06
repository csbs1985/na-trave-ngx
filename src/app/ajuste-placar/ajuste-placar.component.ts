import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoRoute } from '../shared/enum/tipo-route.enum';

@Component({
  selector: 'app-ajuste-placar',
  templateUrl: './ajuste-placar.component.html',
  styleUrls: ['./ajuste-placar.component.scss']
})
export class AjustePlacarComponent implements OnInit {

  readonly botaoTexto = 'confirmar';
  readonly botaoRota = 'placar';
  readonly cabecalhoTexto = 'Definir placar e cronômetro';

  formTextoMandante = {};
  formTextoVisitante = {};
  formToggleCronometro = {};
  formRadioQtdPeriodo = {};
  formRadioDuracaoPeriodo = {};

  placar = {
    cronometro: true,
    duracao: 45,
    mandante: 'Mandante',
    periodo: 2,
    visitante: 'Visitante'
  };

  constructor(
    private route: Router,
  ) { }

  ngOnInit(): void {
    this.popularAjustePlacar();
  }

  private popularAjustePlacar(): void {
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

  mandanteResultado(resultado: string): void {
    this.placar.mandante = resultado;
  }

  visitanteResultado(resultado: string): void {
    this.placar.visitante = resultado;
  }

  cronometroResultado(resultado: boolean): void {
    this.placar.cronometro = resultado;
  }

  periodoResultado(resultado: number): void {
    this.placar.periodo = resultado;
  }

  duracaoResultado(resultado: number): void {
    this.placar.duracao = resultado;
  }

  botaoConfirmar(pagina: TipoRoute): void {
    this.route.navigate(['/' + pagina]);
  }
}
