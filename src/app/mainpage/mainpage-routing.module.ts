import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainpageComponent } from './mainpage.component';


const routes: Routes = [
  {
    path: '',
    component: MainpageComponent
  }
];
// const routes: Routes = [{ path: '', component: MainpageComponent,
//   children:[
//     {}
//     // {path:'service', component: EmpregisterComponent},
//     // {path:'empProfile', component: EmpprofileComponent},
//     // {path:'empDetails', component: EmpdetailsComponent}
//   ]
// }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainpageRoutingModule { }
