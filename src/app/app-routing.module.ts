import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';


const routes: Routes = [
  {
    path: 'header',
    loadChildren: () => import('./header/header.module').then(m => m.HeaderModule)
  },
  {
    path: 'slider',
    loadChildren: () => import('./slider/slider.module').then(m => m.SliderModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./services/services.module').then(m => m.ServicesModule)
  },
  {
    path: 'content',
    loadChildren: () => import('./content/content.module').then(m => m.ContentModule)
  },
  {
    path: 'productdesc',
    loadChildren: () => import('./prodoctdesc/prodoctdesc.module').then(m => m.ProductDescComponentModule)
  },
  {
    path: 'nextproductdesc',
    loadChildren: () => import('./nextprodoctdesc/nextprodoctdesc.module').then(m => m.NextProductDescComponentModule)
  },
  {
    path: 'testimonials',
    loadChildren: () => import('./testimonials/testimonials.module').then(m => m.TestimonialsModule)
  },
  {
    path: 'subscribe',
    loadChildren: () => import('./subscribe/subscribe.module').then(m => m.SubscribeModule)
  },
  {
    path: 'footer',
    loadChildren: () => import('./footer/footer.module').then(m => m.FooterModule)
  },

  // {
  //   path: 'mainpage',
  //    component:MainpageComponent
  // },
  {
    path: 'mainpage',
    loadChildren: () => import('./mainpage/mainpage.module').then(m => m.MainpageModule)
  },
  // {
  //   path: 'mainpage',
  //   component:MainpageComponent,
  //   children:[
  //     {
  //       path: 'services',
  //       loadChildren: () => import('./services/services.module').then(m => m.ServicesModule)

  //     }
  //   ]

  // },
  {
    path: '',
    redirectTo: 'mainpage',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }


