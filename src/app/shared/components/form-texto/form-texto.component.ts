import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-form-texto',
  templateUrl: './form-texto.component.html',
  styleUrls: ['./form-texto.component.scss']
})
export class FormTextoComponent {

  @Input() formTexto;
  @Output() formTextoResultado = new EventEmitter();

  selecionarTexto(texto): void {
    this.formTextoResultado.emit(texto);
  }
}
