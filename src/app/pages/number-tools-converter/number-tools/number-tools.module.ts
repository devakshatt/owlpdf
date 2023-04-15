/**
 * Number Tools Module
 * @author    AppsPlaces <appsplaces@gmail.com>
 * @copyright Copyright (c) 2021
 * @license   AppsPlaces
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NumberToolsComponent } from './number-tools.component';

const routes: Routes = [
  { path: 'number-tools', component: NumberToolsComponent, data: { title: "Number Tools", subTitle: "Your online tools for converting and generating text, number and many more" } },
  { path: 'numbers-to-words', component: NumberToolsComponent, data: { title: 'Convert Number To Words', subTitle: 'A free online tool to converts Number to words, text and string' } },
  { path: 'words-to-numbers', component: NumberToolsComponent, data: { title: 'Convert Words To Numbers', subTitle: 'A free online tool to converts words to number' } },
  { path: 'decimal-to-roman', component: NumberToolsComponent, data: { title: 'Convert Decimal To Roman', subTitle: 'A free online tool to converts decimal to roman' } },
  { path: 'roman-to-decimal', component: NumberToolsComponent, data: { title: 'Convert Roman To Decimal', subTitle: 'A free online tool to converts roman to decimal' } },
  { path: 'binary-to-decimal', component: NumberToolsComponent, data: { title: 'Convert Binary To Decimal', subTitle: 'A free online tool to converts binary to decimal' } },
  { path: 'binary-to-hex', component: NumberToolsComponent, data: { title: 'Convert Binary To Hex', subTitle: 'A free online tool to converts binary to hex' } },
  { path: 'binary-to-octal', component: NumberToolsComponent, data: { title: 'Convert Binary To Octal', subTitle: 'A free online tool to converts binary to octal' } },
  { path: 'decimal-to-hex', component: NumberToolsComponent, data: { title: 'Convert Decimal To Hex', subTitle: 'A free online tool to converts decimal to hex' } },
  { path: 'decimal-to-binary', component: NumberToolsComponent, data: { title: 'Convert Decimal To Binary', subTitle: 'A free online tool to converts decimal to binary' } },
  { path: 'decimal-to-octal', component: NumberToolsComponent, data: { title: 'Convert Decimal To Octal', subTitle: 'A free online tool to converts decimal to octal' } },
  { path: 'hex-to-binary', component: NumberToolsComponent, data: { title: 'Convert Hex To Binary', subTitle: 'A free online tool to converts hex to binary' } },
  { path: 'hex-to-decimal', component: NumberToolsComponent, data: { title: 'Convert Hex To Decimal', subTitle: 'A free online tool to converts hex to decimal' } },
  { path: 'hex-to-octal', component: NumberToolsComponent, data: { title: 'Convert Hex To Octal', subTitle: 'A free online tool to converts hex to octal' } },
  { path: 'octal-to-decimal', component: NumberToolsComponent, data: { title: 'Convert Octal To Decimal', subTitle: 'A free online tool to converts octal to decimal' } },
  { path: 'octal-to-binary', component: NumberToolsComponent, data: { title: 'Convert Octal To Binary', subTitle: 'A free online tool to converts octal to binary' } },
  { path: 'octal-to-hex', component: NumberToolsComponent, data: { title: 'Convert Octal To Hex', subTitle: 'A free online tool to converts octal to hex' } },
  { path: 'text-to-binary', component: NumberToolsComponent, data: { title: 'Convert Text To Binary', subTitle: 'A free online tool to converts text to binary' } },
  { path: 'binary-to-text', component: NumberToolsComponent, data: { title: 'Convert Binary To Text', subTitle: 'A free online tool to converts binary to text' } },
  { path: 'text-to-ascii', component: NumberToolsComponent, data: { title: 'Convert Text To ASCII', subTitle: 'A free online tool to converts text To ascii' } },
  { path: 'ascii-to-text', component: NumberToolsComponent, data: { title: 'Convert ASCII To Text', subTitle: 'A free online tool to converts ascii to text' } },
  { path: 'text-to-octal', component: NumberToolsComponent, data: { title: 'Convert Text To Octal', subTitle: 'A free online tool to converts text to octal' } },
  { path: 'octal-to-text', component: NumberToolsComponent, data: { title: 'Convert Octal To Text', subTitle: 'A free online tool to converts octal to text' } },
  { path: 'text-to-hex', component: NumberToolsComponent, data: { title: 'Convert Text To Hex', subTitle: 'A free online tool to converts text to hex' } },
  { path: 'hex-to-text', component: NumberToolsComponent, data: { title: 'Convert Hex To Text', subTitle: 'A free online tool to converts hex to text' } },
  { path: 'text-to-decimal', component: NumberToolsComponent, data: { title: 'Convert Text To Decimal', subTitle: 'A free online tool to converts text to decimal' } },
  { path: 'decimal-to-text', component: NumberToolsComponent, data: { title: 'Convert Decimal To Text', subTitle: 'A free online tool to converts decimal to text' } }
];


@NgModule({
  declarations: [NumberToolsComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class NumberToolsModule { }
