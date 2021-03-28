import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal.component';

@NgModule({
  declarations: [PrincipalComponent],
  exports: [PrincipalComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PrincipalModule { }
