import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PublicHomeComponent } from 'src/app/features/public-home/public-home.component';
import { AboutUsComponent } from 'src/app/features/about-us/about-us.component';
import { TestscrollComponent } from 'src/app/features/testscroll/testscroll.component';
import { GetInvolvedComponent } from 'src/app/features/get-involved/get-involved.component';
import { OurWorkComponent } from 'src/app/features/our-work/our-work.component';

const routes: Routes = [
  {
    /** this is your public site welcome page */
    path: '',
    component: PublicHomeComponent,
    children: [
      {
        path: '', component: PublicHomeComponent
      }
    ]
  },
  { path: 'about/:sectionId', component: AboutUsComponent },
  { path: 'test', component: TestscrollComponent },
  { path: 'work/:sectionId', component: OurWorkComponent },
  { path: 'involved', component: GetInvolvedComponent },
  {
    /** this is for page not found */
    path: '**',
    redirectTo: ''
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PublicSiteRoutingModule { }
