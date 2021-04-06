import { Component, OnInit } from '@angular/core';
import { StorageIntegracaoService } from '../shared/services/storage-intregacao.service';

@Component({
  selector: 'app-placar',
  templateUrl: './placar.component.html',
  styleUrls: ['./placar.component.scss']
})
export class PlacarComponent implements OnInit {

  constructor(
    private integracaoService: StorageIntegracaoService
  ) { }

  ngOnInit(): void {
    this.popularPlacar()
  }

  private popularPlacar(): any {
    const placar = this.integracaoService.lerPlacar();
  }
}
