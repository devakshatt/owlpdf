/**
 * Image Tools Component
 * @author    AppsPlaces <appsplaces@gmail.com>
 * @copyright Copyright (c) 2021
 * @license   AppsPlaces
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
      { title: 'Images to PNG', name: 'Convert to PNG', route: 'image/convert-to-png', img: "../../../../assets/img/image/png.png" },
      { title: 'Images to JPEG', name: 'Convert to JPEG', route: 'image/convert-to-jpeg', img: "../../../../assets/img/image/jpeg.png" },
      { title: 'Images to BMP', name: 'Convert to BMP', route: 'image/convert-to-bmp', img: "../../../../assets/img/image/bmp.png" },
      { title: 'Images to TIFF', name: 'Convert to TIFF', route: 'image/convert-to-tiff', img: "../../../../assets/img/image/tiff.png" }
    ]
  }

  mouseOver(classNum) {
    this.selected = classNum;
  }
}
