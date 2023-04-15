/**
 * Number Tools Converter Page Module
 * @author    AppsPlaces <appsplaces@gmail.com>
 * @copyright Copyright (c) 2021
 * @license   AppsPlaces
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NumberToolsConverterComponent } from './number-tools-converter.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { AdsenseModule } from 'ng2-adsense';
import { environment } from "src/environments/environment";
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';

// Routes
const routes: Routes = [
  {
    path: '', component: NumberToolsConverterComponent,
    children: [
      { path: '', loadChildren: () => import('./number-tools/number-tools.module').then(m => m.NumberToolsModule) },
      { path: '', redirectTo: '/number-tools', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '/number-tools', pathMatch: 'full' }
];


@NgModule({
  declarations: [NumberToolsConverterComponent],
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
export class NumberToolsConverterModule { }
