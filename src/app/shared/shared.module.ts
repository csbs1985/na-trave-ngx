import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { ServicesModule } from 'src/app/shared/services/services.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    ServicesModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
