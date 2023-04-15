/**
 * Text Tools Component
 * @author    AppsPlaces <appsplaces@gmail.com>
 * @copyright Copyright (c) 2021
 * @license   AppsPlaces
 */

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TextToolsService } from './text-tools.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MetaServiceService } from '../../../services/meta-service.service';

declare var saveAs: any;

@Component({
  selector: 'app-text-tools',
  templateUrl: './text-tools.component.html',
  styleUrls: ['./text-tools.component.scss']
})
export class TextToolsComponent implements OnInit {

  text: any;
  totalCharacter: Number = 0;
  totalWords: Number = 0;
  totalLine: Number = 0;
  totalParagraphs: Number = 0;
  copied: Boolean;
  showAlert: Boolean = false;
  symbol: any;
  replaceFrom: any;
  replaceTo: any;
  url: any;
  title: string;
  subTitle: string;

  constructor(private textToolsService: TextToolsService,
    private router: Router, private route: ActivatedRoute,
    private metaService: MetaServiceService,
    private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.copied = false;
    this.title = this.route.snapshot.data['title'];
    this.subTitle = this.route.snapshot.data['subTitle'];
    this.getRoutesInfo();
  }

  ngAfterViewChecked() {
    this.updateMetaTags();
    this.cdr.detectChanges();
  }

  getRoutesInfo(): void {
    let _url = this.router.url;
    this.url = _url.split('/')[1];
  }

  onKey(evt: any) {
    this.countTotal();
  }

  // Count Total Character, Worlds, Line & Paragraphs Function
  countTotal() {
    if (this.text) {
      this.totalCharacter = this.textToolsService.characterCount(this.text);
      this.totalWords = this.textToolsService.wordsCount(this.text);
      this.totalLine = this.textToolsService.lineCount(this.text);
      this.totalParagraphs = this.textToolsService.paragraphsCount(this.text);
    } else {
      this.totalCharacter = 0;
      this.totalWords = 0;
      this.totalLine = 0;
      this.totalParagraphs = 0;
    }
  }

  // Convert Function
  convert(data) {
    if (this.text) {
      if (data == 'text-lowercase') {
        this.text = this.textToolsService.textLowercase(this.text);
      } else if (data == 'text-uppercase') {
        this.text = this.textToolsService.textUppercase(this.text);
      } else if (data == 'text-titlecase') {
        this.text = this.textToolsService.textTitleCase(this.text);
      } else if (data == 'text-invert-case') {
        this.text = this.textToolsService.invertTextCase(this.text);
      } else if (data == 'text-capitalize') {
        this.text = this.textToolsService.textCapitalize(this.text);
      } else if (data == 'text-reverse') {
        this.text = this.textToolsService.textReverse(this.text);
      } else if (data == 'spaces-to-tabs') {
        this.text = this.textToolsService.spacesToTabs(this.text);
      } else if (data == 'tabs-to-spaces') {
        this.text = this.textToolsService.tabsToSpaces(this.text);
      } else if (data == 'spaces-to-newlines') {
        this.text = this.textToolsService.spacesToNewlines(this.text);
      } else if (data == 'newlines-to-spaces') {
        this.text = this.textToolsService.newlinesToSpaces(this.text);
      } else if (data == 'remove-letter-accents') {
        this.text = this.textToolsService.removeLetterAccents(this.text);
      } else if (data == 'remove-whitespace') {
        this.text = this.textToolsService.removeWhitespace(this.text);
      } else if (data == 'remove-all-whitespace') {
        this.text = this.textToolsService.removeAllWhitespace(this.text);
      } else if (data == 'extract-emails') {
        this.text = this.textToolsService.extractEmails(this.text);
      } else if (data == 'extract-urls') {
        this.text = this.textToolsService.extractURLs(this.text);
      } else if (data == 'extract-numbers') {
        this.text = this.textToolsService.extractNumbers(this.text);
      } else if (data == 'text-to-morse') {
        this.text = this.textToolsService.textToMorse(this.text);
      } else if (data == 'morse-to-text') {
        this.text = this.textToolsService.morseToText(this.text);
      } else if (data == 'count-character-frequency') {
        this.text = this.textToolsService.countCharacterFrequency(this.text);
      } else if (data == 'count-word-frequency') {
        this.text = this.textToolsService.countWordFrequency(this.text);
      } else if (data == 'split-text') {
        this.text = this.textToolsService.textSplit(this.text, this.symbol);
      } else if (data == 'delete-duplicate-lines') {
        this.text = this.textToolsService.deleteDuplicateLines(this.text);
      } else if (data == 'text-replace') {
        this.text = this.textToolsService.textReplace(this.text, this.replaceFrom, this.replaceTo);
      } else if (data == 'remove-empty-lines') {
        this.text = this.textToolsService.RemoveEmptyLines(this.text);
      }
    } else {
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 3000)
    }
  }

  // Copy To Clipboard Function
  copyClipboard(inputElement) {
    this.copied = true;
    setTimeout(() => {
      this.copied = false;
    }, 3000)
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }

  // Clear Input Box
  clear() {
    this.text = '';
  }

  // Download Function
  download() {
    var blob = new Blob([this.text], { type: "text/plain;charset=utf-8" });
    saveAs(blob, `textagram.txt`);
  }

  // Update Meta Tags
  updateMetaTags(): void {
    let href = window.location.href;

    // Set Title
    this.metaService.setTitle(this.title);

    // Set Others Keywords
    this.metaService.updateMetaTags({
      'description': `${this.subTitle}`,
      'keywords': `${this.title}`,
      'ogUrl': href,
      'ogtitle': `${this.title}`,
      'ogDescription': `${this.subTitle}`,
      'twitterUrl': href,
      'twitterTitle': `${this.title}`,
      'twitterDescription': `${this.subTitle}`
    });
  }
}
