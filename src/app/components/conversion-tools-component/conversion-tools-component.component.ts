/**
 * Conversion Tools Component
 * @author    AppsPlaces <appsplaces@gmail.com>
 * @copyright Copyright (c) 2021
 * @license   AppsPlaces
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversion-tools-component',
  templateUrl: './conversion-tools-component.component.html',
  styleUrls: ['./conversion-tools-component.component.scss']
})
export class ConversionToolsComponentComponent implements OnInit {

  selected: any = -1;
  conversionTools: any;

  constructor() { }

  ngOnInit(): void {
    this.conversionTools = [
      { name: 'XML To JSON', route: 'xml-to-json' },
      { name: 'JSON To XML', route: 'json-to-xml' },
      { name: 'JSON To CSV', route: 'json-to-csv' },
      { name: 'CSV To JSON', route: 'csv-to-json' },
      { name: 'JSON TO TEXT', route: 'json-to-text' },
      { name: 'JSON TO TSV', route: 'json-to-tsv' },
      { name: 'TSV TO JSON', route: 'tsv-to-json' }
    ];
  }

  mouseOver(classNum) {
    this.selected = classNum;
  }
}
