/**
 * Number Tools Sidebar Component
 * @author    AppsPlaces <appsplaces@gmail.com>
 * @copyright Copyright (c) 2021
 * @license   AppsPlaces
 */

import { Component, OnInit, Input } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-number-tools-sidebar',
  templateUrl: './number-tools-sidebar.component.html',
  styleUrls: ['./number-tools-sidebar.component.scss']
})
export class NumberToolsSidebarComponent implements OnInit {


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
      { route: 'number-tools', name: "Number Tools" },
      { route: 'numbers-to-words', name: 'Number To Words' },
      { route: 'words-to-numbers', name: 'Words To Numbers' },
      { route: 'decimal-to-roman', name: 'Decimal To Roman' },
      { route: 'roman-to-decimal', name: 'Roman To Decimal' },
      { route: 'binary-to-decimal', name: 'Binary To Decimal' },
      { route: 'binary-to-hex', name: 'Binary To Hex' },
      { route: 'binary-to-octal', name: 'Binary To Octal' },
      { route: 'decimal-to-hex', name: 'Decimal To Hex' },
      { route: 'decimal-to-binary', name: 'Decimal To Binary' },
      { route: 'decimal-to-octal', name: 'Decimal To Octal' },
      { route: 'hex-to-binary', name: 'Hex To Binary' },
      { route: 'hex-to-decimal', name: 'Hex To Decimal' },
      { route: 'hex-to-octal', name: 'Hex To Octal' },
      { route: 'octal-to-decimal', name: 'Octal To Decimal' },
      { route: 'octal-to-binary', name: 'Octal To Binary' },
      { route: 'octal-to-hex', name: 'Octal To Hex' },
      { route: 'text-to-binary', name: 'Text To Binary' },
      { route: 'binary-to-text', name: 'Binary To Text' },
      { route: 'text-to-ascii', name: 'Text To ASCII' },
      { route: 'ascii-to-text', name: 'ASCII To Text' },
      { route: 'text-to-octal', name: 'Text To Octal' },
      { route: 'octal-to-text', name: 'Octal To Text' },
      { route: 'text-to-hex', name: 'Text To Hex' },
      { route: 'hex-to-text', name: 'Hex To Text' },
      { route: 'text-to-decimal', name: 'Text To Decimal' },
      { route: 'decimal-to-text', name: 'Decimal To Text' }
    ];
  }

  sidebarFunc() {
    this.sidebarService.sidebar();
  }
}
