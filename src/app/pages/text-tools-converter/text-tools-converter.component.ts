/**
 * Text Tools Converter Components
 * @author    AppsPlaces <appsplaces@gmail.com>
 * @copyright Copyright (c) 2021
 * @license   AppsPlaces
 */

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-text-tools-converter',
  templateUrl: './text-tools-converter.component.html',
  styleUrls: ['./text-tools-converter.component.scss']
})
export class TextToolsConverterComponent implements OnInit {

  selectedRoute: any;
  loading = true;

  constructor(private router: Router,
    private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.router.events.subscribe((event: any) => {
      if (event.url) {
        this.loading = false;
        setTimeout(() => (this.loading = true), 200);
      }
    })
  }

  ngAfterViewChecked() {
    let url: any = this.router.url;
    url = url.split('/');
    this.selectedRoute = url[1];
    this.cdr.detectChanges();
  }
}
