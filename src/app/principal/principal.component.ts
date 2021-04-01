import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TipoRoute } from '../shared/enum/tipo-route.enum';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent {
  menu = [
    {
      link: 'placar',
      label: 'placar'
    },
    {
      link: 'selecionar-equipe',
      label: 'selecionar equipe'
    },
    {
      link: 'partida',
      label: 'partida'
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
