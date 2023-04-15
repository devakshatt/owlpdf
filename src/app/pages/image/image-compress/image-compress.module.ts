/**
 * Image Compress Module
 * @author    AppsPlaces <appsplaces@gmail.com>
 * @copyright Copyright (c) 2021
 * @license   AppsPlaces
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ImageCompressComponent } from './image-compress.component';
import { ComponentsModule } from '../../../components/components.module';
import { NgxSpinnerModule } from "ngx-spinner";
import { ImageSharedModule } from '../image-shared.module';

import { ImageCompressUploadComponent } from './image-compress-upload/image-compress-upload.component';
import { HowToCompressComponent } from './how-to-compress/how-to-compress.component';
import { MoreImageCompressorComponent } from './more-image-compressor/more-image-compressor.component';
import { AdsenseModule } from 'ng2-adsense';
import { environment } from "src/environments/environment";
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';


const routes: Routes = [
  {
    path: 'compress-image', component: ImageCompressComponent, children: [
      { path: 'compress-jpg', component: ImageCompressComponent },
      { path: 'compress-png', component: ImageCompressComponent },
      { path: 'compress-gif', component: ImageCompressComponent },
      { path: 'compress-bmp', component: ImageCompressComponent },
      { path: 'compress-tiff', component: ImageCompressComponent },
      { path: 'compress-jpeg', component: ImageCompressComponent }
    ]
  }
];


@NgModule({
  declarations: [
    ImageCompressUploadComponent,
    ImageCompressComponent,
    HowToCompressComponent,
    MoreImageCompressorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxSpinnerModule,
    ComponentsModule,
    ImageSharedModule,
    AdsenseModule.forRoot({
      adClient: environment.adClient,
      adSlot: environment.adSlot
    }),
    NgxGoogleAnalyticsModule.forRoot(environment.ga),
    NgxGoogleAnalyticsRouterModule
  ],
  exports: [RouterModule]
})


export class ImageCompressModule { }
