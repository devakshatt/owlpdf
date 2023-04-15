/**
 * Text Tools Sidebar Component
 * @author    AppsPlaces <appsplaces@gmail.com>
 * @copyright Copyright (c) 2021
 * @license   AppsPlaces
 */

import { Component, OnInit, Input } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-text-tools-sidebar',
  templateUrl: './text-tools-sidebar.component.html',
  styleUrls: ['./text-tools-sidebar.component.css']
})
export class TextToolsSidebarComponent implements OnInit {

  @Input() selectedRoute: string;
  sideMenuOptions: any = [];
  title: any = '';
  logo: any;

  constructor(public sidebarService: SidebarService,
    private db: AngularFirestore,
    private storage: AngularFireStorage) { }

  ngOnInit() {
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
      { name: 'Text Lower Case', route: 'text-lowercase' },
      { name: 'Text Upper Case', route: 'text-uppercase' },
      { name: 'Text Title Case', route: 'text-titlecase' },
      { name: 'Text Inverse', route: 'text-invert-case' },
      { name: 'Text Capitalize', route: 'text-capitalize' },
      { name: 'Text Reverse', route: 'text-reverse' },
      { name: 'Spaces to Tabs', route: 'spaces-to-tabs' },
      { name: 'Tabs to Spaces', route: 'tabs-to-spaces' },
      { name: 'Spaces To Newlines', route: 'spaces-to-newlines' },
      { name: 'Newlines To Spaces', route: 'newlines-to-spaces' },
      { name: 'Remove Letter Accents', route: 'remove-letter-accents' },
      { name: 'Remove Extra Whitespace', route: 'remove-whitespace' },
      { name: 'Remove All Whitespace', route: 'remove-all-whitespace' },
      { name: 'Extract Emails', route: 'extract-emails' },
      { name: 'Extract URLs', route: 'extract-urls' },
      { name: 'Extract Numbers', route: 'extract-numbers' },
      { name: 'Text To Morse', route: 'text-to-morse' },
      { name: 'Morse To Text', route: 'morse-to-text' },
      { name: 'Count Character Frequency', route: 'count-character-frequency' },
      { name: 'Count Word Frequency', route: 'count-word-frequency' },
      { name: 'Split Text', route: 'split-text' },
      { name: 'Delete Duplicate Lines', route: 'delete-duplicate-lines' },
      { name: 'Text Replace', route: 'text-replace' },
      { name: 'Remove Empty Lines', route: 'remove-empty-lines' },
    ];
  }

  sidebarFunc() {
    this.sidebarService.sidebar();
  }
}
