/**
 * Conversion Tools Sample Datas
 * @author    CodePrimus <akshataggarwal005@gmail.com>
 * @copyright Copyright (c) 2023

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
        <loc>https://owlpdf.com/</loc>
        <lastmod>2019-10-29T05:59:31+00:00</lastmod>
        <priority>1.00</priority>
    </url>
    <url>
        <loc>https://owlpdf.com/home</loc>
        <lastmod>2019-10-29T05:59:31+00:00</lastmod>
        <priority>0.80</priority>
    </url>
    <url>
        <loc>https://owlpdf.com/image/convert-to-png</loc>
        <lastmod>2019-10-29T05:59:31+00:00</lastmod>
        <priority>0.80</priority>
    </url>
    <url>
        <loc>https://owlpdf.com/length-converter</loc>
        <lastmod>2019-10-29T05:59:31+00:00</lastmod>
        <priority>0.80</priority>
    </url>
    <url>
        <loc>https://owlpdf.com/fake-person-information-en</loc>
        <lastmod>2019-10-29T05:59:31+00:00</lastmod>
        <priority>0.80</priority>
    </url>
    <_xmlns>http://www.sitemaps.org/schemas/sitemap/0.9</_xmlns>
</urlset>`
  }

  getSampleJSON() {
    return `[
      {
        "Name":"owlpdf",
        "FirstName":"owlpdf",
        "LastName":"owlpdf",
        "Password":"123456"
      },
      {
        "Name":"owlpdf",
        "FirstName":"owlpdf", 
        "LastName":"owlpdf",
        "Password":"qwerty"
      }
    ]`
  }

  getSampleCSV() {
    return `"Name","FirstName","LastName","Password"
"owlpdf","owlpdf","owlpdf","123456"
"owlpdf","owlpdf","owlpdf","qwerty"`
  }

  getSampleTSV() {
    return `Name	FirstName	LastName	Password
owlpdf	owlpdf	owlpdf	123456
owlpdf	owlpdf	owlpdf	qwerty`
  }

}
