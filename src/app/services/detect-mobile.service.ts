/**
 * Mobile Device Detect Service
 * @author    AppsPlaces <appsplaces@gmail.com>
 * @copyright Copyright (c) 2021
 * @license   AppsPlaces
 */


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetectMobileService {

  constructor() { }

  isMobile() {
    if (navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/iPhone|iPad|iPod/i) ||
      navigator.userAgent.match(/IEMobile/i) ||
      navigator.userAgent.match(/BB10/i)) {
      return true;
    }
    return false;
  }
}
