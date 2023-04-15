/**
 * Encryption Tools Converter Page Module
 * @author    AppsPlaces <appsplaces@gmail.com>
 * @copyright Copyright (c) 2021
 * @license   AppsPlaces
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EncryptionToolsConverterComponent } from './encryption-tools-converter.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { AdsenseModule } from 'ng2-adsense';
import { environment } from "src/environments/environment";
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';

// Routes
const routes: Routes = [
  {
    path: '', component: EncryptionToolsConverterComponent,
    children: [
      { path: '', loadChildren: () => import('./encryption-tools/encryption-tools.module').then(m => m.EncryptionToolsModule) },
      { path: '', redirectTo: '/encryption-tools', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '/encryption-tools', pathMatch: 'full' }
];


@NgModule({
  declarations: [EncryptionToolsConverterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
export class EncryptionToolsConverterModule { }
