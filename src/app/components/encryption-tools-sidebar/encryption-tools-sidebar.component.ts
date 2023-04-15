/**
 * Encryption Tools Sidebar
 * @author    AppsPlaces <appsplaces@gmail.com>
 * @copyright Copyright (c) 2021
 * @license   AppsPlaces
 */

import { Component, OnInit, Input } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-encryption-tools-sidebar',
  templateUrl: './encryption-tools-sidebar.component.html',
  styleUrls: ['./encryption-tools-sidebar.component.scss']
})
export class EncryptionToolsSidebarComponent implements OnInit {


  @Input() selectedRoute: string;
  sideMenuOptions: any = [];
  title: any = '';
  logo: any;

  constructor(public sidebarService: SidebarService,
    private db: AngularFirestore,
    private storage: AngularFireStorage) { }

  ngOnInit(): void {
    this.menus();
    this.sidebarFunc();
    this.getBackendData();
  }

  // Get Website Information From Firebase Database 
  async getBackendData() {
    const websiteRef: any = this.db.collection('website-info').doc('admin');
    const doc = await websiteRef.get().toPromise();

    if (!doc.exists) {
      console.log('No such document!');
    } else {
      this.title = doc.data().title;
      var starsRef = await this.storage.ref(doc.data().path);
      this.logo = await starsRef.getDownloadURL().toPromise();
    }
  }

  menus() {
    this.sideMenuOptions = [
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
    ];
  }

  sidebarFunc() {
    this.sidebarService.sidebar();
  }
}
