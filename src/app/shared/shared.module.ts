import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';

import { PageNotExistComponent } from './components/page-not-exist/page-not-exist.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ScrollSpyDirective } from './scroll-spy.directive';


@NgModule({
  declarations: [
    FooterComponent,
    PageNotExistComponent,
    NavbarComponent,
    ScrollSpyDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    ReactiveFormsModule,
    FooterComponent,
    NavbarComponent,
    PageNotExistComponent,
    ScrollSpyDirective
  ]
})
export class SharedModule { }
