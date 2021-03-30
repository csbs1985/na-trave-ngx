import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoRoute } from '../shared/enum/tipo-route.enum';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  constructor(
    private route: Router
  ) { }

  ngOnInit(): void { }

  /* tslint:disable:typedef */
  selecionarPagina(pagina: string) {
    this.route.navigate(['/' + TipoRoute.PRINCIPAL, pagina]);
  }
}
