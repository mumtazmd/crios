import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NextProductDescComponent } from './nextprodoctdesc.component';


const routes: Routes = [
  {
    path: '',
    component: NextProductDescComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NextProductDescRoutingModule { }
