import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoRoute } from '../shared/enum/tipo-route.enum';
import { StoragePlacar } from '../shared/models/storage-selecionae-equipe.model';
import { StorageIntegracaoService } from '../shared/services/storage-intregacao.service';

@Component({
  selector: 'app-ajuste-placar',
  templateUrl: './ajuste-placar.component.html',
  styleUrls: ['./ajuste-placar.component.scss']
})
export class AjustePlacarComponent implements OnInit {

  readonly botaoTexto = 'confirmar';
  readonly botaoRota = 'placar';
  readonly cabecalhoTexto = 'Ajustar placar e cronômetro';

  formTextoMandante = {};
  formTextoVisitante = {};
  formToggleCronometro = {};
  formRadioQtdPeriodo = {};
  formRadioDuracaoPeriodo = {};

  placar: StoragePlacar = {
    cronometro: true,
    duracao: 45,
    mandante: 'Mandante',
    periodo: 2,
    visitante: 'Visitante'
  };

  constructor(
    private route: Router,
    private integracaoService: StorageIntegracaoService
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
      checked: 2,
      valor: [
        1, 2
      ]
    };
    this.formRadioDuracaoPeriodo = {
      titulo: 'Duração',
      descricao: 'Duração de cada periodo.',
      checked: 45,
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
    this.validarDados();
    this.salvarDados();
    this.route.navigate(['/' + pagina]);
  }

  private validarDados(): void {
    if (!this.placar.mandante) {
      this.placar.mandante = 'mandante';
    }

    if (!this.placar.visitante) {
      this.placar.mandante = 'visitante';
    }

    if (!this.placar.cronometro) {
      this.placar.periodo = null;
      this.placar.duracao = null;
    } else {

      if (!this.placar.periodo) {
        this.placar.periodo = 2;
      }

      if (!this.placar.duracao) {
        this.placar.duracao = 45;
      }
    }
  }

  private salvarDados(): void {
    this.integracaoService.salvarPlacar(this.placar);
  }
}
