/**
 * Sub Unit Converter Component
 * @author    AppsPlaces <appsplaces@gmail.com>
 * @copyright Copyright (c) 2021
 * @license   AppsPlaces
 */

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import * as unitConverter from 'convert-units';
import { MetaServiceService } from '../../../services/meta-service.service';

@Component({
  selector: 'app-each-unit-converter',
  templateUrl: './each-unit-converter.component.html',
  styleUrls: ['./each-unit-converter.component.css']
})
export class EachUnitConverterComponent implements OnInit, AfterViewInit {

  param1: any;
  param2: any;
  fromInput: any;
  toInput: any;
  param1Details: any;
  param2Details: any;
  posibilities: any;
  allPossibleRoutes: any;

  constructor(private router: Router,
    private metaService: MetaServiceService) { }

  ngOnInit() {
    this.initialize();
  }

  ngAfterViewInit() {
    this.updateMetaTags();
  }

  async initialize() {
    let url = this.router.url;
    let params = url.split('to');
    let _param1 = params[0].slice(0, -1);
    this.param1 = _param1.replace('/', '');
    this.param2 = params[1].replace('-', '');
    this.param1Details = await unitConverter().describe(this.param1.toString());
    this.param2Details = await unitConverter().describe(this.param2.toString());
  }

  changeFrom() {
    this.toInput = unitConverter(this.fromInput).from(this.param1.toString()).to(this.param2.toString());
  }

  changeTo() {
    this.fromInput = unitConverter(this.toInput).from(this.param2.toString()).to(this.param1.toString());
  }

  getValue(value, from, to) {
    return unitConverter(value).from(from.toString()).to(to.toString());
  }

  clear() {
    this.toInput = 0;
    this.fromInput = 0;
  }

  convert() {
    this.changeFrom();
  }

  // Update Meta Tags
  updateMetaTags() {
    let href = window.location.href;

    // Set Title
    this.metaService.setTitle(`${this.param1Details.singular} to ${this.param2Details.singular} converter`);

    // Set Others Keywords
    this.metaService.updateMetaTags({
      'description': `${this.param1Details.singular} to ${this.param2Details.singular} converter, ${this.param2Details.singular} to ${this.param1Details.singular} converter, ${this.param2Details.singular} to ${this.param1Details.singular}, ${this.param1Details.singular} to ${this.param2Details.singular}, ${this.param1} to ${this.param2}, ${this.param2} to ${this.param1}, ${this.param1}-${this.param2}, ${this.param2}-${this.param1}, ${this.param1Details.singular}-${this.param2Details.singular}, ${this.param2Details.singular}-${this.param1Details.singular}, ${this.param2Details.singular}-${this.param1Details.singular} convert, convert ${this.param2Details.singular}-${this.param1Details.singular}, ${this.param2Details.singular}-${this.param1Details.singular} conversion, ${this.param1Details.singular}-${this.param2Details.singular} conversion, convert ${this.param1Details.singular}-${this.param2Details.singular}, convert ${this.param1}-${this.param2}, convert ${this.param2}-${this.param1}, ${this.param1}-${this.param2} convert, ${this.param2}-${this.param1} convert`,
      'keywords': `${this.param1Details.singular} to ${this.param2Details.singular} converter, ${this.param2Details.singular} to ${this.param1Details.singular} converter, ${this.param2Details.singular} to ${this.param1Details.singular}, ${this.param1Details.singular} to ${this.param2Details.singular}, ${this.param1} to ${this.param2}, ${this.param2} to ${this.param1}, ${this.param1}-${this.param2}, ${this.param2}-${this.param1}, ${this.param1Details.singular}-${this.param2Details.singular}, ${this.param2Details.singular}-${this.param1Details.singular}, convert ${this.param1}-${this.param2}, convert ${this.param2}-${this.param1}, ${this.param1}-${this.param2} convert, ${this.param2}-${this.param1} convert`,
      'ogUrl': href,
      'ogtitle': `${this.param1Details.singular} to ${this.param2Details.singular} converter, ${this.param2Details.singular} to ${this.param1Details.singular} converter, ${this.param2Details.singular} to ${this.param1Details.singular}, ${this.param1Details.singular} to ${this.param2Details.singular}, ${this.param1} to ${this.param2}, ${this.param2} to ${this.param1}, ${this.param1}-${this.param2}, ${this.param2}-${this.param1}, ${this.param1Details.singular}-${this.param2Details.singular}, ${this.param2Details.singular}-${this.param1Details.singular}, convert ${this.param1}-${this.param2}, convert ${this.param2}-${this.param1}, ${this.param1}-${this.param2} convert, ${this.param2}-${this.param1} convert`,
      'ogDescription': `${this.param1Details.singular} to ${this.param2Details.singular} converter, ${this.param2Details.singular} to ${this.param1Details.singular} converter, ${this.param2Details.singular} to ${this.param1Details.singular}, ${this.param1Details.singular} to ${this.param2Details.singular}, ${this.param1} to ${this.param2}, ${this.param2} to ${this.param1}, ${this.param1}-${this.param2}, ${this.param2}-${this.param1}, ${this.param1Details.singular}-${this.param2Details.singular}, ${this.param2Details.singular}-${this.param1Details.singular}, ${this.param2Details.singular}-${this.param1Details.singular} convert, convert ${this.param2Details.singular}-${this.param1Details.singular}, ${this.param2Details.singular}-${this.param1Details.singular} conversion, ${this.param1Details.singular}-${this.param2Details.singular} conversion, convert ${this.param1Details.singular}-${this.param2Details.singular}, convert ${this.param1}-${this.param2}, convert ${this.param2}-${this.param1}, ${this.param1}-${this.param2} convert, ${this.param2}-${this.param1} convert`,
      'twitterUrl': href,
      'twitterTitle': `${this.param1Details.singular} to ${this.param2Details.singular} converter, ${this.param2Details.singular} to ${this.param1Details.singular} converter, ${this.param2Details.singular} to ${this.param1Details.singular}, ${this.param1Details.singular} to ${this.param2Details.singular}, ${this.param1} to ${this.param2}, ${this.param2} to ${this.param1}, ${this.param1}-${this.param2}, ${this.param2}-${this.param1}, ${this.param1Details.singular}-${this.param2Details.singular}, ${this.param2Details.singular}-${this.param1Details.singular}, convert ${this.param1}-${this.param2}, convert ${this.param2}-${this.param1}, ${this.param1}-${this.param2} convert, ${this.param2}-${this.param1} convert`,
      'twitterDescription': `${this.param1Details.singular} to ${this.param2Details.singular} converter, ${this.param2Details.singular} to ${this.param1Details.singular} converter, ${this.param2Details.singular} to ${this.param1Details.singular}, ${this.param1Details.singular} to ${this.param2Details.singular}, ${this.param1} to ${this.param2}, ${this.param2} to ${this.param1}, ${this.param1}-${this.param2}, ${this.param2}-${this.param1}, ${this.param1Details.singular}-${this.param2Details.singular}, ${this.param2Details.singular}-${this.param1Details.singular}, ${this.param2Details.singular}-${this.param1Details.singular} convert, convert ${this.param2Details.singular}-${this.param1Details.singular}, ${this.param2Details.singular}-${this.param1Details.singular} conversion, ${this.param1Details.singular}-${this.param2Details.singular} conversion, convert ${this.param1Details.singular}-${this.param2Details.singular}, convert ${this.param1}-${this.param2}, convert ${this.param2}-${this.param1}, ${this.param1}-${this.param2} convert, ${this.param2}-${this.param1} convert`
    });
  }
}
