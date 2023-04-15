/**
 * Privacy Policy Module
 * @author    AppsPlaces <akshataggarwal005@gmail.com>
 * @copyright Copyright (c) 2023

 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PrivacyPolicyComponent } from './privacy-policy.component';
import { ComponentsModule } from '../../components/components.module';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';
import { environment } from "src/environments/environment";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    RouterModule.forChild([
      {
        path: '',
        component: PrivacyPolicyComponent
      }
    ]),
    NgxGoogleAnalyticsModule.forRoot(environment.ga),
    NgxGoogleAnalyticsRouterModule
  ],
  declarations: [PrivacyPolicyComponent],
})
export class PrivacyPolicyModule { }
