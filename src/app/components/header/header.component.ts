/**
 * Header Component
 * @author    CodePrimus <akshataggarwal005@gmail.com>
 * @copyright Copyright (c) 2023

 */

import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
declare var jQuery: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  facebook: any = '';
  twitter: any = '';
  youtube: any = '';

  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
    this.getBackendData();
  }

  // Get Website Information From Firebase Database 
  async getBackendData() {
    const websiteRef: any = this.db.collection('website-info').doc('admin');
    const doc = await websiteRef.get().toPromise();

    if (!doc.exists) {
      console.log('No such document!');
    } else {
      this.facebook = doc.data().socialLinks.facebook;
      this.twitter = doc.data().socialLinks.twitter;
      this.youtube = doc.data().socialLinks.youtube;
    }
  }
}
