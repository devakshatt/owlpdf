/**
 * Image Compress Component
 * @author    AppsPlaces <appsplaces@gmail.com>
 * @copyright Copyright (c) 2021
 * @license   AppsPlaces
 */

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from '@angular/router';
import { HumanFileSizeService } from '../../../../services/human-file-size.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MetaServiceService } from '../../../../services/meta-service.service';

declare var Jimp: any;
declare var JSZip: any;
declare var saveAs: any;

@Component({
  selector: 'app-image-compress-upload',
  templateUrl: './image-compress-upload.component.html',
  styleUrls: ['./image-compress-upload.component.css']
})
export class ImageCompressUploadComponent implements OnInit {

  isCompressSuccess: boolean;
  outputFormat: any;
  files: any;
  singleImg: any;
  zip: any;
  fileName: any;
  input: any;
  output: any;

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
    // Get URL
    let url = this.router.url;

    let _input: any = url.split('-image/compress-');
    if (_input[1]) {
      this.input = _input[1];
    } else {
      this.input = 'JPG PNG BMP TIFF GIF';
    }

    this.isCompressSuccess = false;
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
    this.metaService.setTitle('Image Compress');

    // Set Others Keywords
    this.metaService.updateMetaTags({
      'description': `${this.input} image compress, compress ${this.input}, image compress, image compressor, online image compress, free image compress, compress ${this.input} image`,
      'keywords': `${this.input} image compress, compress ${this.input}, image compress, image compressor, online image compress, free image compress, compress ${this.input} image`,
      'ogUrl': href,
      'ogtitle': `${this.input} image compress, compress ${this.input}, image compress, image compressor, online image compress, free image compress, compress ${this.input} image`,
      'ogDescription': `${this.input} image compress, compress ${this.input}, image compress, image compressor, online image compress, free image compress, compress ${this.input} image`,
      'twitterUrl': href,
      'twitterTitle': `${this.input} image compress, compress ${this.input}, image compress, image compressor, online image compress, free image compress, compress ${this.input} image`,
      'twitterDescription': `${this.input} image compress, compress ${this.input}, image compress, image compressor, online image compress, free image compress, compress ${this.input} image`
    });
  }

  // Upload Image File
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
        this.files.push({ name: element.name, size: element.size, imgsrc, type: element.type })
      }
      reader.readAsDataURL(element);
    }
  }

  // Compress Images
  async compressImg() {

    this.spinner.show();

    this.zip.folder("iloveconverts");
    let img = this.zip.folder("iloveconverts");

    for (var i = 0; i < this.files.length; i++) {
      await Jimp.read(this.files[i].imgsrc).then(async (lenna) => {
        await lenna.quality(30);
        await lenna.getBase64(Jimp.MIME_JPEG, (err, src) => {
          this.singleImg = src;

          let newSrc = src.replace(/^data:image\/[a-z]+;base64,/, "");
          this.fileName = this.files[i].name;
          img.file(`${this.fileName}`, newSrc, { base64: true });

        });
      });
    }

    this.spinner.hide();

    if (this.files.length === 1) {
      saveAs(this.singleImg, `${this.fileName}`);
    } else if (this.files.length > 1) {
      this.zip.generateAsync({ type: "blob" }).then(function (content) {
        saveAs(content, "iloveconverts.zip");
      });
    }

    this.isCompressSuccess = true;

  }

  // Download Compressed Images
  downloadImages(): void {
    if (this.files.length === 1) {
      saveAs(this.singleImg, `${this.fileName}`);
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
