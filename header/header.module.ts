import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [
    CommonModule,
    HeaderRoutingModule
  ],
  exports:[  
    HeaderComponent
      ],
  declarations: [HeaderComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HeaderModule { }

