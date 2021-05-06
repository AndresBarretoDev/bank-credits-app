import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ZorroUiModule } from '../zorro-ui/zorro-ui.module';



@NgModule({
  declarations: [
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ZorroUiModule
  ],
  exports:[RegisterFormComponent]
})
export class ComponentsModule {}
