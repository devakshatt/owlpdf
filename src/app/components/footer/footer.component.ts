/**
 * Footer Component
 * @author    CodePrimus <akshataggarwal005@gmail.com>
 * @copyright Copyright (c) 2023

 */

import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footerMenuOptions: any = [];
  title: any;
  currentYear: any = 2021;

  constructor(private db: AngularFirestore) {
    let date = new Date();
    this.currentYear = date.getFullYear();
  }

  ngOnInit(): void {
    this.getBackendData();
    this.menus();
  }

  menus() {
    this.footerMenuOptions = {
      "Image Tools": [{ title: 'Compress', name: 'Compress Image', route: 'compress-image', img: "../../../../assets/img/image/compress.png" },
      { title: 'Images to PNG', name: 'Convert to PNG', route: 'image/convert-to-png', img: "../../../../assets/img/image/png.png" },
      { title: 'Images to JPEG', name: 'Convert to JPEG', route: 'image/convert-to-jpeg', img: "../../../../assets/img/image/jpg.png" },
      { title: 'Images to BMP', name: 'Convert to BMP', route: 'image/convert-to-bmp', img: "../../../../assets/img/image/image.png" },
      { title: 'Images to TIFF', name: 'Convert to TIFF', route: 'image/convert-to-tiff', img: "../../../../assets/img/image/tif.png" }
      ],
      "Conversion Tools": [
        { name: 'XML To JSON', route: 'xml-to-json' },
        { name: 'JSON To XML', route: 'json-to-xml' },
        { name: 'JSON To CSV', route: 'json-to-csv' },
        { name: 'CSV To JSON', route: 'csv-to-json' },
        { name: 'JSON TO TEXT', route: 'json-to-text' },
        { name: 'JSON TO TSV', route: 'json-to-tsv' },
        { name: 'TSV TO JSON', route: 'tsv-to-json' }
      ],
      "Encryption Tools": [
        { route: 'encryption-tools', name: "Encryption Tools" },
        { route: 'base64-encode', name: "Base64 Encode" },
        { route: 'base64-decode', name: "Base64 Decode" },
        { route: 'url-encode', name: "URL Encode" },
        { route: 'url-decode', name: "URL Decode" },
        { route: 'md2-hash-generator', name: "MD2 Hash Generator" },
        { route: 'md4-hash-generator', name: "MD4 Hash Generator" },
        { route: 'md5-hash-generator', name: "MD5 Hash Generator" },
        { route: 'sha1-hash-generator', name: "SHA1 Hash Generator" },
        { route: 'sha256-hash-generator', name: "SHA256 Hash Generator" },
        { route: 'sha512-hash-generator', name: "SHA512 Hash Generator" },
        { route: 'utf8-encode', name: "UTF8 Encode" },
        { route: 'utf8-decode', name: "UTF8 Decode" }
      ]
    }
  }

  // Get Website Information From Firebase Database 
  async getBackendData() {
    const websiteRef: any = this.db.collection('website-info').doc('admin');
    const doc = await websiteRef.get().toPromise();

    if (!doc.exists) {
      console.log('No such document!');
    } else {
      this.title = doc.data().title;
    }
  }
}
