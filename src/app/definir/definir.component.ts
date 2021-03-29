import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-definir',
  templateUrl: './definir.component.html',
  styleUrls: ['./definir.component.css']
})
export class DefinirComponent implements OnInit {
  paginaSelecionada: string;
  readonly pagina = 'pagina';

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.paginaSelecionada = (this.route.snapshot.paramMap.get(this.pagina));
  }
}
