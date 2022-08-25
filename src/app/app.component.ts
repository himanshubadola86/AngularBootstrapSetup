import { Component, OnInit, Renderer2, ElementRef, ViewChild, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Meta } from '@angular/platform-browser';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = 0;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AngularBootstrapSetup';

  @ViewChild(NavbarComponent, { static: false }) navbar: NavbarComponent;
  @ViewChild('navigation') el:ElementRef;

  // constructor(private metaTagService: Meta, private renderer: Renderer2, private router: Router, private element: ElementRef, public location: Location) {

  // }

  // @HostListener('window:scroll', ['$event'])
  // hasScrolled() {

  //   var st = window.pageYOffset;
  //   // Make sure they scroll more than delta
  //   if (Math.abs(lastScrollTop - st) <= delta)
  //     return;

  //   var navbar = document.getElementsByTagName('nav')[0];

  //   // If they scrolled down and are past the navbar, add class .nav-up.
  //   // This is necessary so you never see what is "behind" the navbar.
  //   if (st > lastScrollTop && st > navbarHeight) {
  //     // Scroll Down
  //     if (navbar.classList.contains('nav-down')) {
  //       navbar.classList.remove('nav-down');
  //       navbar.classList.add('nav-up');
  //     }
  //     // $('.navbar.nav-down').removeClass('nav-down').addClass('nav-up');
  //   } else {
  //     // Scroll Up
  //     //  $(window).height()
  //     if (st + window.innerHeight < document.body.scrollHeight) {
  //       // $('.navbar.nav-up').removeClass('nav-up').addClass('nav-down');
  //       if (navbar.classList.contains('nav-up')) {
  //         navbar.classList.remove('nav-up');
  //         navbar.classList.add('nav-down');
  //       }
  //     }
  //   }

  //   lastScrollTop = st;
  // };


  ngOnInit() {
    // this.metaTagService.addTags([
    //   // { name: 'keywords', content: 'test' },
    //   { name: 'robots', content: 'index, follow' },
    //   { name: 'author', content: 'Himanshu Badola' },
    //   { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
    //   { name: 'x-ua-compatible', content: 'ie=edge' },
    //   // { name: 'date', content: '2019-10-31', scheme: 'YYYY-MM-DD' },
    //   { charset: 'UTF-8' }
    // ]);
    // var navbar : HTMLElement = this.el.nativeElement;
    //  this.renderer.listen('window', 'scroll', (event) => {
    //             const number = window.scrollY;
    //             if (number > 50 || window.pageYOffset > 50) {
    //                     // add logic
    //                     navbar.classList.remove('navbar-transparent');
    //                     this.el.nativeElement.classList.remove('navbar-transparent');
    //                 }
    //   });
        //this.hasScrolled();

  }
}
