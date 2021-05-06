import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { NewsRoutingModule } from './news-page-routing.module';

import { NewsPageComponent } from './news-page.component';
import { ZorroUiModule } from 'src/app/zorro-ui/zorro-ui.module';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  imports: [ 
    CommonModule,
    NewsRoutingModule,
    ComponentsModule,
    ZorroUiModule
  ],
  declarations: [NewsPageComponent],
  exports: [NewsPageComponent]
})
export class NewsModule { }
