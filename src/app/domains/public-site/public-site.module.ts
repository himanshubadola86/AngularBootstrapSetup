import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { SharedModule } from 'src/app/shared/shared.module';
import { PublicSiteRoutingModule } from './public-site-routing.module';
import { PublicSiteComponent } from './public-site.component';
import { PublicHomeComponent } from 'src/app/features/public-home/public-home.component';


@NgModule({
  declarations: [
    PublicSiteComponent,
    PublicHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    PublicSiteRoutingModule

  ],
  exports: [
    PublicSiteComponent
  ]

})
export class PublicSiteModule { }
