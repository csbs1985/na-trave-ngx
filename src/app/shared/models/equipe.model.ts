import { Atleta } from "./atleta.model";

export class Equipe {
  id: string;
  nome: string;
  ponto: number | 0;
  atletas: Atleta[];
}
