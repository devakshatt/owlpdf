/**
 * OCR Component
 * @author    CodePrimus <akshataggarwal005@gmail.com>
 * @copyright Copyright (c) 2023

 */

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { MetaServiceService } from '../../services/meta-service.service';

@Component({
  selector: 'app-ocr',
  templateUrl: './ocr.component.html',
  styleUrls: ['./ocr.component.scss']
})
export class OcrComponent implements OnInit {

  loading = true;

  constructor(private cdr: ChangeDetectorRef,
    private router: Router,
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
    this.updateMetaTags();
    this.cdr.detectChanges();
  }

  // Update Meta Tags
  updateMetaTags(): void {
    let href = window.location.href;

    // Set Title
    this.metaService.setTitle('Image To Text');

    // Set Others Keywords
    this.metaService.updateMetaTags({
      'description': `Free Online OCR service,ocr,online ocr,free ocr,ocr software,optical character recognition,jpeg to word,text recognition,image to text`,
      'keywords': `Free Online OCR service,ocr,online ocr,free ocr,ocr software,optical character recognition,jpeg to word,text recognition,image to text`,
      'ogUrl': href,
      'ogtitle': `Free Online OCR service,ocr,online ocr,free ocr,ocr software,optical character recognition,jpeg to word,text recognition,image to text`,
      'ogDescription': `Free Online OCR service,ocr,online ocr,free ocr,ocr software,optical character recognition,jpeg to word,text recognition,image to text`,
      'twitterUrl': href,
      'twitterTitle': `Free Online OCR service,ocr,online ocr,free ocr,ocr software,optical character recognition,jpeg to word,text recognition,image to text`,
      'twitterDescription': `Free Online OCR service,ocr,online ocr,free ocr,ocr software,optical character recognition,jpeg to word,text recognition,image to text`
    });
  }
}
