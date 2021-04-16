import { Injectable } from '@angular/core';
import { Sessao } from '../models/sessao.model';

@Injectable({
  providedIn: 'root'
})
export class StotageService {

  static readonly LOCAL_STORAGE = window.localStorage;
  private readonly SESSAO_CONTEXTO = 'na-trave';

  /**
   * Método responsável por ler o local storage e, no caso de não haver dados nele,
   * criar uma estrutura de dados vazia.
   */
  get dados(): Sessao {
    try {
      let store: any;
      const defaultValue = new Sessao();

      store = StotageService.LOCAL_STORAGE[this.SESSAO_CONTEXTO];
      if (store == null) {
        store = defaultValue;
      } else {
        store = JSON.parse(store) as Sessao;
      }

      return store || defaultValue;
    } catch (error) {
      throw new Error('JSON da sessão corrompido.');
    }
  }

  limparDados(): void {
    const defaultValue = new Sessao();
    let store = StotageService.LOCAL_STORAGE[this.SESSAO_CONTEXTO];
    store = defaultValue;
  }

  salvarDados(dados: Sessao): void {
    try {
      StotageService.LOCAL_STORAGE[this.SESSAO_CONTEXTO] = JSON.stringify(dados);
    } catch (error) {
      throw new Error('Alguns dos argumentos enviados para o store não podem ser serializados.');
    }
  }
}
