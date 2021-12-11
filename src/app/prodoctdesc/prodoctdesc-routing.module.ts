import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductDescComponent } from './prodoctdesc.component';


const routes: Routes = [
  {
    path: '',
    component: ProductDescComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductDescRoutingModule { }
