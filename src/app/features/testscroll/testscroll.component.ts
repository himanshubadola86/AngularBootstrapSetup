import { Component, OnInit } from '@angular/core';
import { ScrollSpyDirective } from '../../shared/scroll-spy.directive';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-testscroll',
  templateUrl: './testscroll.component.html',
  styleUrls: ['./testscroll.component.scss']
})
export class TestscrollComponent implements OnInit {

  currentSection = 'section1';

  constructor(private _router: Router, private _route: ActivatedRoute, private _location: Location) {
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.currentSection = params['sectionId'];
      this.scrollTo(this.currentSection);
    });
  }

  onSectionChange(sectionId: string) {
    this._location.go(sectionId);
    this.currentSection = sectionId;
  }

  scrollTo(section) {
    document.querySelector('#' + section)
      .scrollIntoView();
  }



  // constructor() { }

  // ngOnInit(): void {
  // }

}
