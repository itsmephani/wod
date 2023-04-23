import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WodComponent } from './components/wod/wod.component';

const routes: Routes = [
  { path: '', component: WodComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
