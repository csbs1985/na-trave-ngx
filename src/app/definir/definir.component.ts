import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-definir',
  templateUrl: './definir.component.html',
  styleUrls: ['./definir.component.css']
})
export class DefinirComponent implements OnInit {
  pagina: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.pagina = this.route.snapshot.paramMap.get('pagina');
    console.log(this.pagina);
  }
}
