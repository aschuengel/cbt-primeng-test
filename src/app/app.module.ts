import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocumentFlowComponent } from './document-flow/document-flow.component';

import { TreeTableModule } from 'primeng/treetable';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,
    DocumentFlowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TreeTableModule,
    ToastModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
