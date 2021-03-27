import { TipoCartao } from "../enum/tipo-cartao.enum";
import { TipoFalta } from "../enum/tipo-falta.enum";
import { TipoParalisacao } from "../enum/tipo-paralisacao.enum";
import { Atleta } from "./atleta.model";
import { Equipe } from "./equipe.model";

export class Paralisacao {
  idParalisacao: string;
  atletaSofrida?: Atleta;
  atletaCometida?: Atleta;
  equipeSofrida?: Equipe;
  equipeCometida?: Equipe;
  tipoParalisacao: TipoParalisacao;
  tipoCartao?: TipoCartao | null;
  tipoFalta?: TipoFalta | null
  pontoContra?: boolean;
  data: Date;
  comentario?: string;
}
