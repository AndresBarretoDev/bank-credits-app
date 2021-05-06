import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ZorroUiModule } from '../zorro-ui/zorro-ui.module';
import { CardsComponent } from './cards/cards.component';



@NgModule({
  declarations: [
    RegisterFormComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ZorroUiModule
  ],
  exports:[RegisterFormComponent,CardsComponent]
})
export class ComponentsModule {}
