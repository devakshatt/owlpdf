/**
 * Encryption Tools Module
 * @author    AppsPlaces <appsplaces@gmail.com>
 * @copyright Copyright (c) 2021
 * @license   AppsPlaces
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EncryptionToolsComponent } from './encryption-tools.component';

// Rotes
const routes: Routes = [
  { path: 'encryption-tools', component: EncryptionToolsComponent, data: { title: "Encryption Tools", subTitle: "" } },
  { path: 'base64-encode', component: EncryptionToolsComponent, data: { title: "Base64 Encode", subTitle: "" } },
  { path: 'base64-decode', component: EncryptionToolsComponent, data: { title: "Base64 Decode", subTitle: "" } },
  { path: 'url-encode', component: EncryptionToolsComponent, data: { title: "URL Encode", subTitle: "" } },
  { path: 'url-decode', component: EncryptionToolsComponent, data: { title: "URL Decode", subTitle: "" } },
  { path: 'md2-hash-generator', component: EncryptionToolsComponent, data: { title: "MD2 Hash Generator", subTitle: "" } },
  { path: 'md4-hash-generator', component: EncryptionToolsComponent, data: { title: "MD4 Hash Generator", subTitle: "" } },
  { path: 'md5-hash-generator', component: EncryptionToolsComponent, data: { title: "MD5 Hash Generator", subTitle: "" } },
  { path: 'sha1-hash-generator', component: EncryptionToolsComponent, data: { title: "SHA1 Hash Generator", subTitle: "" } },
  { path: 'sha256-hash-generator', component: EncryptionToolsComponent, data: { title: "SHA256 Hash Generator", subTitle: "" } },
  { path: 'sha512-hash-generator', component: EncryptionToolsComponent, data: { title: "SHA512 Hash Generator", subTitle: "" } },
  { path: 'utf8-encode', component: EncryptionToolsComponent, data: { title: "UTF8 Encode", subTitle: "" } },
  { path: 'utf8-decode', component: EncryptionToolsComponent, data: { title: "UTF8 Decode", subTitle: "" } },
];


@NgModule({
  declarations: [EncryptionToolsComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class EncryptionToolsModule { }
