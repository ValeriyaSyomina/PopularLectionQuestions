import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MATERIAL_BUNDLE } from './material.bundle';

@NgModule({
  imports: [FormsModule, ReactiveFormsModule, ...MATERIAL_BUNDLE],
  exports: [FormsModule, ReactiveFormsModule, ...MATERIAL_BUNDLE]
})
export class SharedModule {}
