import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { InterfacesModule } from 'src/app/shared/interfaces/interfaces.module';
import { ServicesModule } from 'src/app/shared/services/services.module';
import { EnumModule } from './enum/enum.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    InterfacesModule,
    ServicesModule,
    EnumModule
  ]
})
export class SharedModule { }
