/**
 * Encryption Tools Component
 * @author    CodePrimus <akshataggarwal005@gmail.com>
 * @copyright Copyright (c) 2023

 */

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encryption-tools-converter',
  templateUrl: './encryption-tools-converter.component.html',
  styleUrls: ['./encryption-tools-converter.component.scss']
})
export class EncryptionToolsConverterComponent implements OnInit {

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
