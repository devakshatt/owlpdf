/**
 * Image Converter Module
 * @author    AppsPlaces <appsplaces@gmail.com>
 * @copyright Copyright (c) 2021
 * @license   AppsPlaces
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ImageConverterComponent } from './image-converter.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { DetailsSectionOneComponent } from './details-section-one/details-section-one.component';
import { ComponentsModule } from '../../../components/components.module';
import { ImageSharedModule } from '../image-shared.module';
import { NgxSpinnerModule } from "ngx-spinner";
import { AdsenseModule } from 'ng2-adsense';
import { environment } from "src/environments/environment";
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';


const routes: Routes = [
  {
    path: '', component: ImageConverterComponent,
    children: [
      {
        path: 'image', component: ImageUploadComponent, children: [
          { path: 'convert-to-jpeg', component: ImageUploadComponent },
          { path: 'convert-to-png', component: ImageUploadComponent },
          { path: 'convert-to-bmp', component: ImageUploadComponent },
          { path: 'convert-to-tiff', component: ImageUploadComponent }
        ]
      },
      {
        path: 'convert', component: ImageUploadComponent, children: [
          { path: 'png-to-jpeg', component: ImageUploadComponent },
          { path: 'png-to-bmp', component: ImageUploadComponent },
          { path: 'png-to-tiff', component: ImageUploadComponent },
          { path: 'tiff-to-png', component: ImageUploadComponent },
          { path: 'tiff-to-jpeg', component: ImageUploadComponent },
          { path: 'tiff-to-bmp', component: ImageUploadComponent },
          { path: 'jpeg-to-png', component: ImageUploadComponent },
          { path: 'jpeg-to-bmp', component: ImageUploadComponent },
          { path: 'jpeg-to-tiff', component: ImageUploadComponent },
          { path: 'gif-to-png', component: ImageUploadComponent },
          { path: 'gif-to-jpeg', component: ImageUploadComponent },
          { path: 'gif-to-bmp', component: ImageUploadComponent },
          { path: 'gif-to-tiff', component: ImageUploadComponent },
          { path: 'bmp-to-jpeg', component: ImageUploadComponent },
          { path: 'bmp-to-png', component: ImageUploadComponent },
          { path: 'bmp-to-tiff', component: ImageUploadComponent },
        ]
      },
      {
        path: '',
        redirectTo: '/image/convert-to-jpeg',
        pathMatch: 'full'
      }
    ],
  },
  {
    path: '',
    redirectTo: '/image/convert-to-jpeg',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    ImageConverterComponent,
    ImageUploadComponent,
    DetailsSectionOneComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ImageSharedModule,
    ComponentsModule,
    NgxSpinnerModule,
    AdsenseModule.forRoot({
      adClient: environment.adClient,
      adSlot: environment.adSlot
    }),
    NgxGoogleAnalyticsModule.forRoot(environment.ga),
    NgxGoogleAnalyticsRouterModule
  ],
  exports: [RouterModule]
})

export class ImageConverterModule { }
