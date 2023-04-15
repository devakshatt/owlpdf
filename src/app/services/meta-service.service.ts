/**
 * Meta Tags Service
 * These tags are shown by search engines as a small text item in the search results
 * @author    AppsPlaces <appsplaces@gmail.com>
 * @copyright Copyright (c) 2021
 * @license   AppsPlaces
 */

import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaServiceService {

  // Change and replace with your website information
  websiteTitle: any = 'Test'; // Title of your website
  websiteUrl: any = 'https://iloveconverts-pro.codevampires.com'; // Website URL

  constructor(private title: Title,
    private meta: Meta) {
  }

  // Set Meta Title of your sites
  setTitle(title?) {
    if (title) {
      this.title.setTitle(`${this.websiteTitle} - ` + title);
    } else {
      this.title.setTitle(this.websiteTitle);
    }
  }

  // Add Meta Tags
  // You can change and update the `content` of meta value
  addMetaTags() {
    this.meta.addTags([
      { name: 'author', content: this.websiteTitle },
      { name: 'description', content: `${this.websiteTitle} is an online converter that convert almost all the conversion of unit measurement and many more conversion will be coming soon. Now this site contains almost 3000 plus units conversion in different measurement. Unit conversion contains length convert, area convert, each convert, mass convert, volume convert, volume flow rate convert, temperature convert, time convert, frequency convert, speed convert, pace convert, pressure convert, digital convert, illuminance convert, parts-per convert, voltage convert, current convert, power convert, apparent power convert, reactive power convert, energy convert, reactive energy convert, angle convert` },
      { name: 'keywords', content: 'Unit Converter, Converter, Converts, Unit Conversion' },
      // Open Graph / Facebook
      { property: "og:type", content: this.websiteUrl },
      { property: "og:url", content: this.websiteUrl },
      {
        property: 'og:title', content: `Unit Converter, Converter, Converts, Unit Conversion`
      },
      {
        property: "og:description", content: `${this.websiteTitle} is an online converter that convert almost all the conversion of unit measurement and many more conversion will be coming soon. Now this site contains almost 3000 plus units conversion in different measurement. Unit conversion contains length convert, area convert, each convert, mass convert, volume convert, volume flow rate convert, temperature convert, time convert, frequency convert, speed convert, pace convert, pressure convert, digital convert, illuminance convert, parts-per convert, voltage convert, current convert, power convert, apparent power convert, reactive power convert, energy convert, reactive energy convert, angle convert`
      },
      // Twitter
      { property: "twitter:url", content: this.websiteUrl },
      { property: "twitter:title", content: "Unit Converter, Converter, Converts, Unit Conversion" },
      { property: "twitter:description", content: `${this.websiteTitle} is an online converter that convert almost all the conversion of unit measurement and many more conversion will be coming soon. Now this site contains almost 3000 plus units conversion in different measurement. Unit conversion contains length convert, area convert, each convert, mass convert, volume convert, volume flow rate convert, temperature convert, time convert, frequency convert, speed convert, pace convert, pressure convert, digital convert, illuminance convert, parts-per convert, voltage convert, current convert, power convert, apparent power convert, reactive power convert, energy convert, reactive energy convert, angle convert` }
    ]);
  }

  // Get Meta Tags
  getMetaTags() {
    let metaEl: HTMLMetaElement = this.meta.getTag('name= "keywords"');
    console.log(metaEl);
    console.log(metaEl.name);
    console.log(metaEl.content);

    let els: HTMLMetaElement[] = this.meta.getTags('name');
    els.forEach(el => {
      console.log(el);
      console.log(el.name);
      console.log(el.content);
    });
  }

  // Update Meta Tags
  // @Params {obj} Dynamic content of meta values
  // By calling this function It will immediately update the meta keywords for specific routes 
  updateMetaTags(obj) {
    this.meta.updateTag({ name: 'description', content: obj.description });
    this.meta.updateTag({ name: 'keywords', content: obj.keywords });
    // Open Graph / Facebook
    this.meta.updateTag({ property: 'og:url', content: obj.ogUrl });
    this.meta.updateTag({ property: 'og:title', content: obj.ogtitle });
    this.meta.updateTag({ property: 'og:description', content: obj.ogDescription });
    // Twitter
    this.meta.updateTag({ property: "twitter:url", content: obj.twitterUrl });
    this.meta.updateTag({ property: "twitter:title", content: obj.twitterTitle });
    this.meta.updateTag({ property: "twitter:description", content: obj.twitterDescription });
  }

  // Remove Meta Tags
  removeMetaTags() {
    //Using removeTag
    this.meta.removeTag('name = "description"');
    this.meta.removeTag('name= "keywords"');

    //Using removeTagElement
    let author: HTMLMetaElement = this.meta.getTag('name = "author"');
    this.meta.removeTagElement(author);
    let ogTitle: HTMLMetaElement = this.meta.getTag('property = "og:title"');
    this.meta.removeTagElement(ogTitle);
    let ogType: HTMLMetaElement = this.meta.getTag('property = "og:type"');
    this.meta.removeTagElement(ogType);
  }
}
