import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';

const zorroModules =[
  NzLayoutModule,
  NzMenuModule,
  NzCardModule,
  NzGridModule,
  NzSelectModule,
  NzButtonModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...zorroModules
  ],
  exports:[ ...zorroModules]
})
export class ZorroUiModule { }
