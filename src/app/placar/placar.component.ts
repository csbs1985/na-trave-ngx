import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CountdownComponent } from 'ngx-countdown';
import { ModalService } from '../shared/components/modal/modal.service';
import { TipoCronometro } from '../shared/enum/tipo-cronometro.enum';
import { TipoRoute } from '../shared/enum/tipo-route.enum';
import { Modal } from '../shared/models/modal.module';
import { StoragePlacar } from '../shared/models/storage-selecionae-equipe.model';
import { RandomService } from '../shared/services/random.service';
import { StorageIntegracaoService } from '../shared/services/storage-intregacao.service';
import { StotageService } from '../shared/services/stotage.service';

@Component({
  selector: 'app-placar',
  templateUrl: './placar.component.html',
  styleUrls: ['./placar.component.scss']
})
export class PlacarComponent implements OnInit {
  readonly btnIniciar = TipoCronometro.INICIAR;
  readonly btnPausar = TipoCronometro.PAUSAR;
  readonly btnRetornar = TipoCronometro.RETORNAR;
  readonly btnFinalizar = TipoCronometro.FINALIZAR;

  cabecalhoTexto = 'Placar';

  mandantePonto = 0;
  visitantePonto = 0;
  periodo = 1;

  modaltexto: string;

  modalObject: Modal = {
    botao: 'ok',
    texto: '',
    titulo: 'Finalizar'
  };

  countdownConfig: any;

  placarSessao: StoragePlacar;
  situacaoCronometro: TipoCronometro = TipoCronometro.INICIAR;

  constructor(
    private integracaoService: StorageIntegracaoService,
    private route: Router,
    private modalService: ModalService,
    private randomService: RandomService,
    private sessao: StotageService
  ) { }

  ngOnInit(): void {
    this.popularPlacar();
  }

  @ViewChild(CountdownComponent) counter: CountdownComponent;
  resetTimer() {
    this.counter.begin();
    this.counter.restart();
    this.counter.stop();
    this.counter.pause();
    this.counter.resume();
  }

  private popularPlacar(): any {
    this.placarSessao = this.integracaoService.lerPlacar();

    if (this.placarSessao.cronometro) {
      this.cabecalhoTexto = this.cabecalhoTexto + ' e cronômetro';

      this.countdownConfig = {
        // leftTime: 3,
        leftTime: this.placarSessao.duracao,
        demand: true,
        format: 'mm:ss'
      };
    }
  }

  cabecalhoResultado(): void {
    this.integracaoService.salvarPlacar(null);
  }

  botaoIniciar(): void {
    this.situacaoCronometro = TipoCronometro.PAUSAR;
    this.counter.begin();
  }

  botaoPausar(): void {
    this.situacaoCronometro = TipoCronometro.RETORNAR;
    this.counter.pause();
  }

  botaoRetornar(): void {
    this.situacaoCronometro = TipoCronometro.PAUSAR;
    this.counter.begin();
  }

  botaoFinalizar() {
    if (this.placarSessao.periodo === 2 &&
      this.periodo === 1) {
      this.modaltexto = 'Deseja realmente finalizar 1° tempo?';
      this.situacaoCronometro = TipoCronometro.INICIAR;
    } else {
      this.modaltexto = 'Deseja realmente finalizar a partida?';
    }

    this.modalObject = {
      botao: 'confirmar',
      texto: this.modaltexto,
      titulo: 'Finalizar'
    }
    this.modalService.isModalAberto = true;
  }

  botaoReiniciar(): void {
    this.situacaoCronometro = TipoCronometro.PAUSAR;
    this.counter.restart();
  }

  modalResultado(resultado): void {
    this.modalConfirmar();
  }

  modalConfirmar(): void {
    if (this.placarSessao.periodo === 1 ||
      (this.placarSessao.periodo === 2 && this.periodo === 2)) {
      this.finalizarParTida();
    }
    this.periodo++;
    this.counter.restart();
    this.situacaoCronometro = TipoCronometro.INICIAR;
  }

  finalizarParTida(): void {
    this.integracaoService.salvarPlacar(null);
    this.route.navigate(['/' + TipoRoute.PRINCIPAL]);
  }

  zerarContador(alarme): void {
    if (alarme.text === '00:00') {

      this.modalObject = {
        botao: 'ok',
        texto: this.randomService.tituloFimPartida(),
        titulo: 'fim de jogo'
      }
      this.modalService.isModalAberto = true;
    }
  }
}
