/**
 * Image Upload Component
 * @author    AppsPlaces <appsplaces@gmail.com>
 * @copyright Copyright (c) 2021
 * @license   AppsPlaces
 */

import { Component, OnInit } from '@angular/core';
import { createWorker } from 'tesseract.js';
import { LanguageListService } from '../recognition-languages/language-list.service';

declare var saveAs: any;

@Component({
  selector: 'app-image-upload-ocr',
  templateUrl: './image-upload-ocr.component.html',
  styleUrls: ['./image-upload-ocr.component.scss']
})
export class ImageUploadOcrComponent implements OnInit {

  languages: any; // List of languages
  fileInfo: any; // File information
  selectedLanguage: any; // User selected language by default It English
  progress: any; // Display progress when converting image to text
  ocrOutput: any; // Output result
  startScanning: Boolean; // When image scanning start
  fileName: any; // File name of image output

  constructor(private languageListService: LanguageListService) { }

  ngOnInit() {
    this.initialize();
  }

  // Initialize Function
  initialize(): void {
    this.selectedLanguage = 'eng'
    this.startScanning = false;
    this.progress = 0;
    this.fileInfo = {
      name: '',
      size: '',
      imgsrc: ''
    };
    this.languages = [];
    this.getLanguageList();
  }

  // Get All Supported OCR Language List
  getLanguageList(): void {
    this.languages = this.languageListService.languageList();
  }

  // Change Language From Dropdown
  changeLanguage(event) {
    this.selectedLanguage = event;
  }

  // Upload Image Files
  uploadFile(event): void {

    let imgsrc;

    for (let index = 0; index < event.length; index++) {
      let reader = new FileReader();

      const element = event[index];

      // if (element.size > 2113540) {
      //   alert("Image Size should not be greater than 1MB");
      //   return false;
      // }

      if (element.type.indexOf("image") == -1) {
        console.log('invalid type')
        break;
      }

      reader.onload = (e: any) => {
        imgsrc = e.target.result;
        this.progress = 0;
        this.fileInfo = { name: element.name, size: element.size, imgsrc };
      }
      reader.readAsDataURL(element);
    }
  }

  // Convert Function (Image To Text)
  async convertToOCR() {
    this.startScanning = true;
    const worker = createWorker({
      logger: m => {
        if (m.status == 'recognizing text') {
          this.startScanning = false;
          this.progress = m.progress * 100;
        }
      },
    });

    this.fileName = this.fileInfo.name.split('.')[0];
    await worker.load();
    await worker.loadLanguage(this.selectedLanguage);
    await worker.initialize(this.selectedLanguage);
    const { data: { text } } = await worker.recognize(this.fileInfo.imgsrc);
    this.ocrOutput = text;
    await worker.terminate();

    document.getElementById("ocrOutput").scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
  }

  // Download Text
  downloadOCR() {
    var blob = new Blob([this.ocrOutput], { type: "text/csv;charset=utf-8" });
    saveAs(blob, `${this.fileName}.txt`);
  }
}
