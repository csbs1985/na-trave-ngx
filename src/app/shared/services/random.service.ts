import { Injectable } from "@angular/core";

Injectable({
  providedIn: 'root'
})
export class RandomService {

  tituloFim1Tempo = [];

  textoFimPartida = [];

  textofim1tempo = [];

  tituloFimPartida(): string {
    const tituloFimPartida = [
      "Aaaaacabou",
      "Fim de jogo!",
      "Chega, já deu!"
    ];
    return tituloFimPartida[Math.floor(Math.random() * tituloFimPartida.length)];
  }
}
