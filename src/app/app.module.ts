import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ModelComponent } from './model/model.component';
import { DirectiveComponent } from './directive/directive.component';
import { ForLoopComponent } from './for-loop/for-loop.component';
import { SwitchComponent } from './switch/switch.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { PipeDateComponent } from './pipe-date/pipe-date.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { FormsComponent } from './forms/forms.component';
import { FormvalidateComponent } from './formvalidate/formvalidate.component';
import { FormvalidationComponent } from './formvalidation/formvalidation.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ModelComponent,
    DirectiveComponent,
    ForLoopComponent,
    SwitchComponent,
    NgstyleComponent,
    NgclassComponent,
    PipeDateComponent,
    BootstrapComponent,
    FormsComponent,
    FormvalidateComponent,
    FormvalidationComponent,
    ReactiveformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
