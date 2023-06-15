import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentFlowComponent } from './document-flow/document-flow.component';

const routes: Routes = [
  { path: '', component: DocumentFlowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
