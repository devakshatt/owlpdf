/**
 * Conversion Tools Module
 * @author    AppsPlaces <appsplaces@gmail.com>
 * @copyright Copyright (c) 2021
 * @license   AppsPlaces
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ConversionToolsAnyToAnyComponent } from './conversion-tools-any-to-any/conversion-tools-any-to-any.component';
import { ConversionToolsComponent } from './conversion-tools.component';
import { ComponentsModule } from '../../components/components.module';
import { AdsenseModule } from 'ng2-adsense';
import { environment } from "src/environments/environment";
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';

const routes: Routes = [
  {
    path: '', component: ConversionToolsComponent,
    children: [
      { path: 'xml-to-json', component: ConversionToolsAnyToAnyComponent },
      { path: 'json-to-xml', component: ConversionToolsAnyToAnyComponent },
      { path: 'json-to-csv', component: ConversionToolsAnyToAnyComponent },
      { path: 'csv-to-json', component: ConversionToolsAnyToAnyComponent },
      { path: 'json-to-text', component: ConversionToolsAnyToAnyComponent },
      { path: 'json-to-tsv', component: ConversionToolsAnyToAnyComponent },
      { path: 'tsv-to-json', component: ConversionToolsAnyToAnyComponent }
    ]
  }
];

@NgModule({
  declarations: [
    ConversionToolsComponent,
    ConversionToolsAnyToAnyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    AdsenseModule.forRoot({
      adClient: environment.adClient,
      adSlot: environment.adSlot
    }),
    NgxGoogleAnalyticsModule.forRoot(environment.ga),
    NgxGoogleAnalyticsRouterModule
  ],
  exports: [RouterModule]
})

export class ConversionToolsModule { }
