import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestComponent } from "./test/test.component";
import { ResultsComponent } from "./results/results.component";

const routes: Routes = [
  { path: '', component: TestComponent, pathMatch: 'full' },
  { path: 'results/:id', component: ResultsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
