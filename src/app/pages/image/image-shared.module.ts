/**
 * Shared Module of Images
 * @author    AppsPlaces <appsplaces@gmail.com>
 * @copyright Copyright (c) 2021
 * @license   AppsPlaces
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DetailsSectionTwoComponent } from './image-converter/details-section-two/details-section-two.component';
import { DragdropDirective } from '../../directives/dragdrop.directive';


@NgModule({
  declarations: [
    DetailsSectionTwoComponent,
    DragdropDirective
  ],
  exports: [
    DetailsSectionTwoComponent,
    DragdropDirective
  ],
  entryComponents: [
    DetailsSectionTwoComponent,
    DragdropDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})

export class ImageSharedModule { }
