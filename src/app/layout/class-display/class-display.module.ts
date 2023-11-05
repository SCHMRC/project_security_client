import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FreeComponent } from './free/free.component';
import { BusyComponent } from './busy/busy.component';
import { MaterialModule } from './../../module/material/material.module';


@NgModule({
  declarations: [
    FreeComponent,BusyComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [FreeComponent, BusyComponent]
})
export class ClassDisplayModule { }
