import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

import { PublicSiteModule } from './domains/public-site/public-site.module';
import { SharedModule } from './shared/shared.module';
import { AboutUsComponent } from './features/about-us/about-us.component';
import { OurWorkComponent } from './features/our-work/our-work.component';
import { TestscrollComponent } from './features/testscroll/testscroll.component';
import { GetInvolvedComponent } from './features/get-involved/get-involved.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    OurWorkComponent,
    TestscrollComponent,
    GetInvolvedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    SharedModule,
    PublicSiteModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
