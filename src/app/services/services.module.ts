import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';

@NgModule({
  imports: [
    CommonModule,
    ServicesRoutingModule
  ],
  exports:[  
    // ServicesModule
      ],
  declarations: [ServicesComponent, ServiceDetailsComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ServicesModule { }


