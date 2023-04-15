/**
 * About Page Component
 * @author    AppsPlaces <akshataggarwal005@gmail.com>
 * @copyright Copyright (c) 2020

 */

import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MetaServiceService } from '../../services/meta-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  content = '';

  constructor(private db: AngularFirestore,
    private metaService: MetaServiceService) { }

  ngOnInit(): void {
    this.getAboutContent();
    this.updateMetaTags();
  }

  async getAboutContent() {
    const websiteRef: any = this.db.collection('website-info').doc('admin');
    const doc = await websiteRef.get().toPromise();

    if (!doc.exists) {
      console.log('No such document!');
    } else {
      this.content = doc.data().about;
    }
  }

  // Update Meta Tags
  updateMetaTags(): void {
    let href = window.location.href;
    let websiteTitle = 'owlpdf'; // Your website title

    // Set Title
    this.metaService.setTitle('About us');

    // Update Meta Values
    this.metaService.updateMetaTags({
      'description': `${websiteTitle} is an online converter that convert almost all the conversion of unit measurement and many more conversion will be coming soon. Now this site contains almost 3000 plus units conversion in different measurement. Unit conversion contains length convert, area convert, each convert, mass convert, volume convert, volume flow rate convert, temperature convert, time convert, frequency convert, speed convert, pace convert, pressure convert, digital convert, illuminance convert, parts-per convert, voltage convert, current convert, power convert, apparent power convert, reactive power convert, energy convert, reactive energy convert, angle convert`,
      'keywords': `${websiteTitle} is an online converter that convert almost all the conversion of unit measurement and many more conversion will be coming soon. Now this site contains almost 3000 plus units conversion in different measurement. Unit conversion contains length convert, area convert, each convert, mass convert, volume convert, volume flow rate convert, temperature convert, time convert, frequency convert, speed convert, pace convert, pressure convert, digital convert, illuminance convert, parts-per convert, voltage convert, current convert, power convert, apparent power convert, reactive power convert, energy convert, reactive energy convert, angle convert`,
      'ogUrl': href,
      'ogtitle': `${websiteTitle} is an online converter that convert almost all the conversion of unit measurement and many more conversion will be coming soon. Now this site contains almost 3000 plus units conversion in different measurement. Unit conversion contains length convert, area convert, each convert, mass convert, volume convert, volume flow rate convert, temperature convert, time convert, frequency convert, speed convert, pace convert, pressure convert, digital convert, illuminance convert, parts-per convert, voltage convert, current convert, power convert, apparent power convert, reactive power convert, energy convert, reactive energy convert, angle convert`,
      'ogDescription': `${websiteTitle} is an online converter that convert almost all the conversion of unit measurement and many more conversion will be coming soon. Now this site contains almost 3000 plus units conversion in different measurement. Unit conversion contains length convert, area convert, each convert, mass convert, volume convert, volume flow rate convert, temperature convert, time convert, frequency convert, speed convert, pace convert, pressure convert, digital convert, illuminance convert, parts-per convert, voltage convert, current convert, power convert, apparent power convert, reactive power convert, energy convert, reactive energy convert, angle convert`,
      'twitterUrl': href,
      'twitterTitle': `${websiteTitle} is an online converter that convert almost all the conversion of unit measurement and many more conversion will be coming soon. Now this site contains almost 3000 plus units conversion in different measurement. Unit conversion contains length convert, area convert, each convert, mass convert, volume convert, volume flow rate convert, temperature convert, time convert, frequency convert, speed convert, pace convert, pressure convert, digital convert, illuminance convert, parts-per convert, voltage convert, current convert, power convert, apparent power convert, reactive power convert, energy convert, reactive energy convert, angle convert`,
      'twitterDescription': `${websiteTitle} is an online converter that convert almost all the conversion of unit measurement and many more conversion will be coming soon. Now this site contains almost 3000 plus units conversion in different measurement. Unit conversion contains length convert, area convert, each convert, mass convert, volume convert, volume flow rate convert, temperature convert, time convert, frequency convert, speed convert, pace convert, pressure convert, digital convert, illuminance convert, parts-per convert, voltage convert, current convert, power convert, apparent power convert, reactive power convert, energy convert, reactive energy convert, angle convert`
    });
  }
}
