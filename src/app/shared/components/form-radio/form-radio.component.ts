import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-radio',
  templateUrl: './form-radio.component.html',
  styleUrls: ['./form-radio.component.scss']
})
export class FormRadioComponent {
  @Input() formRadio;
  @Output() formRadioResultado = new EventEmitter();

  botaoConfirmar(radio): void {
    this.formRadioResultado.emit(radio);
  }
}
