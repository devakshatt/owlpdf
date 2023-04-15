/**
 * Encryption Tools Component
 * @author    AppsPlaces <appsplaces@gmail.com>
 * @copyright Copyright (c) 2021
 * @license   AppsPlaces
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encryption-tools-component',
  templateUrl: './encryption-tools-component.component.html',
  styleUrls: ['./encryption-tools-component.component.scss']
})
export class EncryptionToolsComponentComponent implements OnInit {

  selected: any = -1;
  encryptionTools: any;

  constructor() { }

  ngOnInit(): void {
    this.encryptionTools = [
      { path: 'encryption-tools', title: "Encryption Tools" },
      { path: 'base64-encode', title: "Base64 Encode" },
      { path: 'base64-decode', title: "Base64 Decode" },
      { path: 'url-encode', title: "URL Encode" },
      { path: 'url-decode', title: "URL Decode" },
      { path: 'md2-hash-generator', title: "MD2 Hash Generator" },
      { path: 'md4-hash-generator', title: "MD4 Hash Generator" },
      { path: 'md5-hash-generator', title: "MD5 Hash Generator" },
      { path: 'sha1-hash-generator', title: "SHA1 Hash Generator" },
      { path: 'sha256-hash-generator', title: "SHA256 Hash Generator" },
      { path: 'sha512-hash-generator', title: "SHA512 Hash Generator" },
      { path: 'utf8-encode', title: "UTF8 Encode" },
      { path: 'utf8-decode', title: "UTF8 Decode" }
    ];
  }

  mouseOver(classNum) {
    this.selected = classNum;
  }
}
