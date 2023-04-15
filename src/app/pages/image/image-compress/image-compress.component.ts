/**
 * Image Compress Component
 * @author    AppsPlaces <akshataggarwal005@gmail.com>
 * @copyright Copyright (c) 2023

 */

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-compress',
  templateUrl: './image-compress.component.html',
  styleUrls: ['./image-compress.component.css']
})
export class ImageCompressComponent implements OnInit {

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
