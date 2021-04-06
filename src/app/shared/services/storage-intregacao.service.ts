import { Injectable } from '@angular/core';
import { Aplicacao } from '../enum/aplicacao.enum';
import { Partida } from '../models/partida.model';
import { SelecionarEquipe } from '../models/selecionar-equipe.model';
import { StoragePartida } from '../models/storage-partida.model';
import { StorageSelecionarEquipe } from '../models/storage-placar.model';
import { StoragePlacar } from '../models/storage-selecionae-equipe.model';
import { StotageService } from './stotage.service';

@Injectable({
  providedIn: 'root'
})
export class StorageIntegracaoService {

  constructor(
    private sessao: StotageService
  ) { }

  lerPartida(): Promise<StoragePartida> {
    return this.lerSessao(Aplicacao.PARTIDA);
  }

  lerPlacar(): StoragePlacar {
    return this.lerSessao(Aplicacao.PLACAR);
  }

  lerSelecionarEquipe(): Promise<StorageSelecionarEquipe> {
    return this.lerSessao(Aplicacao.PARTIDA);
  }

  salvarPartida(dados: Partida): void {
    this.salvarSessao<Partida>(Aplicacao.PARTIDA, dados);
  }

  salvarPlacar(dados: StoragePartida): void {
    this.salvarSessao<StoragePartida>(Aplicacao.PLACAR, dados);
  }

  salvarSelecionarEquipe(dados: SelecionarEquipe): void {
    this.salvarSessao<SelecionarEquipe>(Aplicacao.SELECIONAR_EQUIPE, dados);
  }

  private lerSessao(aplicacao: Aplicacao): any {
    return this.sessao.dados[aplicacao];
  }

  private salvarSessao<T>(aplicacao: Aplicacao, dados: T) {
    const storage = this.sessao.dados;
    storage[aplicacao] = dados;
    this.sessao.salvarDados(storage);
  }
}
