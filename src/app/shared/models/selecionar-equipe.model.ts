import { TipoSituacao } from '../enum/tipo-situacao.enum';
import { Equipe } from './equipe.model';

export class SelecionarEquipe {
  situacao: TipoSituacao;
  equipes: Equipe[];
  quantidadeEquipes: number;
  goleiroFixo: boolean;
  quantidadeGolAtleta: number;
}
