import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CountdownComponent } from 'ngx-countdown';
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

  readonly btnParar = TipoCronometro.FINALIZAR;

  countdownConfig: any;

  constructor(
    private integracaoService: StorageIntegracaoService,
    private route: Router
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
      }
    }
  }

  botaoPrincipal(): void {
    if (this.situacaoCronometro === TipoCronometro.INICIAR) {
      this.situacaoCronometro = TipoCronometro.PAUSAR;
      this.counter.begin();
      return;
    }

    if (this.situacaoCronometro === TipoCronometro.PAUSAR) {
      this.situacaoCronometro = TipoCronometro.RETORNAR;
      this.counter.pause();
      return;
    }

    if (this.situacaoCronometro === TipoCronometro.RETORNAR) {
      this.situacaoCronometro = TipoCronometro.PAUSAR;
      this.counter.begin();
      return;
    }
  }

  botaoParar(): void {
    if (this.placarSessao.periodo === 1) {
      this.finalizarPlacar();
    } else {
      this.situacaoCronometro = TipoCronometro.REINICIAR;
      this.periodo = 2;
    }
  }

  finalizarPlacar() {
    this.situacaoCronometro = TipoCronometro.FINALIZAR;
    this.route.navigate(['/' + TipoRoute.PRINCIPAL]);
  }
}
