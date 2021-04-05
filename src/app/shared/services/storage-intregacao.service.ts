import { Injectable } from "@angular/core";
import { Aplicacao } from "../enum/aplicacao.enum";
import { Partida } from "../models/partida.model";
import { Placar } from "../models/placar.model";
import { SelecionarEquipe } from "../models/selecionar-equipe.model";
import { StoragePartida } from "../models/storage-partida.model";
import { StorageSelecionarEquipe } from "../models/storage-placar.model";
import { StoragePlacar } from "../models/storage-selecionae-equipe.model";
import { StotageService } from "./stotage.service";

@Injectable({
  providedIn: 'root'
})
export class StorageIntegracaoService {

  constructor(
    private sessao: StotageService
  ) { }

  lerPartida(): Promise<StoragePartida> {
    return this.lerSessao<StoragePartida>(Aplicacao.PARTIDA, StoragePartida);
  }

  lerPlacar(): Promise<StoragePlacar> {
    return this.lerSessao<StoragePlacar>(Aplicacao.PARTIDA, StoragePlacar);
  }

  lerSelecionarEquipe(): Promise<StorageSelecionarEquipe> {
    return this.lerSessao<StorageSelecionarEquipe>(Aplicacao.PARTIDA, StorageSelecionarEquipe);
  }

  salvarPartida(dados: Partida): void {
    this.salvar<Partida>(Aplicacao.PARTIDA, dados);
  }

  salvarPlacar(dados: Placar): void {
    this.salvar<Placar>(Aplicacao.PLACAR, dados);
  }

  salvarSelecionarEquipe(dados: SelecionarEquipe): void {
    this.salvar<SelecionarEquipe>(Aplicacao.SELECIONAR_EQUIPE, dados);
  }

  private lerSessao<T extends Object>(aplicacao: Aplicacao, classevalidade): any {
    const dados = this.sessao.dados[aplicacao];
    const validacao = { validator: { skipMissingproperties: true } };

    localStorage.getItem(aplicacao);
  }

  private salvar<T>(aplicacao: Aplicacao, dados: T) {
    const storage = this.sessao.dados;
    storage[aplicacao] = dados;
    this.sessao.salvarDados(storage);
  }
}
