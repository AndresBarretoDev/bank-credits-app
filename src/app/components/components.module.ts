import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseBancoComponent } from './base-banco/base-banco.component';



@NgModule({
  declarations: [
    BaseBancoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[BaseBancoComponent]
})
export class ComponentsModule { }
