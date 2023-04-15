/**
 * Conversion Tools Component
 * @author    AppsPlaces <appsplaces@gmail.com>
 * @copyright Copyright (c) 2021
 * @license   AppsPlaces
 */

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { MetaServiceService } from '../../services/meta-service.service';

@Component({
  selector: 'app-conversion-tools',
  templateUrl: './conversion-tools.component.html',
  styleUrls: ['./conversion-tools.component.scss']
})
export class ConversionToolsComponent implements OnInit {

  selectedRoute: any;
  input: any;
  output: any;
  loading = true;

  constructor(private router: Router,
    private cdr: ChangeDetectorRef,
    private metaService: MetaServiceService) { }

  ngOnInit(): void {
    this.router.events.subscribe((event: any) => {
      if (event.url) {
        this.loading = false;
        setTimeout(() => (this.loading = true), 200);
      }
    })
  }

  ngAfterViewChecked() {
    let url = this.router.url;
    let _url = url.split('/');
    this.selectedRoute = _url[1];

    let _url_ = url.split('-to-');
    this.input = _url_[0].split('/')[1];
    this.output = _url_[1];
    this.updateMetaTags();
    this.cdr.detectChanges();
  }

  // Update Meta Tags
  updateMetaTags(): void {
    let href = window.location.href;

    // Set Title
    this.metaService.setTitle('Conversion Tools');

    // Update Meta Values
    this.metaService.updateMetaTags({
      'description': `${this.input} to ${this.output} converter tools, ${this.input} converter, ${this.output} converter, online free ${this.input} to ${this.output} converter`,
      'keywords': `${this.input} to ${this.output} converter tools, ${this.input} converter, ${this.output} converter, online free ${this.input} to ${this.output} converter`,
      'ogUrl': href,
      'ogtitle': `${this.input} to ${this.output} converter tools, ${this.input} converter, ${this.output} converter, online free ${this.input} to ${this.output} converter`,
      'ogDescription': `${this.input} to ${this.output} converter tools, ${this.input} converter, ${this.output} converter, online free ${this.input} to ${this.output} converter`,
      'twitterUrl': href,
      'twitterTitle': `${this.input} to ${this.output} converter tools, ${this.input} converter, ${this.output} converter, online free ${this.input} to ${this.output} converter`,
      'twitterDescription': `${this.input} to ${this.output} converter tools, ${this.input} converter, ${this.output} converter, online free ${this.input} to ${this.output} converter`
    });
  }
}
