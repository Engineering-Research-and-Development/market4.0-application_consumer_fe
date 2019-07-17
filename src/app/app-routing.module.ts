import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessageIdsComponent } from './component/message-ids.component';

const routes: Routes = [
  { path:'', component: MessageIdsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }