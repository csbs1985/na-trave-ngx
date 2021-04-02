import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../shared/components/components.module';
import { PrincipalComponent } from './principal.component';

@NgModule({
  declarations: [PrincipalComponent],
  exports: [PrincipalComponent],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PrincipalModule { }
