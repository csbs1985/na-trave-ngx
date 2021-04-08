import { Component, OnInit } from '@angular/core';
import { TipoCronometro } from '../shared/enum/tipo-cronometro.enum';
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
  situacaoCronometro: TipoCronometro = TipoCronometro.INICIAR;

  readonly btnParar = TipoCronometro.PARAR;

  constructor(
    private integracaoService: StorageIntegracaoService
  ) { }

  ngOnInit(): void {
    this.popularPlacar();
  }

  private popularPlacar(): any {
    this.placarSessao = this.integracaoService.lerPlacar();

    if (this.placarSessao.cronometro) {
      this.cabecalhoTexto = this.cabecalhoTexto + ' e cronômetro';
    }
  }

  botaoPrincipal(): void {
    if (this.situacaoCronometro === TipoCronometro.INICIAR ||
      this.situacaoCronometro === TipoCronometro.RETORNAR) {
      this.situacaoCronometro = TipoCronometro.PAUSAR;
      return;
    }

    if (this.situacaoCronometro === TipoCronometro.PAUSAR) {
      this.situacaoCronometro = TipoCronometro.RETORNAR;
      return;
    }
  }

  botaoParar(): void {
    this.situacaoCronometro = TipoCronometro.INICIAR;
  }
}
