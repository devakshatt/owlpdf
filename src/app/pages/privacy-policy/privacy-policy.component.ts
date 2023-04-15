/**
 * Privacy Policy Page Component
 * @author    AppsPlaces <appsplaces@gmail.com>
 * @copyright Copyright (c) 2021
 * @license   AppsPlaces
 */

import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MetaServiceService } from '../../services/meta-service.service';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {

  content = '';

  constructor(private db: AngularFirestore,
    private metaService: MetaServiceService) { }

  ngOnInit(): void {
    this.getPrivacyContent();
  }

  async getPrivacyContent() {
    const websiteRef: any = this.db.collection('website-info').doc('admin');
    const doc = await websiteRef.get().toPromise();

    if (!doc.exists) {
      console.log('No such document!');
    } else {
      this.content = doc.data().privacyPolicy;
    }
  }

  // Update Meta Tags
  updateMetaTags(): void {
    let href = window.location.href;
    let websiteTitle = 'iloveconverts'; // Your website title

    // Set Title
    this.metaService.setTitle('Privacy Policy');

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
