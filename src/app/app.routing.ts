import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { PublicSiteComponent } from './domains/public-site/public-site.component';
import { PageNotExistComponent } from './shared/components/page-not-exist/page-not-exist.component';

const routes: Routes = [
  {
    /** this is your default home page */
    path: '',
    redirectTo: 'public-home',
    pathMatch: 'full'
  },
  {
    /** this is for page not found */
    path: 'public-home',
    component: PublicSiteComponent,
    loadChildren: './domains/public-site/public-site.module#PublicSiteModule'

  },
  {
    /** this is for page not found */
    path: '**',
    component: PageNotExistComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
