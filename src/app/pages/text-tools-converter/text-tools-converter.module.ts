/**
 * Text Tools Converter Page Module
 * @author    AppsPlaces <appsplaces@gmail.com>
 * @copyright Copyright (c) 2021
 * @license   AppsPlaces
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextToolsConverterComponent } from './text-tools-converter.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { AdsenseModule } from 'ng2-adsense';
import { environment } from "src/environments/environment";
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';

// Routes
const routes: Routes = [
  {
    path: '', component: TextToolsConverterComponent,
    children: [
      { path: '', loadChildren: () => import('./text-tools/text-tools.module').then(m => m.TextToolsModule) },
      { path: '', redirectTo: '/text-tools', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '/text-tools', pathMatch: 'full' }
];


@NgModule({
  declarations: [TextToolsConverterComponent],
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
export class TextToolsConverterModule { }
