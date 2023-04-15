/**
 * OCR Main Module
 * @author    AppsPlaces <appsplaces@gmail.com>
 * @copyright Copyright (c) 2021
 * @license   AppsPlaces
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { OcrComponent } from './ocr.component';
import { ImageUploadOcrComponent } from './image-upload-ocr/image-upload-ocr.component';
import { ComponentsModule } from '../../components/components.module';
import { HowOcrWorkComponent } from './how-ocr-work/how-ocr-work.component';
import { RecognitionLanguagesComponent } from './recognition-languages/recognition-languages.component';
import { AdsenseModule } from 'ng2-adsense';
import { environment } from "src/environments/environment";
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';


const routes: Routes = [
  {
    path: '', component: OcrComponent,
    children: [
      { path: 'image-to-text', component: ImageUploadOcrComponent }
    ]
  }
];

@NgModule({
  declarations: [
    OcrComponent,
    ImageUploadOcrComponent,
    HowOcrWorkComponent,
    RecognitionLanguagesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    RouterModule.forChild(routes),
    AdsenseModule.forRoot({
      adClient: environment.adClient,
      adSlot: environment.adSlot
    }),
    NgxGoogleAnalyticsModule.forRoot(environment.ga),
    NgxGoogleAnalyticsRouterModule
  ],
  exports: [RouterModule]
})

export class OcrModule { }
