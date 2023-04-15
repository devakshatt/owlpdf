/**
 * Image Tools Sidebar Component
 * @author    AppsPlaces <appsplaces@gmail.com>
 * @copyright Copyright (c) 2021
 * @license   AppsPlaces
 */

import { Component, OnInit, Input } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-image-sidebar',
  templateUrl: './image-sidebar.component.html',
  styleUrls: ['./image-sidebar.component.scss']
})
export class ImageSidebarComponent implements OnInit {

  @Input() selectedRoute: string;
  sideMenuOptions: any = [];
  sideMenuImageCompress: any = [];
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
      { name: 'Convert to PNG', route: 'image/convert-to-png' },
      { name: 'Convert to JPEG', route: 'image/convert-to-jpeg' },
      { name: 'Convert to BMP', route: 'image/convert-to-bmp' },
      { name: 'Convert to TIFF', route: 'image/convert-to-tiff' }
    ];

    this.sideMenuImageCompress = [{ name: 'Compress Image', route: 'compress-image' }]
  }

  sidebarFunc() {
    this.sidebarService.sidebar();
  }
}
