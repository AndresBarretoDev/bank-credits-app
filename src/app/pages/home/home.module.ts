import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { ZorroUiModule } from 'src/app/zorro-ui/zorro-ui.module';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  imports: [ 
    CommonModule,
    HomeRoutingModule,
    ComponentsModule,
    ZorroUiModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
