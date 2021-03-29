import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoRoute } from '../shared/enum/tipo-route.enum';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(
    private route: Router
  ) { }

  ngOnInit(): void { }

  selecionarPagina(pagina) {
    this.route.navigate(['/' + TipoRoute.PRINCIPAL, pagina]);
  }
}
