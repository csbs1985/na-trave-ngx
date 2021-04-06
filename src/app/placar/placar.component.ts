import { Component, OnInit } from '@angular/core';
import { StoragePlacar } from '../shared/models/storage-selecionae-equipe.model';
import { StorageIntegracaoService } from '../shared/services/storage-intregacao.service';

@Component({
  selector: 'app-placar',
  templateUrl: './placar.component.html',
  styleUrls: ['./placar.component.scss']
})
export class PlacarComponent implements OnInit {

  placarSessao: StoragePlacar;

  readonly cabecalhoTexto = 'Placa e cronômetro da partida';

  constructor(
    private integracaoService: StorageIntegracaoService
  ) { }

  ngOnInit(): void {
    this.popularPlacar();
  }

  private popularPlacar(): any {
    this.placarSessao = this.integracaoService.lerPlacar();
  }
}
