import { TipoSituacao } from "../enum/tipo-situacao.enum";
import { Equipe } from "./equipe.model";

export class Placar {
  situacao: TipoSituacao;
  equipes: Equipe[];
  habilitarCronometro: boolean;
  dividirPeriodos?: number;
  duracaoPeriodos?: number;
}
