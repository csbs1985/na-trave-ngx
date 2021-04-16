import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  buscaBatao = {
    rota: 'buscar-partida',
    texto: 'buscar partida'
  }

  menuPrincipal = [
    {
      rota: 'ajuste-placar',
      texto: 'placar e cronômetro'
    },
    {
      rota: 'selecionar-equipe',
      texto: 'selecionar os times'
    },
    {
      rota: 'partida',
      texto: 'partida completa'
    }
  ];

  constructor(
    private route: Router,
  ) { }

  ngOnInit(): void { }

  selecionarPagina(pagina: string): void {
    this.route.navigate(['/' + pagina]);
  }
}
