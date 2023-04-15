/**
 * Unit Converter Component
 * @author    AppsPlaces <appsplaces@gmail.com>
 * @copyright Copyright (c) 2021
 * @license   AppsPlaces
 */

import { Component, OnInit } from '@angular/core';
import * as unitConverter from 'convert-units';

@Component({
  selector: 'app-unit-converters',
  templateUrl: './unit-converters.component.html',
  styleUrls: ['./unit-converters.component.scss']
})
export class UnitConvertersComponent implements OnInit {
  measures: any = [];
  selected: any = -1;
  constructor() {
  }

  titleCaseWord(word: string) {
    if (!word) return word;
    return word[0].toUpperCase() + word.substr(1);
  }

  ngOnInit() {
    this.measures = unitConverter().measures();
  }

  mouseOver(classNum) {
    this.selected = classNum;
  }

}
