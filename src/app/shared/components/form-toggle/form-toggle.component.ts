import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-toggle',
  templateUrl: './form-toggle.component.html',
  styleUrls: ['./form-toggle.component.scss']
})
export class FormToggleComponent {

  @Input() formToggle;
  @Output() formToggleResultado = new EventEmitter();

  isFormToggle = true;

  formToggleMudou(): void {
    this.isFormToggle = !this.isFormToggle;
    this.formToggleResultado.emit(this.isFormToggle);
  }
}
