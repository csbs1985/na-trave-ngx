import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { ServicesModule } from 'src/app/shared/services/services.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    ServicesModule,
  ]
})
export class SharedModule { }
