import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-public-site',
  templateUrl: './public-site.component.html',
  styleUrls: ['./public-site.component.scss']
})
export class PublicSiteComponent implements OnInit {

  currentSection = 'aboutus';

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


}
