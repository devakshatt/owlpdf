/**
 * Image Tools Component
 * @author    CodePrimus <akshataggarwal005@gmail.com>
 * @copyright Copyright (c) 2023

 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-components',
  templateUrl: './image-components.component.html',
  styleUrls: ['./image-components.component.css']
})
export class ImageComponentsComponent implements OnInit {

  sideMenuOptions: any = [];
  selected: any = -1;

  constructor() { }

  ngOnInit() {
    this.menus();
  }

  menus() {
    this.sideMenuOptions = [
      { title: 'Compress', name: 'Compress Image', route: '/compress-image', img: "../../../../assets/img/image/compress.png" },
      { title: 'Images to PNG', name: 'Convert to PNG', route: 'image/convert-to-png', img: "../../../../assets/img/image/png.png" },
      { title: 'Images to JPEG', name: 'Convert to JPEG', route: 'image/convert-to-jpeg', img: "../../../../assets/img/image/jpg.png" },
      { title: 'Images to BMP', name: 'Convert to BMP', route: 'image/convert-to-bmp', img: "../../../../assets/img/image/image.png" },
      { title: 'Images to TIFF', name: 'Convert to TIFF', route: 'image/convert-to-tiff', img: "../../../../assets/img/image/tif.png" }
    ]
  }

  mouseOver(classNum) {
    this.selected = classNum;
  }
}
