import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    TranslateModule
  ], 
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this for custom web components

})
export class SharedModule { } 