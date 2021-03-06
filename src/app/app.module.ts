import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import zh from '@angular/common/locales/zh';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TodoMenuComponent } from './todo-menu/todo-menu.component';
import { TodoModalEditComponent } from './todo-modal-edit/todo-modal-edit.component';
import { TodoComponent } from './todo/todo.component';
import { TodoMenuChildComponent } from './todo-menu/todo-menu-child.component';

registerLocaleData(zh);

@NgModule({
  declarations   : [
    AppComponent,
    TodoComponent,
    TodoMenuComponent,
    TodoMenuChildComponent,
    TodoModalEditComponent
  ],
  imports        : [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgZorroAntdModule
  ],
  entryComponents: [
    TodoModalEditComponent
  ],
  providers      : [ { provide: NZ_I18N, useValue: zh_CN } ],
  bootstrap      : [ AppComponent ]
})
export class AppModule {
}
