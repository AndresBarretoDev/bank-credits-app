import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from 'src/app/components/components.module';

import { RegisterRoutingModule } from './register-routing.module';

import { RegisterComponent } from './register.component';


@NgModule({
  imports: [
    RegisterRoutingModule, 
    ComponentsModule,
    CommonModule
  ],
  declarations: [RegisterComponent],
  exports: [RegisterComponent]
})
export class RegisterModule { }
