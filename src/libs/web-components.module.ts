import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {defineCustomElements} from '@web-components/loader';
import { NewButton } from './stencil-generated/proxies';

defineCustomElements(window);

@NgModule({
  declarations: [NewButton],
  imports: [
    CommonModule
  ],
  exports: [NewButton]
})
export class WebComponentsModule { }
