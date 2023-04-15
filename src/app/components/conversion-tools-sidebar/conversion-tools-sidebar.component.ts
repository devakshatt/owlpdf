/**
 * Conversion Tools Sidebar
 * @author    AppsPlaces <appsplaces@gmail.com>
 * @copyright Copyright (c) 2021
 * @license   AppsPlaces
 */

import { Component, OnInit, Input } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-conversion-tools-sidebar',
  templateUrl: './conversion-tools-sidebar.component.html',
  styleUrls: ['./conversion-tools-sidebar.component.scss']
})
export class ConversionToolsSidebarComponent implements OnInit {

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
      { name: 'XML To JSON', route: 'xml-to-json' },
      { name: 'JSON To XML', route: 'json-to-xml' },
      { name: 'JSON To CSV', route: 'json-to-csv' },
      { name: 'CSV To JSON', route: 'csv-to-json' },
      { name: 'JSON TO TEXT', route: 'json-to-text' },
      { name: 'JSON TO TSV', route: 'json-to-tsv' },
      { name: 'TSV TO JSON', route: 'tsv-to-json' }
    ];
  }

  sidebarFunc() {
    this.sidebarService.sidebar();
  }
}
