/**
 * Conversion Tools Sample Datas
 * @author    AppsPlaces <appsplaces@gmail.com>
 * @copyright Copyright (c) 2021
 * @license   AppsPlaces
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleDataService {

  constructor() { }

  getSampleXML() {
    return `<urlset>
    <url>
        <loc>https://iloveconverts.com/</loc>
        <lastmod>2019-10-29T05:59:31+00:00</lastmod>
        <priority>1.00</priority>
    </url>
    <url>
        <loc>https://iloveconverts.com/home</loc>
        <lastmod>2019-10-29T05:59:31+00:00</lastmod>
        <priority>0.80</priority>
    </url>
    <url>
        <loc>https://iloveconverts.com/image/convert-to-png</loc>
        <lastmod>2019-10-29T05:59:31+00:00</lastmod>
        <priority>0.80</priority>
    </url>
    <url>
        <loc>https://iloveconverts.com/length-converter</loc>
        <lastmod>2019-10-29T05:59:31+00:00</lastmod>
        <priority>0.80</priority>
    </url>
    <url>
        <loc>https://iloveconverts.com/fake-person-information-en</loc>
        <lastmod>2019-10-29T05:59:31+00:00</lastmod>
        <priority>0.80</priority>
    </url>
    <_xmlns>http://www.sitemaps.org/schemas/sitemap/0.9</_xmlns>
</urlset>`
  }

  getSampleJSON() {
    return `[
      {
        "Name":"iloveconverts",
        "FirstName":"iloveconverts",
        "LastName":"iloveconverts",
        "Password":"123456"
      },
      {
        "Name":"iloveconverts",
        "FirstName":"iloveconverts", 
        "LastName":"iloveconverts",
        "Password":"qwerty"
      }
    ]`
  }

  getSampleCSV() {
    return `"Name","FirstName","LastName","Password"
"iloveconverts","iloveconverts","iloveconverts","123456"
"iloveconverts","iloveconverts","iloveconverts","qwerty"`
  }

  getSampleTSV() {
    return `Name	FirstName	LastName	Password
iloveconverts	iloveconverts	iloveconverts	123456
iloveconverts	iloveconverts	iloveconverts	qwerty`
  }

}
