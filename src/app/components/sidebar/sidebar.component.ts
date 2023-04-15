/**
 * Sidebar Component
 * @author    AppsPlaces <appsplaces@gmail.com>
 * @copyright Copyright (c) 2021
 * @license   AppsPlaces
 */

import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuOptions: any;
  title: any = '';
  logo: any;

  constructor(public sidebarService: SidebarService,
    private db: AngularFirestore,
    private storage: AngularFireStorage) { }

  ngOnInit() {
    this.sideBarMenu();
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

  sideBarMenu() {
    this.menuOptions = [{
      name: 'Image Converter', route: '/image/convert-to-png', icon: 'far fa-images'
    }, {
      name: 'Unit Converter', route: '/length-converter', icon: 'fas fa-thermometer-quarter'
    }, {
      name: 'Text Tools', route: '/text-tools', icon: 'fas fa-align-center'
    }, {
      name: 'Number Tools', route: '/number-tools', icon: 'fas fa-sort-numeric-up-alt'
    }, {
      name: 'Encryption Tools', route: '/encryption-tools', icon: 'fas fa-compress'
    }, {
      name: 'OCR (Text Scanner)', route: '/image-to-text', icon: 'fas fa-text-width'
    }, {
      name: 'Conversion Tools', route: '/xml-to-json', icon: 'fas fa-text-width'
    }]
  }

  sidebarFunc() {
    this.sidebarService.sidebar()
  }
}
