/**
 * Recognition Languages Component
 * @author    AppsPlaces <akshataggarwal005@gmail.com>
 * @copyright Copyright (c) 2023

 */

import { Component, OnInit } from '@angular/core';
import { LanguageListService } from './language-list.service';


@Component({
  selector: 'app-recognition-languages',
  templateUrl: './recognition-languages.component.html',
  styleUrls: ['./recognition-languages.component.scss']
})
export class RecognitionLanguagesComponent implements OnInit {

  languages: any;

  constructor(private languageListService: LanguageListService) { }

  ngOnInit() {
    this.getLanguageList();
  }

  // Get All Supported OCR Language List 
  getLanguageList(): void {
    this.languages = this.languageListService.languageList();
  }
}
