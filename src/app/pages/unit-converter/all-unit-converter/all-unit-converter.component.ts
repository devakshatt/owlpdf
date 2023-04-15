/**
 * Main Unit Converter Component
 * @author    AppsPlaces <appsplaces@gmail.com>
 * @copyright Copyright (c) 2021
 * @license   AppsPlaces
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as unitConverter from 'convert-units';
import { DetectMobileService } from '../../../services/detect-mobile.service';
import { MetaServiceService } from '../../../services/meta-service.service';

@Component({
  selector: 'app-all-unit-converter',
  templateUrl: './all-unit-converter.component.html',
  styleUrls: ['./all-unit-converter.component.css']
})
export class AllUnitConverterComponent implements OnInit {

  param: any;
  allData: any;
  fromSelect: any;
  toSelect: any;
  from: any;
  to: any;
  allPossibleRoutes: any;
  isMobile: any;

  constructor(private router: Router,
    private detectMobileService: DetectMobileService,
    private metaService: MetaServiceService) {
  }

  ngOnInit() {
    this.initialize();
    this.detectMobile();
  }

  async initialize() {
    this.allPossibleRoutes = [];
    this.allData = [];

    let url = this.router.url;
    let _url = url.split('/');
    this.param = _url[1].split('-')[0];
    this.from = 1;

    this.allData = await unitConverter().list(this.param.toString());
    this.fromSelect = [this.allData[0].abbr];
    this.toSelect = [this.allData[0].abbr];
  }

  ngAfterViewInit() {
    this.updateMetaTags();
  }

  detectMobile() {
    this.isMobile = this.detectMobileService.isMobile();
  }

  changeFrom(): void {
    this.to = unitConverter(this.from).from(this.fromSelect.toString()).to(this.toSelect.toString());
  }

  changeSelectFrom(fromSelect): void {
    if (!this.isMobile) {
      this.fromSelect = [fromSelect[fromSelect.length - 1]];
    }

    this.to = unitConverter(this.from).from(this.fromSelect.toString()).to(this.toSelect.toString());
  }

  changeSelectTo(toSelect): void {
    if (!this.isMobile) {
      this.toSelect = [toSelect[toSelect.length - 1]];
    }

    this.to = unitConverter(this.from).from(this.fromSelect.toString()).to(this.toSelect.toString());
  }

  getValue(from, to) {
    return unitConverter(1).from(from.toString()).to(to.toString());
  }

  // Update Meta Tags
  updateMetaTags() {
    let href = window.location.href;
    this.allData = unitConverter().list(this.param.toString());

    // Set Title
    this.metaService.setTitle(`${this.param.toString()} converter`);

    // Set Others Keywords
    this.metaService.updateMetaTags({
      'description': `${this.param} converter, convert ${this.param}, ${this.allData.map(e => e.singular).join(" converter, ")}`,
      'keywords': `${this.param} converter, convert ${this.param}, ${this.allData.map(e => e.singular).join(" converter, ")}`,
      'ogUrl': href,
      'ogtitle': `${this.param} converter, convert ${this.param}, ${this.allData.map(e => e.singular).join(" converter, ")}`,
      'ogDescription': `${this.param} converter, convert ${this.param}, ${this.allData.map(e => e.singular).join(" converter, ")}`,
      'twitterUrl': href,
      'twitterTitle': `${this.param} converter, convert ${this.param}, ${this.allData.map(e => e.singular).join(" converter, ")}`,
      'twitterDescription': `${this.param} converter, convert ${this.param}, ${this.allData.map(e => e.singular).join(" converter, ")}`
    });
  }
}
