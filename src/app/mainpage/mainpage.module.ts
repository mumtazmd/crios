import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainpageRoutingModule } from './mainpage-routing.module';
import { MainpageComponent } from './mainpage.component';
import { HeaderModule } from '../header/header.module';
import { SliderModule } from '../slider/slider.module';
import { ChildComponent } from './child/child.component';
import { ProductComponent } from './product/product.component';
import { OrgtestimonialsComponent } from './orgtestimonials/orgtestimonials.component';
import { SubscribefooComponent } from './subscribefoo/subscribefoo.component';




@NgModule({
  imports: [
    CommonModule,
    MainpageRoutingModule,
    HeaderModule,
    SliderModule
  ],
  declarations: [MainpageComponent, ChildComponent, ProductComponent, OrgtestimonialsComponent, SubscribefooComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MainpageModule { }

