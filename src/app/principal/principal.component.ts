import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TipoRoute } from '../shared/enum/tipo-route.enum';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent {
  menuPrincipal = [
    {
      rota: 'placar',
      texto: 'placar e cronômetro'
    },
    {
      rota: 'selecionar-equipe',
      texto: 'selecionar times'
    },
    {
      rota: 'partida',
      texto: 'gerenciar partida'
    }
  ];

  constructor(
    private route: Router
  ) { }

  /* tslint:disable:typedef */
  selecionarPagina(pagina: string) {
    this.route.navigate(['/' + TipoRoute.PRINCIPAL, pagina]);
  }
}
