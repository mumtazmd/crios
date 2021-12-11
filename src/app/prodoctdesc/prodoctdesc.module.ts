import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDescRoutingModule } from './prodoctdesc-routing.module';
import { ProductDescComponent } from './prodoctdesc.component';

@NgModule({
  imports: [
    CommonModule,
    ProductDescRoutingModule
  ],
  declarations: [ProductDescComponent]
})
export class ProductDescComponentModule { }

