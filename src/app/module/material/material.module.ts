import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';

const MATERIAL: any[] = [
  MatButtonModule,
  MatTableModule,
  MatTabsModule
]

@NgModule({
  imports: [...MATERIAL],
  exports: [...MATERIAL]
})
export class MaterialModule { }
