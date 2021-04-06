import { TipoEsporte } from '../enum/tipo-esporte.enum';
import { TipoSituacao } from '../enum/tipo-situacao.enum';
import { Atleta } from './atleta.model';
import { Equipe } from './equipe.model';
import { Paralisacao } from './paralisacao.model';

export class Partida {
  idPartida: string;
  situacao: TipoSituacao;
  esporte: TipoEsporte;
  equipes?: Equipe[];
  atletas?: Atleta[];
  paralisacoes?: Paralisacao[];
}
