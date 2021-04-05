import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-texto',
  templateUrl: './form-texto.component.html',
  styleUrls: ['./form-texto.component.scss']
})
export class FormTextoComponent implements OnInit {

  @Input() formTexto;

  constructor() { }

  ngOnInit(): void {
  }
}
