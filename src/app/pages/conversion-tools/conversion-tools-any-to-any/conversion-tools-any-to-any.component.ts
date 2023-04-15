/**
 * Conversion Tools Component (Contents)
 * @author    AppsPlaces <appsplaces@gmail.com>
 * @copyright Copyright (c) 2021
 * @license   AppsPlaces
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConversionToolsService } from '../conversion-tools.service';
import { SampleDataService } from '../sample-data.service';

@Component({
  selector: 'app-conversion-tools-any-to-any',
  templateUrl: './conversion-tools-any-to-any.component.html',
  styleUrls: ['./conversion-tools-any-to-any.component.scss']
})
export class ConversionToolsAnyToAnyComponent implements OnInit {

  input: any;
  output: any;
  inputValue: any;
  outputValue: any;
  copied: Boolean;

  constructor(private router: Router,
    private conversionToolsService: ConversionToolsService,
    private sampleDataService: SampleDataService) { }

  ngOnInit(): void {
    let url = this.router.url;
    let _url = url.split('-to-');
    this.input = _url[0].split('/')[1];
    this.output = _url[1];
    this.copied = false;
  }

  async convert() {
    if (this.router.url == '/xml-to-json') {
      this.outputValue = this.conversionToolsService.xml2jsonConverter(this.inputValue);
    } else if (this.router.url == '/json-to-xml') {
      this.outputValue = this.conversionToolsService.json2xmlConverter(this.inputValue);
    } else if (this.router.url == '/json-to-csv') {
      this.outputValue = await this.conversionToolsService.json2csvConverter(this.inputValue);
    } else if (this.router.url == '/csv-to-json') {
      this.outputValue = await this.conversionToolsService.csv2jsonConverter(this.inputValue);
    } else if (this.router.url == '/json-to-text') {
      this.outputValue = await this.conversionToolsService.json2textConverter(this.inputValue);
    } else if (this.router.url == '/json-to-tsv') {
      this.outputValue = await this.conversionToolsService.json2TsvConverter(this.inputValue);
    } else if (this.router.url == '/tsv-to-json') {
      this.outputValue = await this.conversionToolsService.tsv2jsonConverter(this.inputValue);
    }

    document.getElementById("result").scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
  }

  getsample(data) {
    if (data == 'xml') {
      this.inputValue = this.sampleDataService.getSampleXML();
    } else if (data == 'json') {
      this.inputValue = this.sampleDataService.getSampleJSON();
    } else if (data == 'csv') {
      this.inputValue = this.sampleDataService.getSampleCSV();
    } else if (data == 'tsv') {
      this.inputValue = this.sampleDataService.getSampleTSV();
    }
  }

  copyClipboard(inputElement) {
    this.copied = true;
    setTimeout(() => {
      this.copied = false;
    }, 3000)
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }

}
