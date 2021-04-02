import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoRoute } from '../shared/enum/tipo-route.enum';

@Component({
  selector: 'app-definir',
  templateUrl: './definir.component.html',
  styleUrls: ['./definir.component.scss']
})
export class DefinirComponent implements OnInit {
  paginaSelecionada: string;
  readonly pagina = 'pagina';

  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.paginaSelecionada = (this.activatedRoute.snapshot.paramMap.get(this.pagina));
  }

  selecionarPagina(pagina: string) {
    this.route.navigate(['/' + TipoRoute.PRINCIPAL, pagina]);
  }
}
