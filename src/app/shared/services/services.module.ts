import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormatarHoraService } from './formatar-hora.service';
import { RandomService } from './random.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    FormatarHoraService,
    RandomService
  ]
})
export class ServicesModule { }
