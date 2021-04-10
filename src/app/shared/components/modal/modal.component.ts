import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() titulo: string;
  @Input() descricao?: string;
  @Output() modalResultado = new EventEmitter();

  readonly btnCancelar = 'cancelar';
  readonly btnConfirmar = 'confirmar';

  constructor(
    private modalService: ModalService
  ) { }

  modalFechar() {
    this.modalService.isModalAberto = false;
  }

  modalConfirmar() {
    this.modalFechar();
    this.modalResultado.emit();
  }

  get isModalAberto(): boolean {
    return this.modalService.isModalAberto;
  }
}
