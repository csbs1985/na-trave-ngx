import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StotageService } from '../shared/services/stotage.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  menuPrincipal = [
    {
      rota: 'selecionar-equipe',
      texto: 'selecionar os times'
    },
    {
      rota: 'ajuste-placar',
      texto: 'placar e cronômetro'
    },
    {
      rota: 'partida',
      texto: 'partida completa'
    }
  ];

  buscaBatao = {
    rota: 'buscar-partida',
    texto: 'buscar partida'
  }

  constructor(
    private route: Router,
    private sessao: StotageService
  ) { }

  ngOnInit(): void {
    this.iniciarProjeto();
  }

  iniciarProjeto(): void {
    const data = this.sessao.dados;
    if (!data.partida) {
      data.partida = {};
    }
    if (!data.placar) {
      data.placar = {};
    }
    if (!data.selecionarEquipes) {
      data.selecionarEquipes = {};
    }

    this.sessao.salvarDados(data);
  }

  selecionarPagina(pagina: string): void {
    this.route.navigate(['/' + pagina]);
  }
}
