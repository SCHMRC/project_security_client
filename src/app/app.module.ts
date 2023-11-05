import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { AppRoutingModule, COMPONENTS } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './module/material/material.module';
import { ClassDisplayComponent } from './layout/class-display/class-display.component';
import { ClassDisplayModule } from './layout/class-display/class-display.module'




@NgModule({
  declarations: [
    AppComponent,
    ...COMPONENTS,
    ClassDisplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ClassDisplayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
