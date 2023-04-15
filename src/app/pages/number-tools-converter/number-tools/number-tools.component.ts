/**
 * Number Tools Component
 * @author    AppsPlaces <appsplaces@gmail.com>
 * @copyright Copyright (c) 2021
 * @license   AppsPlaces
 */

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NumberToolsService } from './number-tools.service';
import { MetaServiceService } from '../../../services/meta-service.service';
declare var saveAs: any;

@Component({
  selector: 'app-number-tools',
  templateUrl: './number-tools.component.html',
  styleUrls: ['./number-tools.component.scss']
})
export class NumberToolsComponent implements OnInit {

  title: string;
  subTitle: string;
  public text: any;
  showAlert: Boolean = false;
  copied: Boolean;
  url: any;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private numberToolsService: NumberToolsService,
    private metaService: MetaServiceService,
    private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.title = this.route.snapshot.data['title'];
    this.subTitle = this.route.snapshot.data['subTitle'];
    this.getRoutesInfo();
  }

  ngAfterViewChecked() {
    this.updateMetaTags();
    this.cdr.detectChanges();
  }

  getRoutesInfo(): void {
    let _url = this.router.url;
    this.url = _url.split('/')[1];
  }

  // Convert Function
  convert(data) {
    if (this.text) {
      if (data == 'numbers-to-words') {
        this.text = this.numberToolsService.numbersToWords(this.text);
      } else if (data == 'words-to-numbers') {
        this.text = this.numberToolsService.wordsToNumber(this.text);
      } else if (data == 'decimal-to-roman') {
        this.text = this.numberToolsService.decimalToRoman(this.text);
      } else if (data == 'roman-to-decimal') {
        this.text = this.numberToolsService.RomanToDecimal(this.text);
      } else if (data == 'binary-to-text') {
        this.text = this.numberToolsService.binary2Text(this.text);
      } else if (data == 'text-to-binary') {
        this.text = this.numberToolsService.text2Binary(this.text);
      } else if (data == 'binary-to-decimal') {
        this.text = this.numberToolsService.binary2decimal(this.text);
      } else if (data == 'binary-to-octal') {
        this.text = this.numberToolsService.binary2octal(this.text);
      } else if (data == 'binary-to-hex') {
        this.text = this.numberToolsService.binary2hex(this.text);
      } else if (data == 'decimal-to-hex') {
        this.text = this.numberToolsService.decimal2hex(this.text);
      } else if (data == 'decimal-to-binary') {
        this.text = this.numberToolsService.decimal2binary(this.text);
      } else if (data == 'decimal-to-octal') {
        this.text = this.numberToolsService.decimal2octal(this.text);
      } else if (data == 'hex-to-binary') {
        this.text = this.numberToolsService.hex2binary(this.text);
      } else if (data == 'hex-to-decimal') {
        this.text = this.numberToolsService.hex2decimal(this.text);
      } else if (data == 'hex-to-octal') {
        this.text = this.numberToolsService.hex2octal(this.text);
      } else if (data == 'octal-to-decimal') {
        this.text = this.numberToolsService.octal2decimal(this.text);
      } else if (data == 'octal-to-binary') {
        this.text = this.numberToolsService.octal2binary(this.text);
      } else if (data == 'octal-to-hex') {
        this.text = this.numberToolsService.octal2hex(this.text);
      } else if (data == 'text-to-ascii') {
        this.text = this.numberToolsService.text2ascii(this.text);
      } else if (data == 'ascii-to-text') {
        this.text = this.numberToolsService.ascii2text(this.text);
      } else if (data == 'text-to-octal') {
        this.text = this.numberToolsService.text2octal(this.text);
      } else if (data == 'octal-to-text') {
        this.text = this.numberToolsService.octal2text(this.text);
      } else if (data == 'text-to-hex') {
        this.text = this.numberToolsService.text2hex(this.text);
      } else if (data == 'hex-to-text') {
        this.text = this.numberToolsService.hex2text(this.text);
      } else if (data == 'text-to-decimal') {
        this.text = this.numberToolsService.text2decimal(this.text);
      } else if (data == 'decimal-to-text') {
        this.text = this.numberToolsService.decimal2text(this.text);
      }
    } else {
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 3000)
    }
  }

  // Copy to Clipboard Function
  copyClipboard(inputElement) {
    this.copied = true;
    setTimeout(() => {
      this.copied = false;
    }, 3000)
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }

  // Clear Function
  clear() {
    this.text = '';
  }

  // Download function
  download() {
    var blob = new Blob([this.text], { type: "text/plain;charset=utf-8" });
    saveAs(blob, `textagram.txt`);
  }

  // Update Meta Tags
  updateMetaTags(): void {
    let href = window.location.href;

    // Set Title
    this.metaService.setTitle(this.title);

    // Set Others Keywords
    this.metaService.updateMetaTags({
      'description': `${this.subTitle}`,
      'keywords': `${this.title}`,
      'ogUrl': href,
      'ogtitle': `${this.title}`,
      'ogDescription': `${this.subTitle}`,
      'twitterUrl': href,
      'twitterTitle': `${this.title}`,
      'twitterDescription': `${this.subTitle}`
    });
  }
}
