/**
 * Number Tools Component
 * @author    AppsPlaces <appsplaces@gmail.com>
 * @copyright Copyright (c) 2021
 * @license   AppsPlaces
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-tools-component',
  templateUrl: './number-tools-component.component.html',
  styleUrls: ['./number-tools-component.component.scss']
})
export class NumberToolsComponentComponent implements OnInit {

  selected: any = -1;
  numberTools: any;

  constructor() { }

  ngOnInit(): void {
    this.numberTools = [
      { path: 'number-tools', title: "Number Tools", subTitle: "Your online tools for converting and generating text, number and many more" },
      { path: 'numbers-to-words', title: 'Convert Number To Words', subTitle: 'A free online tool to converts Number to words, text and string' },
      { path: 'words-to-numbers', title: 'Convert Words To Numbers', subTitle: 'A free online tool to converts words to number' },
      { path: 'decimal-to-roman', title: 'Convert Decimal To Roman', subTitle: 'A free online tool to converts decimal to roman' },
      { path: 'roman-to-decimal', title: 'Convert Roman To Decimal', subTitle: 'A free online tool to converts roman to decimal' },
      { path: 'binary-to-decimal', title: 'Convert Binary To Decimal', subTitle: 'A free online tool to converts binary to decimal' },
      { path: 'binary-to-hex', title: 'Convert Binary To Hex', subTitle: 'A free online tool to converts binary to hex' },
      { path: 'binary-to-octal', title: 'Convert Binary To Octal', subTitle: 'A free online tool to converts binary to octal' },
      { path: 'decimal-to-hex', title: 'Convert Decimal To Hex', subTitle: 'A free online tool to converts decimal to hex' },
      { path: 'decimal-to-binary', title: 'Convert Decimal To Binary', subTitle: 'A free online tool to converts decimal to binary' },
      { path: 'decimal-to-octal', title: 'Convert Decimal To Octal', subTitle: 'A free online tool to converts decimal to octal' },
      { path: 'hex-to-binary', title: 'Convert Hex To Binary', subTitle: 'A free online tool to converts hex to binary' },
      { path: 'hex-to-decimal', title: 'Convert Hex To Decimal', subTitle: 'A free online tool to converts hex to decimal' },
      { path: 'hex-to-octal', title: 'Convert Hex To Octal', subTitle: 'A free online tool to converts hex to octal' },
      { path: 'octal-to-decimal', title: 'Convert Octal To Decimal', subTitle: 'A free online tool to converts octal to decimal' },
      { path: 'octal-to-binary', title: 'Convert Octal To Binary', subTitle: 'A free online tool to converts octal to binary' },
      { path: 'octal-to-hex', title: 'Convert Octal To Hex', subTitle: 'A free online tool to converts octal to hex' },
      { path: 'text-to-binary', title: 'Convert Text To Binary', subTitle: 'A free online tool to converts text to binary' },
      { path: 'binary-to-text', title: 'Convert Binary To Text', subTitle: 'A free online tool to converts binary to text' },
      { path: 'text-to-ascii', title: 'Convert Text To ASCII', subTitle: 'A free online tool to converts text To ascii' },
      { path: 'ascii-to-text', title: 'Convert ASCII To Text', subTitle: 'A free online tool to converts ascii to text' },
      { path: 'text-to-octal', title: 'Convert Text To Octal', subTitle: 'A free online tool to converts text to octal' },
      { path: 'octal-to-text', title: 'Convert Octal To Text', subTitle: 'A free online tool to converts octal to text' },
      { path: 'text-to-hex', title: 'Convert Text To Hex', subTitle: 'A free online tool to converts text to hex' },
      { path: 'hex-to-text', title: 'Convert Hex To Text', subTitle: 'A free online tool to converts hex to text' },
      { path: 'text-to-decimal', title: 'Convert Text To Decimal', subTitle: 'A free online tool to converts text to decimal' },
      { path: 'decimal-to-text', title: 'Convert Decimal To Text', subTitle: 'A free online tool to converts decimal to text' }
    ];
  }

  mouseOver(classNum) {
    this.selected = classNum;
  }
}
