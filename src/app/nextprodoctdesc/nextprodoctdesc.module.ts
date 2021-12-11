import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NextProductDescRoutingModule } from './nextprodoctdesc-routing.module';
import { NextProductDescComponent } from './nextprodoctdesc.component';

@NgModule({
  imports: [
    CommonModule,
    NextProductDescRoutingModule
  ],
  declarations: [NextProductDescComponent]
})
export class NextProductDescComponentModule { }

