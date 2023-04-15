/**
 * Encryption Tools Component
 * @author    AppsPlaces <appsplaces@gmail.com>
 * @copyright Copyright (c) 2021
 * @license   AppsPlaces
 */

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EncryptionToolsService } from './encryption-tools.service';
import { MetaServiceService } from '../../../services/meta-service.service';

declare var saveAs: any;

@Component({
  selector: 'app-encryption-tools',
  templateUrl: './encryption-tools.component.html',
  styleUrls: ['./encryption-tools.component.scss']
})

export class EncryptionToolsComponent implements OnInit {

  title: string;
  subTitle: string;
  text: any;
  showAlert: Boolean = false;
  copied: Boolean;
  url: any;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private encryptionToolsService: EncryptionToolsService,
    private metaService: MetaServiceService,
    private cdr: ChangeDetectorRef) { }

  ngOnInit() {
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
      if (data == 'base64-encode') {
        this.text = this.encryptionToolsService.base64Encode(this.text);
      } else if (data == 'base64-decode') {
        this.text = this.encryptionToolsService.base64Decode(this.text);
      } else if (data == 'url-encode') {
        this.text = this.encryptionToolsService.urlEncode(this.text);
      } else if (data == 'url-decode') {
        this.text = this.encryptionToolsService.urlDecode(this.text);
      } else if (data == 'md2-hash-generator') {
        this.text = this.encryptionToolsService.md2hashGenerator(this.text);
      } else if (data == 'md4-hash-generator') {
        this.text = this.encryptionToolsService.md4hashGenerator(this.text);
      } else if (data == 'md5-hash-generator') {
        this.text = this.encryptionToolsService.md5hashGenerator(this.text);
      } else if (data == 'sha1-hash-generator') {
        this.text = this.encryptionToolsService.sha1hashGenerator(this.text);
      } else if (data == 'sha256-hash-generator') {
        this.text = this.encryptionToolsService.sha256hashGenerator(this.text);
      } else if (data == 'sha512-hash-generator') {
        this.text = this.encryptionToolsService.sha512hashGenerator(this.text);
      } else if (data == 'utf8-encode') {
        this.text = this.encryptionToolsService.utf8Encode(this.text);
      } else if (data == 'utf8-decode') {
        this.text = this.encryptionToolsService.utf8Decode(this.text);
      }
    } else {
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 3000)
    }
  }

  // Copy To Clipboard Function
  copyClipboard(inputElement) {
    this.copied = true;
    setTimeout(() => {
      this.copied = false;
    }, 3000)
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }

  // Clear Input Box
  clear() {
    this.text = '';
  }

  // Download Function
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
