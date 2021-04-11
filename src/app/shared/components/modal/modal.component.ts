import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Modal } from '../../models/modal.module';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() modalObject: Modal;
  @Output() modalResultado = new EventEmitter();

  readonly btnCancelar = 'cancelar';

  constructor(
    private modalService: ModalService
  ) { }

  modalFechar() {
    this.modalService.isModalAberto = false;
  }

  modalConfirmar() {
    this.modalFechar();
    this.modalResultado.emit(this.modalObject.botao);
  }

  get isModalAberto(): boolean {
    return this.modalService.isModalAberto;
  }
}
