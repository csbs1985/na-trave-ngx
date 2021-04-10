import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CountdownComponent } from 'ngx-countdown';
import { ModalService } from '../shared/components/modal/modal.service';
import { TipoCronometro } from '../shared/enum/tipo-cronometro.enum';
import { TipoRoute } from '../shared/enum/tipo-route.enum';
import { StoragePlacar } from '../shared/models/storage-selecionae-equipe.model';
import { StorageIntegracaoService } from '../shared/services/storage-intregacao.service';

@Component({
  selector: 'app-placar',
  templateUrl: './placar.component.html',
  styleUrls: ['./placar.component.scss']
})
export class PlacarComponent implements OnInit {
  placarSessao: StoragePlacar;

  cabecalhoTexto = 'Placar';
  periodo = 1;
  situacaoCronometro: TipoCronometro = TipoCronometro.INICIAR;

  readonly btnIniciar = TipoCronometro.INICIAR;
  readonly btnPausar = TipoCronometro.PAUSAR;
  readonly btnRetornar = TipoCronometro.RETORNAR;
  readonly btnFinalizar = TipoCronometro.FINALIZAR;
  readonly modalTitulo = 'Finalizar';

  modalTexto: string;
  countdownConfig: any;

  constructor(
    private integracaoService: StorageIntegracaoService,
    private route: Router,
    private modalService: ModalService
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
        leftTime: this.placarSessao.duracao,
        demand: true
      };
    }
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
      this.modalTexto = 'Deseja realmente finalizar 1° tempo?';
      this.situacaoCronometro = TipoCronometro.INICIAR;
    } else {
      this.modalTexto = 'Deseja realmente finalizar a partida?';
    }
    this.modalService.isModalAberto = true;
  }

  botaoReiniciar(): void {
    this.situacaoCronometro = TipoCronometro.PAUSAR;
    this.counter.restart();
  }

  botaoConfirmar(): void {
    if (this.placarSessao.periodo === 1 ||
      (this.placarSessao.periodo === 2 && this.periodo === 2)) {
      this.finalizarParida();
    }
    this.periodo++;
  }

  finalizarParida(): void {
    this.integracaoService.salvarPlacar(null);
    this.route.navigate(['/' + TipoRoute.PRINCIPAL]);
  }
}
