/**
 * Text Tools Component
 * @author    AppsPlaces <appsplaces@gmail.com>
 * @copyright Copyright (c) 2021
 * @license   AppsPlaces
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-tools-component',
  templateUrl: './text-tools-component.component.html',
  styleUrls: ['./text-tools-component.component.scss']
})
export class TextToolsComponentComponent implements OnInit {

  selected: any = -1;
  textTools: any;

  constructor() { }

  ngOnInit(): void {
    this.textTools = [
      { path: 'text-lowercase', title: "Convert Text to Lowercase", subTitle: "A free online tool to converts all characters in lowercase letter and strings to lower case characters" },
      { path: 'text-uppercase', title: "Convert Text to Uppercase", subTitle: "A free online tool to converts all characters in uppercase letter and strings to upper case characters" },
      { path: 'text-titlecase', title: "Convert Text to Titlecase", subTitle: "A free online tool to converts all characters in titlecase letter and strings to title case characters" },
      { path: 'text-invert-case', title: "Convert Text to Invertcase", subTitle: "A free online tool to converts all characters in invertcase letter and strings to Invert case characters" },
      { path: 'text-capitalize', title: "Capitalize Words in Text", subTitle: "A free online tool to convert text capitalizer uppercases first letter of every word in text and strings" },
      { path: 'text-reverse', title: "Reverse Text", subTitle: "A free online tool to reverse or mirror text and strings " },
      { path: 'spaces-to-tabs', title: "Convert Spaces To Tabs", subTitle: "Spaces to tabs converter convert or replaces spaces to tabs in text and strings" },
      { path: 'tabs-to-spaces', title: "Convert Tabs To Spaces", subTitle: "Tabs to spaces converter convert or replaces tabs to spaces in text and strings" },
      { path: 'spaces-to-newlines', title: "Convert Spaces To Newlines", subTitle: "Spaces to newlines converter convert or replaces spaces with line breaks in text and strings" },
      { path: 'newlines-to-spaces', title: "Convert Newlines To Spaces", subTitle: "Newlines to spaces converter convert or replaces newlines with spaces in text and strings" },
      { path: 'remove-letter-accents', title: "Remove Letter Accents", subTitle: "Letter accent remover removes all diacritical marks in text and strings" },
      { path: 'remove-whitespace', title: "Remove Whitespace", subTitle: "A free online tool to remove extra whitespace and tabs from text and string" },
      { path: 'remove-all-whitespace', title: "Remove All Whitespace", subTitle: "A free online tool to remove all whitespace and tabs from text and string" },
      { path: 'extract-emails', title: "Extract Emails From Text", subTitle: "A free online tool to extract email addresses from the text content and string" },
      { path: 'extract-urls', title: "Extract URLs From Text", subTitle: "A free online tool to extract URLs from the text content and string" },
      { path: 'extract-numbers', title: "Extract Numbers From Text", subTitle: "A free online tool to extract numbers from the text content and string" },
      { path: 'text-to-morse', title: "Convert Text To Morse", subTitle: "A free online tool to convert text To morse code" },
      { path: 'morse-to-text', title: "Convert Morse To Text", subTitle: "A free online tool to convert morse To text code" },
      { path: 'count-character-frequency', title: "Count Character Frequency in Text", subTitle: "Character frequency counter count how many times each character appears in a string or text" },
      { path: 'count-word-frequency', title: "Count Word Frequency in Text", subTitle: "Word frequency counter count how many times each word appears in a string or text" },
      { path: 'split-text', title: "Split Text", subTitle: "A free online tool to split a text string at a certain character like (comma, space, pipe, etc)" },
      { path: 'delete-duplicate-lines', title: "Delete Duplicate Lines from Text", subTitle: "A free online tool to delete or remove duplicate lines from text or string" },
      { path: 'text-replace', title: "Replace Text", subTitle: "A free online tool to find text and replace with which you wish to replace" },
      { path: 'remove-empty-lines', title: "Remove Empty Lines", subTitle: "A free online tool to removes all empty lines which contain spaces, tabs, newline in a text and string" }
    ];
  }

  mouseOver(classNum) {
    this.selected = classNum;
  }
}
