/**
 * App Routing Module
 * @author    AppsPlaces <appsplaces@gmail.com>
 * @copyright Copyright (c) 2021
 * @license   AppsPlaces
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: '', loadChildren: () => import('./pages/image/image-converter/image-converter.module').then(m => m.ImageConverterModule) },
  { path: '', loadChildren: () => import('./pages/image/image-compress/image-compress.module').then(m => m.ImageCompressModule) },
  { path: '', loadChildren: () => import('./pages/unit-converter/unit-converter.module').then(m => m.UnitConverterModule) },
  { path: '', loadChildren: () => import('./pages/text-tools-converter/text-tools-converter.module').then(m => m.TextToolsConverterModule) },
  { path: '', loadChildren: () => import('./pages/number-tools-converter/number-tools-converter.module').then(m => m.NumberToolsConverterModule) },
  { path: '', loadChildren: () => import('./pages/encryption-tools-converter/encryption-tools-converter.module').then(m => m.EncryptionToolsConverterModule) },
  { path: '', loadChildren: () => import('./pages/ocr/ocr.module').then(m => m.OcrModule) },
  { path: '', loadChildren: () => import('./pages/conversion-tools/conversion-tools.module').then(m => m.ConversionToolsModule) },
  { path: 'privacy-policy', loadChildren: () => import('./pages/privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyModule) },
  { path: 'terms', loadChildren: () => import('./pages/terms/terms.module').then(m => m.TermsModule) },
  { path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule) },
  { path: '**', loadChildren: () => import('./pages/four0four/four0four.module').then(m => m.Four0fourModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
