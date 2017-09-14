import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentChildComponent } from './student-child/student-child.component';
import { InputComponent } from './input/input.component';
import { AddComponent } from './add/add.component';
import { PrintingComponent } from './printing/printing.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentChildComponent,
    InputComponent,
    AddComponent,
    PrintingComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
