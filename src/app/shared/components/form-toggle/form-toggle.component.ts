import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-toggle',
  templateUrl: './form-toggle.component.html',
  styleUrls: ['./form-toggle.component.scss']
})
export class FormToggleComponent implements OnInit {

  formToggle = {
    titulo: 'titulo',
    descricao: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
