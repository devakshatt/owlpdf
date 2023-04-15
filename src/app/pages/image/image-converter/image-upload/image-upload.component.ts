/**
 * Image Converter Upload Component
 * @author    AppsPlaces <appsplaces@gmail.com>
 * @copyright Copyright (c) 2021
 * @license   AppsPlaces
 */

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { HumanFileSizeService } from '../../../../services/human-file-size.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MetaServiceService } from '../../../../services/meta-service.service';

declare var Jimp: any;
declare var JSZip: any;
declare var saveAs: any;

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})

export class ImageUploadComponent implements OnInit {

  output: any;
  input: any;
  isConvertSuccess: boolean;

  files: any;
  singleImg: any;
  zip: any;
  fileName: any;

  constructor(private router: Router,
    private cdr: ChangeDetectorRef,
    public humanFileSizeService: HumanFileSizeService,
    private spinner: NgxSpinnerService,
    private sanitizer: DomSanitizer,
    private metaService: MetaServiceService) {
    this.router.events.subscribe((val) => {
      this.initialize();
    })
  }

  ngOnInit() {
    this.initialize();
  }

  initialize(): void {
    this.isConvertSuccess = false;
    this.input = 'PNG, JPG, BMP, GIF, TIFF';

    let url = this.router.url;
    let isConvertUrl = url.search("/convert/");

    let _url = url.split('to-');
    this.output = _url[1];

    if (isConvertUrl == 0) {
      let _input = url.split('convert/');
      _input = _input[1].split('-to');
      this.input = _input[0];
    }

    this.files = [];
    this.zip = new JSZip();
  }

  ngAfterViewChecked() {
    this.updateMetaTags();
    this.cdr.detectChanges();
  }

  // Update Meta Tags
  // Modifies an existing <meta> tag element in the current HTML document.
  updateMetaTags(): void {
    let href = window.location.href;

    // Set Title
    this.metaService.setTitle('Image Converter');

    // Set Others Keywords
    if (!this.input) {
      this.metaService.updateMetaTags({
        'description': `${this.output} image converter, png to ${this.output} image converter, jpeg to ${this.output} image converter, tiff to ${this.output} image converter, bmp to ${this.output} image converter, jpg to ${this.output} image converter, gif to ${this.output} image converter, convert to ${this.output} image format, image format change, jpeg, png, tiff, bmp, gif image converter`,
        'keywords': `${this.output} image converter, png to ${this.output} image converter, jpeg to ${this.output} image converter, tiff to ${this.output} image converter, bmp to ${this.output} image converter, jpg to ${this.output} image converter, gif to ${this.output} image converter, convert to ${this.output} image format, image format change, jpeg, png, tiff, bmp, gif image converter`,
        'ogUrl': href,
        'ogtitle': `${this.output} image converter, png to ${this.output} image converter, jpeg to ${this.output} image converter, tiff to ${this.output} image converter, bmp to ${this.output} image converter, jpg to ${this.output} image converter, gif to ${this.output} image converter, convert to ${this.output} image format, image format change, jpeg, png, tiff, bmp, gif image converter`,
        'ogDescription': `${this.output} image converter, png to ${this.output} image converter, jpeg to ${this.output} image converter, tiff to ${this.output} image converter, bmp to ${this.output} image converter, jpg to ${this.output} image converter, gif to ${this.output} image converter, convert to ${this.output} image format, image format change, jpeg, png, tiff, bmp, gif image converter`,
        'twitterUrl': href,
        'twitterTitle': `${this.output} image converter, png to ${this.output} image converter, jpeg to ${this.output} image converter, tiff to ${this.output} image converter, bmp to ${this.output} image converter, jpg to ${this.output} image converter, gif to ${this.output} image converter, convert to ${this.output} image format, image format change, jpeg, png, tiff, bmp, gif image converter`,
        'twitterDescription': `${this.output} image converter, png to ${this.output} image converter, jpeg to ${this.output} image converter, tiff to ${this.output} image converter, bmp to ${this.output} image converter, jpg to ${this.output} image converter, gif to ${this.output} image converter, convert to ${this.output} image format, image format change, jpeg, png, tiff, bmp, gif image converter`
      });
    } else if (this.input) {
      this.metaService.updateMetaTags({
        'description': `${this.output} image converter, ${this.input} to ${this.output} image converter, ${this.input} to ${this.output}, online ${this.input} to ${this.output} image`,
        'keywords': `${this.output} image converter, ${this.input} to ${this.output} image converter, ${this.input} to ${this.output}, online ${this.input} to ${this.output} image`,
        'ogUrl': href,
        'ogtitle': `${this.output} image converter, ${this.input} to ${this.output} image converter, ${this.input} to ${this.output}, online ${this.input} to ${this.output} image`,
        'ogDescription': `${this.output} image converter, ${this.input} to ${this.output} image converter, ${this.input} to ${this.output}, online ${this.input} to ${this.output} image`,
        'twitterUrl': href,
        'twitterTitle': `${this.output} image converter, ${this.input} to ${this.output} image converter, ${this.input} to ${this.output}, online ${this.input} to ${this.output} image`,
        'twitterDescription': `${this.output} image converter, ${this.input} to ${this.output} image converter, ${this.input} to ${this.output}, online ${this.input} to ${this.output} image`
      });
    }
  }

  // Upload Image Files
  uploadFile(event): void {

    let imgsrc;

    for (let index = 0; index < event.length; index++) {
      let reader = new FileReader();

      const element = event[index];

      if (element.type.indexOf("image") == -1) {
        console.log('invalid type')
        break;
      }

      reader.onload = (e: any) => {
        imgsrc = e.target.result;
        this.files.push({ name: element.name, size: element.size, imgsrc })
      }
      reader.readAsDataURL(element);
    }
  }

  // Convert Image Files
  async convertImg() {
    this.spinner.show();


    this.zip.folder("iloveconverts");
    let img = this.zip.folder("iloveconverts");

    let outputFormat = 'image/' + this.output;

    for (let i = 0; i < this.files.length; i++) {

      await Jimp.read(this.files[i].imgsrc).then(async (lenna) => {
        await lenna.getBase64(outputFormat, async (err, src) => {
          this.singleImg = src;

          let newSrc = src.replace(/^data:image\/[a-z]+;base64,/, "");
          this.fileName = this.files[i].name.split('.')[0];
          img.file(`${this.fileName}.${this.output}`, newSrc, { base64: true });
        });
      });
    }

    this.spinner.hide();

    if (this.files.length === 1) {
      saveAs(this.singleImg, `${this.fileName}.${this.output}`);
    } else if (this.files.length > 1) {
      this.zip.generateAsync({ type: "blob" }).then(function (content) {
        saveAs(content, "iloveconverts.zip");
      });
    }

    this.isConvertSuccess = true;

  }

  // Download Converted Images
  downloadImages(): void {
    if (this.files.length === 1) {
      saveAs(this.singleImg, `${this.fileName}.${this.output}`);
    } else if (this.files.length > 1) {
      this.zip.generateAsync({ type: "blob" }).then(function (content) {
        saveAs(content, "iloveconverts.zip");
      });
    }
    this.files = [];
  }

  deleteAttachment(index): void {
    this.files.splice(index, 1)
  }
}
