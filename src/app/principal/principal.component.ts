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
      label: 'placar e cronômetro'
    },
    {
      link: 'selecionar-equipe',
      label: 'selecionar times'
    },
    {
      link: 'partida',
      label: 'grenciar partida'
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
