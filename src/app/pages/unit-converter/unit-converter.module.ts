/**
 * Unit Converter Module
 * @author    AppsPlaces <appsplaces@gmail.com>
 * @copyright Copyright (c) 2021
 * @license   AppsPlaces
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { AllUnitConverterComponent } from './all-unit-converter/all-unit-converter.component';
import { UnitConverterComponent } from './unit-converter.component';
import { ComponentsModule } from '../../components/components.module';
import { EachUnitConverterComponent } from './each-unit-converter/each-unit-converter.component';
import { AdsenseModule } from 'ng2-adsense';
import { environment } from "src/environments/environment";
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';


const routes: Routes = [
  {
    path: '', component: UnitConverterComponent,
    children: [{ path: 'length-converter', component: AllUnitConverterComponent },
    { path: 'area-converter', component: AllUnitConverterComponent },
    { path: 'each-converter', component: AllUnitConverterComponent },
    { path: 'mass-converter', component: AllUnitConverterComponent },
    { path: 'volume-converter', component: AllUnitConverterComponent },
    { path: 'volumeFlowRate-converter', component: AllUnitConverterComponent },
    { path: 'temperature-converter', component: AllUnitConverterComponent },
    { path: 'time-converter', component: AllUnitConverterComponent },
    { path: 'frequency-converter', component: AllUnitConverterComponent },
    { path: 'speed-converter', component: AllUnitConverterComponent },
    { path: 'pace-converter', component: AllUnitConverterComponent },
    { path: 'pressure-converter', component: AllUnitConverterComponent },
    { path: 'digital-converter', component: AllUnitConverterComponent },
    { path: 'illuminance-converter', component: AllUnitConverterComponent },
    { path: 'partsPer-converter', component: AllUnitConverterComponent },
    { path: 'voltage-converter', component: AllUnitConverterComponent },
    { path: 'current-converter', component: AllUnitConverterComponent },
    { path: 'power-converter', component: AllUnitConverterComponent },
    { path: 'apparentPower-converter', component: AllUnitConverterComponent },
    { path: 'reactivePower-converter', component: AllUnitConverterComponent },
    { path: 'energy-converter', component: AllUnitConverterComponent },
    { path: 'reactiveEnergy-converter', component: AllUnitConverterComponent },
    { path: 'angle-converter', component: AllUnitConverterComponent },
    {
      path: "mm-to-mm",
      component: EachUnitConverterComponent
    },
    {
      path: "mm-to-cm",
      component: EachUnitConverterComponent
    },
    {
      path: "mm-to-m",
      component: EachUnitConverterComponent
    },
    {
      path: "mm-to-km",
      component: EachUnitConverterComponent
    },
    {
      path: "mm-to-in",
      component: EachUnitConverterComponent
    },
    {
      path: "mm-to-yd",
      component: EachUnitConverterComponent
    },
    {
      path: "mm-to-ft-us",
      component: EachUnitConverterComponent
    },
    {
      path: "mm-to-ft",
      component: EachUnitConverterComponent
    },
    {
      path: "mm-to-mi",
      component: EachUnitConverterComponent
    },
    {
      path: "cm-to-mm",
      component: EachUnitConverterComponent
    },
    {
      path: "cm-to-cm",
      component: EachUnitConverterComponent
    },
    {
      path: "cm-to-m",
      component: EachUnitConverterComponent
    },
    {
      path: "cm-to-km",
      component: EachUnitConverterComponent
    },
    {
      path: "cm-to-in",
      component: EachUnitConverterComponent
    },
    {
      path: "cm-to-yd",
      component: EachUnitConverterComponent
    },
    {
      path: "cm-to-ft-us",
      component: EachUnitConverterComponent
    },
    {
      path: "cm-to-ft",
      component: EachUnitConverterComponent
    },
    {
      path: "cm-to-mi",
      component: EachUnitConverterComponent
    },
    {
      path: "m-to-mm",
      component: EachUnitConverterComponent
    },
    {
      path: "m-to-cm",
      component: EachUnitConverterComponent
    },
    {
      path: "m-to-m",
      component: EachUnitConverterComponent
    },
    {
      path: "m-to-km",
      component: EachUnitConverterComponent
    },
    {
      path: "m-to-in",
      component: EachUnitConverterComponent
    },
    {
      path: "m-to-yd",
      component: EachUnitConverterComponent
    },
    {
      path: "m-to-ft-us",
      component: EachUnitConverterComponent
    },
    {
      path: "m-to-ft",
      component: EachUnitConverterComponent
    },
    {
      path: "m-to-mi",
      component: EachUnitConverterComponent
    },
    {
      path: "km-to-mm",
      component: EachUnitConverterComponent
    },
    {
      path: "km-to-cm",
      component: EachUnitConverterComponent
    },
    {
      path: "km-to-m",
      component: EachUnitConverterComponent
    },
    {
      path: "km-to-km",
      component: EachUnitConverterComponent
    },
    {
      path: "km-to-in",
      component: EachUnitConverterComponent
    },
    {
      path: "km-to-yd",
      component: EachUnitConverterComponent
    },
    {
      path: "km-to-ft-us",
      component: EachUnitConverterComponent
    },
    {
      path: "km-to-ft",
      component: EachUnitConverterComponent
    },
    {
      path: "km-to-mi",
      component: EachUnitConverterComponent
    },
    {
      path: "in-to-mm",
      component: EachUnitConverterComponent
    },
    {
      path: "in-to-cm",
      component: EachUnitConverterComponent
    },
    {
      path: "in-to-m",
      component: EachUnitConverterComponent
    },
    {
      path: "in-to-km",
      component: EachUnitConverterComponent
    },
    {
      path: "in-to-in",
      component: EachUnitConverterComponent
    },
    {
      path: "in-to-yd",
      component: EachUnitConverterComponent
    },
    {
      path: "in-to-ft-us",
      component: EachUnitConverterComponent
    },
    {
      path: "in-to-ft",
      component: EachUnitConverterComponent
    },
    {
      path: "in-to-mi",
      component: EachUnitConverterComponent
    },
    {
      path: "yd-to-mm",
      component: EachUnitConverterComponent
    },
    {
      path: "yd-to-cm",
      component: EachUnitConverterComponent
    },
    {
      path: "yd-to-m",
      component: EachUnitConverterComponent
    },
    {
      path: "yd-to-km",
      component: EachUnitConverterComponent
    },
    {
      path: "yd-to-in",
      component: EachUnitConverterComponent
    },
    {
      path: "yd-to-yd",
      component: EachUnitConverterComponent
    },
    {
      path: "yd-to-ft-us",
      component: EachUnitConverterComponent
    },
    {
      path: "yd-to-ft",
      component: EachUnitConverterComponent
    },
    {
      path: "yd-to-mi",
      component: EachUnitConverterComponent
    },
    {
      path: "ft-us-to-mm",
      component: EachUnitConverterComponent
    },
    {
      path: "ft-us-to-cm",
      component: EachUnitConverterComponent
    },
    {
      path: "ft-us-to-m",
      component: EachUnitConverterComponent
    },
    {
      path: "ft-us-to-km",
      component: EachUnitConverterComponent
    },
    {
      path: "ft-us-to-in",
      component: EachUnitConverterComponent
    },
    {
      path: "ft-us-to-yd",
      component: EachUnitConverterComponent
    },
    {
      path: "ft-us-to-ft-us",
      component: EachUnitConverterComponent
    },
    {
      path: "ft-us-to-ft",
      component: EachUnitConverterComponent
    },
    {
      path: "ft-us-to-mi",
      component: EachUnitConverterComponent
    },
    {
      path: "ft-to-mm",
      component: EachUnitConverterComponent
    },
    {
      path: "ft-to-cm",
      component: EachUnitConverterComponent
    },
    {
      path: "ft-to-m",
      component: EachUnitConverterComponent
    },
    {
      path: "ft-to-km",
      component: EachUnitConverterComponent
    },
    {
      path: "ft-to-in",
      component: EachUnitConverterComponent
    },
    {
      path: "ft-to-yd",
      component: EachUnitConverterComponent
    },
    {
      path: "ft-to-ft-us",
      component: EachUnitConverterComponent
    },
    {
      path: "ft-to-ft",
      component: EachUnitConverterComponent
    },
    {
      path: "ft-to-mi",
      component: EachUnitConverterComponent
    },
    {
      path: "mi-to-mm",
      component: EachUnitConverterComponent
    },
    {
      path: "mi-to-cm",
      component: EachUnitConverterComponent
    },
    {
      path: "mi-to-m",
      component: EachUnitConverterComponent
    },
    {
      path: "mi-to-km",
      component: EachUnitConverterComponent
    },
    {
      path: "mi-to-in",
      component: EachUnitConverterComponent
    },
    {
      path: "mi-to-yd",
      component: EachUnitConverterComponent
    },
    {
      path: "mi-to-ft-us",
      component: EachUnitConverterComponent
    },
    {
      path: "mi-to-ft",
      component: EachUnitConverterComponent
    },
    {
      path: "mi-to-mi",
      component: EachUnitConverterComponent
    },
    {
      path: "mm2-to-mm2",
      component: EachUnitConverterComponent
    },
    {
      path: "mm2-to-cm2",
      component: EachUnitConverterComponent
    },
    {
      path: "mm2-to-m2",
      component: EachUnitConverterComponent
    },
    {
      path: "mm2-to-ha",
      component: EachUnitConverterComponent
    },
    {
      path: "mm2-to-km2",
      component: EachUnitConverterComponent
    },
    {
      path: "mm2-to-in2",
      component: EachUnitConverterComponent
    },
    {
      path: "mm2-to-yd2",
      component: EachUnitConverterComponent
    },
    {
      path: "mm2-to-ft2",
      component: EachUnitConverterComponent
    },
    {
      path: "mm2-to-ac",
      component: EachUnitConverterComponent
    },
    {
      path: "mm2-to-mi2",
      component: EachUnitConverterComponent
    },
    {
      path: "cm2-to-mm2",
      component: EachUnitConverterComponent
    },
    {
      path: "cm2-to-cm2",
      component: EachUnitConverterComponent
    },
    {
      path: "cm2-to-m2",
      component: EachUnitConverterComponent
    },
    {
      path: "cm2-to-ha",
      component: EachUnitConverterComponent
    },
    {
      path: "cm2-to-km2",
      component: EachUnitConverterComponent
    },
    {
      path: "cm2-to-in2",
      component: EachUnitConverterComponent
    },
    {
      path: "cm2-to-yd2",
      component: EachUnitConverterComponent
    },
    {
      path: "cm2-to-ft2",
      component: EachUnitConverterComponent
    },
    {
      path: "cm2-to-ac",
      component: EachUnitConverterComponent
    },
    {
      path: "cm2-to-mi2",
      component: EachUnitConverterComponent
    },
    {
      path: "m2-to-mm2",
      component: EachUnitConverterComponent
    },
    {
      path: "m2-to-cm2",
      component: EachUnitConverterComponent
    },
    {
      path: "m2-to-m2",
      component: EachUnitConverterComponent
    },
    {
      path: "m2-to-ha",
      component: EachUnitConverterComponent
    },
    {
      path: "m2-to-km2",
      component: EachUnitConverterComponent
    },
    {
      path: "m2-to-in2",
      component: EachUnitConverterComponent
    },
    {
      path: "m2-to-yd2",
      component: EachUnitConverterComponent
    },
    {
      path: "m2-to-ft2",
      component: EachUnitConverterComponent
    },
    {
      path: "m2-to-ac",
      component: EachUnitConverterComponent
    },
    {
      path: "m2-to-mi2",
      component: EachUnitConverterComponent
    },
    {
      path: "ha-to-mm2",
      component: EachUnitConverterComponent
    },
    {
      path: "ha-to-cm2",
      component: EachUnitConverterComponent
    },
    {
      path: "ha-to-m2",
      component: EachUnitConverterComponent
    },
    {
      path: "ha-to-ha",
      component: EachUnitConverterComponent
    },
    {
      path: "ha-to-km2",
      component: EachUnitConverterComponent
    },
    {
      path: "ha-to-in2",
      component: EachUnitConverterComponent
    },
    {
      path: "ha-to-yd2",
      component: EachUnitConverterComponent
    },
    {
      path: "ha-to-ft2",
      component: EachUnitConverterComponent
    },
    {
      path: "ha-to-ac",
      component: EachUnitConverterComponent
    },
    {
      path: "ha-to-mi2",
      component: EachUnitConverterComponent
    },
    {
      path: "km2-to-mm2",
      component: EachUnitConverterComponent
    },
    {
      path: "km2-to-cm2",
      component: EachUnitConverterComponent
    },
    {
      path: "km2-to-m2",
      component: EachUnitConverterComponent
    },
    {
      path: "km2-to-ha",
      component: EachUnitConverterComponent
    },
    {
      path: "km2-to-km2",
      component: EachUnitConverterComponent
    },
    {
      path: "km2-to-in2",
      component: EachUnitConverterComponent
    },
    {
      path: "km2-to-yd2",
      component: EachUnitConverterComponent
    },
    {
      path: "km2-to-ft2",
      component: EachUnitConverterComponent
    },
    {
      path: "km2-to-ac",
      component: EachUnitConverterComponent
    },
    {
      path: "km2-to-mi2",
      component: EachUnitConverterComponent
    },
    {
      path: "in2-to-mm2",
      component: EachUnitConverterComponent
    },
    {
      path: "in2-to-cm2",
      component: EachUnitConverterComponent
    },
    {
      path: "in2-to-m2",
      component: EachUnitConverterComponent
    },
    {
      path: "in2-to-ha",
      component: EachUnitConverterComponent
    },
    {
      path: "in2-to-km2",
      component: EachUnitConverterComponent
    },
    {
      path: "in2-to-in2",
      component: EachUnitConverterComponent
    },
    {
      path: "in2-to-yd2",
      component: EachUnitConverterComponent
    },
    {
      path: "in2-to-ft2",
      component: EachUnitConverterComponent
    },
    {
      path: "in2-to-ac",
      component: EachUnitConverterComponent
    },
    {
      path: "in2-to-mi2",
      component: EachUnitConverterComponent
    },
    {
      path: "yd2-to-mm2",
      component: EachUnitConverterComponent
    },
    {
      path: "yd2-to-cm2",
      component: EachUnitConverterComponent
    },
    {
      path: "yd2-to-m2",
      component: EachUnitConverterComponent
    },
    {
      path: "yd2-to-ha",
      component: EachUnitConverterComponent
    },
    {
      path: "yd2-to-km2",
      component: EachUnitConverterComponent
    },
    {
      path: "yd2-to-in2",
      component: EachUnitConverterComponent
    },
    {
      path: "yd2-to-yd2",
      component: EachUnitConverterComponent
    },
    {
      path: "yd2-to-ft2",
      component: EachUnitConverterComponent
    },
    {
      path: "yd2-to-ac",
      component: EachUnitConverterComponent
    },
    {
      path: "yd2-to-mi2",
      component: EachUnitConverterComponent
    },
    {
      path: "ft2-to-mm2",
      component: EachUnitConverterComponent
    },
    {
      path: "ft2-to-cm2",
      component: EachUnitConverterComponent
    },
    {
      path: "ft2-to-m2",
      component: EachUnitConverterComponent
    },
    {
      path: "ft2-to-ha",
      component: EachUnitConverterComponent
    },
    {
      path: "ft2-to-km2",
      component: EachUnitConverterComponent
    },
    {
      path: "ft2-to-in2",
      component: EachUnitConverterComponent
    },
    {
      path: "ft2-to-yd2",
      component: EachUnitConverterComponent
    },
    {
      path: "ft2-to-ft2",
      component: EachUnitConverterComponent
    },
    {
      path: "ft2-to-ac",
      component: EachUnitConverterComponent
    },
    {
      path: "ft2-to-mi2",
      component: EachUnitConverterComponent
    },
    {
      path: "ac-to-mm2",
      component: EachUnitConverterComponent
    },
    {
      path: "ac-to-cm2",
      component: EachUnitConverterComponent
    },
    {
      path: "ac-to-m2",
      component: EachUnitConverterComponent
    },
    {
      path: "ac-to-ha",
      component: EachUnitConverterComponent
    },
    {
      path: "ac-to-km2",
      component: EachUnitConverterComponent
    },
    {
      path: "ac-to-in2",
      component: EachUnitConverterComponent
    },
    {
      path: "ac-to-yd2",
      component: EachUnitConverterComponent
    },
    {
      path: "ac-to-ft2",
      component: EachUnitConverterComponent
    },
    {
      path: "ac-to-ac",
      component: EachUnitConverterComponent
    },
    {
      path: "ac-to-mi2",
      component: EachUnitConverterComponent
    },
    {
      path: "mi2-to-mm2",
      component: EachUnitConverterComponent
    },
    {
      path: "mi2-to-cm2",
      component: EachUnitConverterComponent
    },
    {
      path: "mi2-to-m2",
      component: EachUnitConverterComponent
    },
    {
      path: "mi2-to-ha",
      component: EachUnitConverterComponent
    },
    {
      path: "mi2-to-km2",
      component: EachUnitConverterComponent
    },
    {
      path: "mi2-to-in2",
      component: EachUnitConverterComponent
    },
    {
      path: "mi2-to-yd2",
      component: EachUnitConverterComponent
    },
    {
      path: "mi2-to-ft2",
      component: EachUnitConverterComponent
    },
    {
      path: "mi2-to-ac",
      component: EachUnitConverterComponent
    },
    {
      path: "mi2-to-mi2",
      component: EachUnitConverterComponent
    },
    {
      path: "mcg-to-mcg",
      component: EachUnitConverterComponent
    },
    {
      path: "mcg-to-mg",
      component: EachUnitConverterComponent
    },
    {
      path: "mcg-to-g",
      component: EachUnitConverterComponent
    },
    {
      path: "mcg-to-kg",
      component: EachUnitConverterComponent
    },
    {
      path: "mcg-to-mt",
      component: EachUnitConverterComponent
    },
    {
      path: "mcg-to-oz",
      component: EachUnitConverterComponent
    },
    {
      path: "mcg-to-lb",
      component: EachUnitConverterComponent
    },
    {
      path: "mcg-to-t",
      component: EachUnitConverterComponent
    },
    {
      path: "mg-to-mcg",
      component: EachUnitConverterComponent
    },
    {
      path: "mg-to-mg",
      component: EachUnitConverterComponent
    },
    {
      path: "mg-to-g",
      component: EachUnitConverterComponent
    },
    {
      path: "mg-to-kg",
      component: EachUnitConverterComponent
    },
    {
      path: "mg-to-mt",
      component: EachUnitConverterComponent
    },
    {
      path: "mg-to-oz",
      component: EachUnitConverterComponent
    },
    {
      path: "mg-to-lb",
      component: EachUnitConverterComponent
    },
    {
      path: "mg-to-t",
      component: EachUnitConverterComponent
    },
    {
      path: "g-to-mcg",
      component: EachUnitConverterComponent
    },
    {
      path: "g-to-mg",
      component: EachUnitConverterComponent
    },
    {
      path: "g-to-g",
      component: EachUnitConverterComponent
    },
    {
      path: "g-to-kg",
      component: EachUnitConverterComponent
    },
    {
      path: "g-to-mt",
      component: EachUnitConverterComponent
    },
    {
      path: "g-to-oz",
      component: EachUnitConverterComponent
    },
    {
      path: "g-to-lb",
      component: EachUnitConverterComponent
    },
    {
      path: "g-to-t",
      component: EachUnitConverterComponent
    },
    {
      path: "kg-to-mcg",
      component: EachUnitConverterComponent
    },
    {
      path: "kg-to-mg",
      component: EachUnitConverterComponent
    },
    {
      path: "kg-to-g",
      component: EachUnitConverterComponent
    },
    {
      path: "kg-to-kg",
      component: EachUnitConverterComponent
    },
    {
      path: "kg-to-mt",
      component: EachUnitConverterComponent
    },
    {
      path: "kg-to-oz",
      component: EachUnitConverterComponent
    },
    {
      path: "kg-to-lb",
      component: EachUnitConverterComponent
    },
    {
      path: "kg-to-t",
      component: EachUnitConverterComponent
    },
    {
      path: "mt-to-mcg",
      component: EachUnitConverterComponent
    },
    {
      path: "mt-to-mg",
      component: EachUnitConverterComponent
    },
    {
      path: "mt-to-g",
      component: EachUnitConverterComponent
    },
    {
      path: "mt-to-kg",
      component: EachUnitConverterComponent
    },
    {
      path: "mt-to-mt",
      component: EachUnitConverterComponent
    },
    {
      path: "mt-to-oz",
      component: EachUnitConverterComponent
    },
    {
      path: "mt-to-lb",
      component: EachUnitConverterComponent
    },
    {
      path: "mt-to-t",
      component: EachUnitConverterComponent
    },
    {
      path: "oz-to-mcg",
      component: EachUnitConverterComponent
    },
    {
      path: "oz-to-mg",
      component: EachUnitConverterComponent
    },
    {
      path: "oz-to-g",
      component: EachUnitConverterComponent
    },
    {
      path: "oz-to-kg",
      component: EachUnitConverterComponent
    },
    {
      path: "oz-to-mt",
      component: EachUnitConverterComponent
    },
    {
      path: "oz-to-oz",
      component: EachUnitConverterComponent
    },
    {
      path: "oz-to-lb",
      component: EachUnitConverterComponent
    },
    {
      path: "oz-to-t",
      component: EachUnitConverterComponent
    },
    {
      path: "lb-to-mcg",
      component: EachUnitConverterComponent
    },
    {
      path: "lb-to-mg",
      component: EachUnitConverterComponent
    },
    {
      path: "lb-to-g",
      component: EachUnitConverterComponent
    },
    {
      path: "lb-to-kg",
      component: EachUnitConverterComponent
    },
    {
      path: "lb-to-mt",
      component: EachUnitConverterComponent
    },
    {
      path: "lb-to-oz",
      component: EachUnitConverterComponent
    },
    {
      path: "lb-to-lb",
      component: EachUnitConverterComponent
    },
    {
      path: "lb-to-t",
      component: EachUnitConverterComponent
    },
    {
      path: "t-to-mcg",
      component: EachUnitConverterComponent
    },
    {
      path: "t-to-mg",
      component: EachUnitConverterComponent
    },
    {
      path: "t-to-g",
      component: EachUnitConverterComponent
    },
    {
      path: "t-to-kg",
      component: EachUnitConverterComponent
    },
    {
      path: "t-to-mt",
      component: EachUnitConverterComponent
    },
    {
      path: "t-to-oz",
      component: EachUnitConverterComponent
    },
    {
      path: "t-to-lb",
      component: EachUnitConverterComponent
    },
    {
      path: "t-to-t",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3-to-mm3",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3-to-cm3",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3-to-ml",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3-to-cl",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3-to-dl",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3-to-l",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3-to-kl",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3-to-m3",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3-to-km3",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3-to-krm",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3-to-tsk",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3-to-msk",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3-to-kkp",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3-to-glas",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3-to-kanna",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3-to-tsp",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3-to-Tbs",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3-to-in3",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3-to-fl-oz",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3-to-cup",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3-to-pnt",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3-to-qt",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3-to-gal",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3-to-ft3",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3-to-yd3",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3-to-mm3",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3-to-cm3",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3-to-ml",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3-to-cl",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3-to-dl",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3-to-l",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3-to-kl",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3-to-m3",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3-to-km3",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3-to-krm",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3-to-tsk",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3-to-msk",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3-to-kkp",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3-to-glas",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3-to-kanna",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3-to-tsp",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3-to-Tbs",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3-to-in3",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3-to-fl-oz",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3-to-cup",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3-to-pnt",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3-to-qt",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3-to-gal",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3-to-ft3",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3-to-yd3",
      component: EachUnitConverterComponent
    },
    {
      path: "ml-to-mm3",
      component: EachUnitConverterComponent
    },
    {
      path: "ml-to-cm3",
      component: EachUnitConverterComponent
    },
    {
      path: "ml-to-ml",
      component: EachUnitConverterComponent
    },
    {
      path: "ml-to-cl",
      component: EachUnitConverterComponent
    },
    {
      path: "ml-to-dl",
      component: EachUnitConverterComponent
    },
    {
      path: "ml-to-l",
      component: EachUnitConverterComponent
    },
    {
      path: "ml-to-kl",
      component: EachUnitConverterComponent
    },
    {
      path: "ml-to-m3",
      component: EachUnitConverterComponent
    },
    {
      path: "ml-to-km3",
      component: EachUnitConverterComponent
    },
    {
      path: "ml-to-krm",
      component: EachUnitConverterComponent
    },
    {
      path: "ml-to-tsk",
      component: EachUnitConverterComponent
    },
    {
      path: "ml-to-msk",
      component: EachUnitConverterComponent
    },
    {
      path: "ml-to-kkp",
      component: EachUnitConverterComponent
    },
    {
      path: "ml-to-glas",
      component: EachUnitConverterComponent
    },
    {
      path: "ml-to-kanna",
      component: EachUnitConverterComponent
    },
    {
      path: "ml-to-tsp",
      component: EachUnitConverterComponent
    },
    {
      path: "ml-to-Tbs",
      component: EachUnitConverterComponent
    },
    {
      path: "ml-to-in3",
      component: EachUnitConverterComponent
    },
    {
      path: "ml-to-fl-oz",
      component: EachUnitConverterComponent
    },
    {
      path: "ml-to-cup",
      component: EachUnitConverterComponent
    },
    {
      path: "ml-to-pnt",
      component: EachUnitConverterComponent
    },
    {
      path: "ml-to-qt",
      component: EachUnitConverterComponent
    },
    {
      path: "ml-to-gal",
      component: EachUnitConverterComponent
    },
    {
      path: "ml-to-ft3",
      component: EachUnitConverterComponent
    },
    {
      path: "ml-to-yd3",
      component: EachUnitConverterComponent
    },
    {
      path: "cl-to-mm3",
      component: EachUnitConverterComponent
    },
    {
      path: "cl-to-cm3",
      component: EachUnitConverterComponent
    },
    {
      path: "cl-to-ml",
      component: EachUnitConverterComponent
    },
    {
      path: "cl-to-cl",
      component: EachUnitConverterComponent
    },
    {
      path: "cl-to-dl",
      component: EachUnitConverterComponent
    },
    {
      path: "cl-to-l",
      component: EachUnitConverterComponent
    },
    {
      path: "cl-to-kl",
      component: EachUnitConverterComponent
    },
    {
      path: "cl-to-m3",
      component: EachUnitConverterComponent
    },
    {
      path: "cl-to-km3",
      component: EachUnitConverterComponent
    },
    {
      path: "cl-to-krm",
      component: EachUnitConverterComponent
    },
    {
      path: "cl-to-tsk",
      component: EachUnitConverterComponent
    },
    {
      path: "cl-to-msk",
      component: EachUnitConverterComponent
    },
    {
      path: "cl-to-kkp",
      component: EachUnitConverterComponent
    },
    {
      path: "cl-to-glas",
      component: EachUnitConverterComponent
    },
    {
      path: "cl-to-kanna",
      component: EachUnitConverterComponent
    },
    {
      path: "cl-to-tsp",
      component: EachUnitConverterComponent
    },
    {
      path: "cl-to-Tbs",
      component: EachUnitConverterComponent
    },
    {
      path: "cl-to-in3",
      component: EachUnitConverterComponent
    },
    {
      path: "cl-to-fl-oz",
      component: EachUnitConverterComponent
    },
    {
      path: "cl-to-cup",
      component: EachUnitConverterComponent
    },
    {
      path: "cl-to-pnt",
      component: EachUnitConverterComponent
    },
    {
      path: "cl-to-qt",
      component: EachUnitConverterComponent
    },
    {
      path: "cl-to-gal",
      component: EachUnitConverterComponent
    },
    {
      path: "cl-to-ft3",
      component: EachUnitConverterComponent
    },
    {
      path: "cl-to-yd3",
      component: EachUnitConverterComponent
    },
    {
      path: "dl-to-mm3",
      component: EachUnitConverterComponent
    },
    {
      path: "dl-to-cm3",
      component: EachUnitConverterComponent
    },
    {
      path: "dl-to-ml",
      component: EachUnitConverterComponent
    },
    {
      path: "dl-to-cl",
      component: EachUnitConverterComponent
    },
    {
      path: "dl-to-dl",
      component: EachUnitConverterComponent
    },
    {
      path: "dl-to-l",
      component: EachUnitConverterComponent
    },
    {
      path: "dl-to-kl",
      component: EachUnitConverterComponent
    },
    {
      path: "dl-to-m3",
      component: EachUnitConverterComponent
    },
    {
      path: "dl-to-km3",
      component: EachUnitConverterComponent
    },
    {
      path: "dl-to-krm",
      component: EachUnitConverterComponent
    },
    {
      path: "dl-to-tsk",
      component: EachUnitConverterComponent
    },
    {
      path: "dl-to-msk",
      component: EachUnitConverterComponent
    },
    {
      path: "dl-to-kkp",
      component: EachUnitConverterComponent
    },
    {
      path: "dl-to-glas",
      component: EachUnitConverterComponent
    },
    {
      path: "dl-to-kanna",
      component: EachUnitConverterComponent
    },
    {
      path: "dl-to-tsp",
      component: EachUnitConverterComponent
    },
    {
      path: "dl-to-Tbs",
      component: EachUnitConverterComponent
    },
    {
      path: "dl-to-in3",
      component: EachUnitConverterComponent
    },
    {
      path: "dl-to-fl-oz",
      component: EachUnitConverterComponent
    },
    {
      path: "dl-to-cup",
      component: EachUnitConverterComponent
    },
    {
      path: "dl-to-pnt",
      component: EachUnitConverterComponent
    },
    {
      path: "dl-to-qt",
      component: EachUnitConverterComponent
    },
    {
      path: "dl-to-gal",
      component: EachUnitConverterComponent
    },
    {
      path: "dl-to-ft3",
      component: EachUnitConverterComponent
    },
    {
      path: "dl-to-yd3",
      component: EachUnitConverterComponent
    },
    {
      path: "l-to-mm3",
      component: EachUnitConverterComponent
    },
    {
      path: "l-to-cm3",
      component: EachUnitConverterComponent
    },
    {
      path: "l-to-ml",
      component: EachUnitConverterComponent
    },
    {
      path: "l-to-cl",
      component: EachUnitConverterComponent
    },
    {
      path: "l-to-dl",
      component: EachUnitConverterComponent
    },
    {
      path: "l-to-l",
      component: EachUnitConverterComponent
    },
    {
      path: "l-to-kl",
      component: EachUnitConverterComponent
    },
    {
      path: "l-to-m3",
      component: EachUnitConverterComponent
    },
    {
      path: "l-to-km3",
      component: EachUnitConverterComponent
    },
    {
      path: "l-to-krm",
      component: EachUnitConverterComponent
    },
    {
      path: "l-to-tsk",
      component: EachUnitConverterComponent
    },
    {
      path: "l-to-msk",
      component: EachUnitConverterComponent
    },
    {
      path: "l-to-kkp",
      component: EachUnitConverterComponent
    },
    {
      path: "l-to-glas",
      component: EachUnitConverterComponent
    },
    {
      path: "l-to-kanna",
      component: EachUnitConverterComponent
    },
    {
      path: "l-to-tsp",
      component: EachUnitConverterComponent
    },
    {
      path: "l-to-Tbs",
      component: EachUnitConverterComponent
    },
    {
      path: "l-to-in3",
      component: EachUnitConverterComponent
    },
    {
      path: "l-to-fl-oz",
      component: EachUnitConverterComponent
    },
    {
      path: "l-to-cup",
      component: EachUnitConverterComponent
    },
    {
      path: "l-to-pnt",
      component: EachUnitConverterComponent
    },
    {
      path: "l-to-qt",
      component: EachUnitConverterComponent
    },
    {
      path: "l-to-gal",
      component: EachUnitConverterComponent
    },
    {
      path: "l-to-ft3",
      component: EachUnitConverterComponent
    },
    {
      path: "l-to-yd3",
      component: EachUnitConverterComponent
    },
    {
      path: "kl-to-mm3",
      component: EachUnitConverterComponent
    },
    {
      path: "kl-to-cm3",
      component: EachUnitConverterComponent
    },
    {
      path: "kl-to-ml",
      component: EachUnitConverterComponent
    },
    {
      path: "kl-to-cl",
      component: EachUnitConverterComponent
    },
    {
      path: "kl-to-dl",
      component: EachUnitConverterComponent
    },
    {
      path: "kl-to-l",
      component: EachUnitConverterComponent
    },
    {
      path: "kl-to-kl",
      component: EachUnitConverterComponent
    },
    {
      path: "kl-to-m3",
      component: EachUnitConverterComponent
    },
    {
      path: "kl-to-km3",
      component: EachUnitConverterComponent
    },
    {
      path: "kl-to-krm",
      component: EachUnitConverterComponent
    },
    {
      path: "kl-to-tsk",
      component: EachUnitConverterComponent
    },
    {
      path: "kl-to-msk",
      component: EachUnitConverterComponent
    },
    {
      path: "kl-to-kkp",
      component: EachUnitConverterComponent
    },
    {
      path: "kl-to-glas",
      component: EachUnitConverterComponent
    },
    {
      path: "kl-to-kanna",
      component: EachUnitConverterComponent
    },
    {
      path: "kl-to-tsp",
      component: EachUnitConverterComponent
    },
    {
      path: "kl-to-Tbs",
      component: EachUnitConverterComponent
    },
    {
      path: "kl-to-in3",
      component: EachUnitConverterComponent
    },
    {
      path: "kl-to-fl-oz",
      component: EachUnitConverterComponent
    },
    {
      path: "kl-to-cup",
      component: EachUnitConverterComponent
    },
    {
      path: "kl-to-pnt",
      component: EachUnitConverterComponent
    },
    {
      path: "kl-to-qt",
      component: EachUnitConverterComponent
    },
    {
      path: "kl-to-gal",
      component: EachUnitConverterComponent
    },
    {
      path: "kl-to-ft3",
      component: EachUnitConverterComponent
    },
    {
      path: "kl-to-yd3",
      component: EachUnitConverterComponent
    },
    {
      path: "m3-to-mm3",
      component: EachUnitConverterComponent
    },
    {
      path: "m3-to-cm3",
      component: EachUnitConverterComponent
    },
    {
      path: "m3-to-ml",
      component: EachUnitConverterComponent
    },
    {
      path: "m3-to-cl",
      component: EachUnitConverterComponent
    },
    {
      path: "m3-to-dl",
      component: EachUnitConverterComponent
    },
    {
      path: "m3-to-l",
      component: EachUnitConverterComponent
    },
    {
      path: "m3-to-kl",
      component: EachUnitConverterComponent
    },
    {
      path: "m3-to-m3",
      component: EachUnitConverterComponent
    },
    {
      path: "m3-to-km3",
      component: EachUnitConverterComponent
    },
    {
      path: "m3-to-krm",
      component: EachUnitConverterComponent
    },
    {
      path: "m3-to-tsk",
      component: EachUnitConverterComponent
    },
    {
      path: "m3-to-msk",
      component: EachUnitConverterComponent
    },
    {
      path: "m3-to-kkp",
      component: EachUnitConverterComponent
    },
    {
      path: "m3-to-glas",
      component: EachUnitConverterComponent
    },
    {
      path: "m3-to-kanna",
      component: EachUnitConverterComponent
    },
    {
      path: "m3-to-tsp",
      component: EachUnitConverterComponent
    },
    {
      path: "m3-to-Tbs",
      component: EachUnitConverterComponent
    },
    {
      path: "m3-to-in3",
      component: EachUnitConverterComponent
    },
    {
      path: "m3-to-fl-oz",
      component: EachUnitConverterComponent
    },
    {
      path: "m3-to-cup",
      component: EachUnitConverterComponent
    },
    {
      path: "m3-to-pnt",
      component: EachUnitConverterComponent
    },
    {
      path: "m3-to-qt",
      component: EachUnitConverterComponent
    },
    {
      path: "m3-to-gal",
      component: EachUnitConverterComponent
    },
    {
      path: "m3-to-ft3",
      component: EachUnitConverterComponent
    },
    {
      path: "m3-to-yd3",
      component: EachUnitConverterComponent
    },
    {
      path: "km3-to-mm3",
      component: EachUnitConverterComponent
    },
    {
      path: "km3-to-cm3",
      component: EachUnitConverterComponent
    },
    {
      path: "km3-to-ml",
      component: EachUnitConverterComponent
    },
    {
      path: "km3-to-cl",
      component: EachUnitConverterComponent
    },
    {
      path: "km3-to-dl",
      component: EachUnitConverterComponent
    },
    {
      path: "km3-to-l",
      component: EachUnitConverterComponent
    },
    {
      path: "km3-to-kl",
      component: EachUnitConverterComponent
    },
    {
      path: "km3-to-m3",
      component: EachUnitConverterComponent
    },
    {
      path: "km3-to-km3",
      component: EachUnitConverterComponent
    },
    {
      path: "km3-to-krm",
      component: EachUnitConverterComponent
    },
    {
      path: "km3-to-tsk",
      component: EachUnitConverterComponent
    },
    {
      path: "km3-to-msk",
      component: EachUnitConverterComponent
    },
    {
      path: "km3-to-kkp",
      component: EachUnitConverterComponent
    },
    {
      path: "km3-to-glas",
      component: EachUnitConverterComponent
    },
    {
      path: "km3-to-kanna",
      component: EachUnitConverterComponent
    },
    {
      path: "km3-to-tsp",
      component: EachUnitConverterComponent
    },
    {
      path: "km3-to-Tbs",
      component: EachUnitConverterComponent
    },
    {
      path: "km3-to-in3",
      component: EachUnitConverterComponent
    },
    {
      path: "km3-to-fl-oz",
      component: EachUnitConverterComponent
    },
    {
      path: "km3-to-cup",
      component: EachUnitConverterComponent
    },
    {
      path: "km3-to-pnt",
      component: EachUnitConverterComponent
    },
    {
      path: "km3-to-qt",
      component: EachUnitConverterComponent
    },
    {
      path: "km3-to-gal",
      component: EachUnitConverterComponent
    },
    {
      path: "km3-to-ft3",
      component: EachUnitConverterComponent
    },
    {
      path: "km3-to-yd3",
      component: EachUnitConverterComponent
    },
    {
      path: "krm-to-mm3",
      component: EachUnitConverterComponent
    },
    {
      path: "krm-to-cm3",
      component: EachUnitConverterComponent
    },
    {
      path: "krm-to-ml",
      component: EachUnitConverterComponent
    },
    {
      path: "krm-to-cl",
      component: EachUnitConverterComponent
    },
    {
      path: "krm-to-dl",
      component: EachUnitConverterComponent
    },
    {
      path: "krm-to-l",
      component: EachUnitConverterComponent
    },
    {
      path: "krm-to-kl",
      component: EachUnitConverterComponent
    },
    {
      path: "krm-to-m3",
      component: EachUnitConverterComponent
    },
    {
      path: "krm-to-km3",
      component: EachUnitConverterComponent
    },
    {
      path: "krm-to-krm",
      component: EachUnitConverterComponent
    },
    {
      path: "krm-to-tsk",
      component: EachUnitConverterComponent
    },
    {
      path: "krm-to-msk",
      component: EachUnitConverterComponent
    },
    {
      path: "krm-to-kkp",
      component: EachUnitConverterComponent
    },
    {
      path: "krm-to-glas",
      component: EachUnitConverterComponent
    },
    {
      path: "krm-to-kanna",
      component: EachUnitConverterComponent
    },
    {
      path: "krm-to-tsp",
      component: EachUnitConverterComponent
    },
    {
      path: "krm-to-Tbs",
      component: EachUnitConverterComponent
    },
    {
      path: "krm-to-in3",
      component: EachUnitConverterComponent
    },
    {
      path: "krm-to-fl-oz",
      component: EachUnitConverterComponent
    },
    {
      path: "krm-to-cup",
      component: EachUnitConverterComponent
    },
    {
      path: "krm-to-pnt",
      component: EachUnitConverterComponent
    },
    {
      path: "krm-to-qt",
      component: EachUnitConverterComponent
    },
    {
      path: "krm-to-gal",
      component: EachUnitConverterComponent
    },
    {
      path: "krm-to-ft3",
      component: EachUnitConverterComponent
    },
    {
      path: "krm-to-yd3",
      component: EachUnitConverterComponent
    },
    {
      path: "tsk-to-mm3",
      component: EachUnitConverterComponent
    },
    {
      path: "tsk-to-cm3",
      component: EachUnitConverterComponent
    },
    {
      path: "tsk-to-ml",
      component: EachUnitConverterComponent
    },
    {
      path: "tsk-to-cl",
      component: EachUnitConverterComponent
    },
    {
      path: "tsk-to-dl",
      component: EachUnitConverterComponent
    },
    {
      path: "tsk-to-l",
      component: EachUnitConverterComponent
    },
    {
      path: "tsk-to-kl",
      component: EachUnitConverterComponent
    },
    {
      path: "tsk-to-m3",
      component: EachUnitConverterComponent
    },
    {
      path: "tsk-to-km3",
      component: EachUnitConverterComponent
    },
    {
      path: "tsk-to-krm",
      component: EachUnitConverterComponent
    },
    {
      path: "tsk-to-tsk",
      component: EachUnitConverterComponent
    },
    {
      path: "tsk-to-msk",
      component: EachUnitConverterComponent
    },
    {
      path: "tsk-to-kkp",
      component: EachUnitConverterComponent
    },
    {
      path: "tsk-to-glas",
      component: EachUnitConverterComponent
    },
    {
      path: "tsk-to-kanna",
      component: EachUnitConverterComponent
    },
    {
      path: "tsk-to-tsp",
      component: EachUnitConverterComponent
    },
    {
      path: "tsk-to-Tbs",
      component: EachUnitConverterComponent
    },
    {
      path: "tsk-to-in3",
      component: EachUnitConverterComponent
    },
    {
      path: "tsk-to-fl-oz",
      component: EachUnitConverterComponent
    },
    {
      path: "tsk-to-cup",
      component: EachUnitConverterComponent
    },
    {
      path: "tsk-to-pnt",
      component: EachUnitConverterComponent
    },
    {
      path: "tsk-to-qt",
      component: EachUnitConverterComponent
    },
    {
      path: "tsk-to-gal",
      component: EachUnitConverterComponent
    },
    {
      path: "tsk-to-ft3",
      component: EachUnitConverterComponent
    },
    {
      path: "tsk-to-yd3",
      component: EachUnitConverterComponent
    },
    {
      path: "msk-to-mm3",
      component: EachUnitConverterComponent
    },
    {
      path: "msk-to-cm3",
      component: EachUnitConverterComponent
    },
    {
      path: "msk-to-ml",
      component: EachUnitConverterComponent
    },
    {
      path: "msk-to-cl",
      component: EachUnitConverterComponent
    },
    {
      path: "msk-to-dl",
      component: EachUnitConverterComponent
    },
    {
      path: "msk-to-l",
      component: EachUnitConverterComponent
    },
    {
      path: "msk-to-kl",
      component: EachUnitConverterComponent
    },
    {
      path: "msk-to-m3",
      component: EachUnitConverterComponent
    },
    {
      path: "msk-to-km3",
      component: EachUnitConverterComponent
    },
    {
      path: "msk-to-krm",
      component: EachUnitConverterComponent
    },
    {
      path: "msk-to-tsk",
      component: EachUnitConverterComponent
    },
    {
      path: "msk-to-msk",
      component: EachUnitConverterComponent
    },
    {
      path: "msk-to-kkp",
      component: EachUnitConverterComponent
    },
    {
      path: "msk-to-glas",
      component: EachUnitConverterComponent
    },
    {
      path: "msk-to-kanna",
      component: EachUnitConverterComponent
    },
    {
      path: "msk-to-tsp",
      component: EachUnitConverterComponent
    },
    {
      path: "msk-to-Tbs",
      component: EachUnitConverterComponent
    },
    {
      path: "msk-to-in3",
      component: EachUnitConverterComponent
    },
    {
      path: "msk-to-fl-oz",
      component: EachUnitConverterComponent
    },
    {
      path: "msk-to-cup",
      component: EachUnitConverterComponent
    },
    {
      path: "msk-to-pnt",
      component: EachUnitConverterComponent
    },
    {
      path: "msk-to-qt",
      component: EachUnitConverterComponent
    },
    {
      path: "msk-to-gal",
      component: EachUnitConverterComponent
    },
    {
      path: "msk-to-ft3",
      component: EachUnitConverterComponent
    },
    {
      path: "msk-to-yd3",
      component: EachUnitConverterComponent
    },
    {
      path: "kkp-to-mm3",
      component: EachUnitConverterComponent
    },
    {
      path: "kkp-to-cm3",
      component: EachUnitConverterComponent
    },
    {
      path: "kkp-to-ml",
      component: EachUnitConverterComponent
    },
    {
      path: "kkp-to-cl",
      component: EachUnitConverterComponent
    },
    {
      path: "kkp-to-dl",
      component: EachUnitConverterComponent
    },
    {
      path: "kkp-to-l",
      component: EachUnitConverterComponent
    },
    {
      path: "kkp-to-kl",
      component: EachUnitConverterComponent
    },
    {
      path: "kkp-to-m3",
      component: EachUnitConverterComponent
    },
    {
      path: "kkp-to-km3",
      component: EachUnitConverterComponent
    },
    {
      path: "kkp-to-krm",
      component: EachUnitConverterComponent
    },
    {
      path: "kkp-to-tsk",
      component: EachUnitConverterComponent
    },
    {
      path: "kkp-to-msk",
      component: EachUnitConverterComponent
    },
    {
      path: "kkp-to-kkp",
      component: EachUnitConverterComponent
    },
    {
      path: "kkp-to-glas",
      component: EachUnitConverterComponent
    },
    {
      path: "kkp-to-kanna",
      component: EachUnitConverterComponent
    },
    {
      path: "kkp-to-tsp",
      component: EachUnitConverterComponent
    },
    {
      path: "kkp-to-Tbs",
      component: EachUnitConverterComponent
    },
    {
      path: "kkp-to-in3",
      component: EachUnitConverterComponent
    },
    {
      path: "kkp-to-fl-oz",
      component: EachUnitConverterComponent
    },
    {
      path: "kkp-to-cup",
      component: EachUnitConverterComponent
    },
    {
      path: "kkp-to-pnt",
      component: EachUnitConverterComponent
    },
    {
      path: "kkp-to-qt",
      component: EachUnitConverterComponent
    },
    {
      path: "kkp-to-gal",
      component: EachUnitConverterComponent
    },
    {
      path: "kkp-to-ft3",
      component: EachUnitConverterComponent
    },
    {
      path: "kkp-to-yd3",
      component: EachUnitConverterComponent
    },
    {
      path: "glas-to-mm3",
      component: EachUnitConverterComponent
    },
    {
      path: "glas-to-cm3",
      component: EachUnitConverterComponent
    },
    {
      path: "glas-to-ml",
      component: EachUnitConverterComponent
    },
    {
      path: "glas-to-cl",
      component: EachUnitConverterComponent
    },
    {
      path: "glas-to-dl",
      component: EachUnitConverterComponent
    },
    {
      path: "glas-to-l",
      component: EachUnitConverterComponent
    },
    {
      path: "glas-to-kl",
      component: EachUnitConverterComponent
    },
    {
      path: "glas-to-m3",
      component: EachUnitConverterComponent
    },
    {
      path: "glas-to-km3",
      component: EachUnitConverterComponent
    },
    {
      path: "glas-to-krm",
      component: EachUnitConverterComponent
    },
    {
      path: "glas-to-tsk",
      component: EachUnitConverterComponent
    },
    {
      path: "glas-to-msk",
      component: EachUnitConverterComponent
    },
    {
      path: "glas-to-kkp",
      component: EachUnitConverterComponent
    },
    {
      path: "glas-to-glas",
      component: EachUnitConverterComponent
    },
    {
      path: "glas-to-kanna",
      component: EachUnitConverterComponent
    },
    {
      path: "glas-to-tsp",
      component: EachUnitConverterComponent
    },
    {
      path: "glas-to-Tbs",
      component: EachUnitConverterComponent
    },
    {
      path: "glas-to-in3",
      component: EachUnitConverterComponent
    },
    {
      path: "glas-to-fl-oz",
      component: EachUnitConverterComponent
    },
    {
      path: "glas-to-cup",
      component: EachUnitConverterComponent
    },
    {
      path: "glas-to-pnt",
      component: EachUnitConverterComponent
    },
    {
      path: "glas-to-qt",
      component: EachUnitConverterComponent
    },
    {
      path: "glas-to-gal",
      component: EachUnitConverterComponent
    },
    {
      path: "glas-to-ft3",
      component: EachUnitConverterComponent
    },
    {
      path: "glas-to-yd3",
      component: EachUnitConverterComponent
    },
    {
      path: "kanna-to-mm3",
      component: EachUnitConverterComponent
    },
    {
      path: "kanna-to-cm3",
      component: EachUnitConverterComponent
    },
    {
      path: "kanna-to-ml",
      component: EachUnitConverterComponent
    },
    {
      path: "kanna-to-cl",
      component: EachUnitConverterComponent
    },
    {
      path: "kanna-to-dl",
      component: EachUnitConverterComponent
    },
    {
      path: "kanna-to-l",
      component: EachUnitConverterComponent
    },
    {
      path: "kanna-to-kl",
      component: EachUnitConverterComponent
    },
    {
      path: "kanna-to-m3",
      component: EachUnitConverterComponent
    },
    {
      path: "kanna-to-km3",
      component: EachUnitConverterComponent
    },
    {
      path: "kanna-to-krm",
      component: EachUnitConverterComponent
    },
    {
      path: "kanna-to-tsk",
      component: EachUnitConverterComponent
    },
    {
      path: "kanna-to-msk",
      component: EachUnitConverterComponent
    },
    {
      path: "kanna-to-kkp",
      component: EachUnitConverterComponent
    },
    {
      path: "kanna-to-glas",
      component: EachUnitConverterComponent
    },
    {
      path: "kanna-to-kanna",
      component: EachUnitConverterComponent
    },
    {
      path: "kanna-to-tsp",
      component: EachUnitConverterComponent
    },
    {
      path: "kanna-to-Tbs",
      component: EachUnitConverterComponent
    },
    {
      path: "kanna-to-in3",
      component: EachUnitConverterComponent
    },
    {
      path: "kanna-to-fl-oz",
      component: EachUnitConverterComponent
    },
    {
      path: "kanna-to-cup",
      component: EachUnitConverterComponent
    },
    {
      path: "kanna-to-pnt",
      component: EachUnitConverterComponent
    },
    {
      path: "kanna-to-qt",
      component: EachUnitConverterComponent
    },
    {
      path: "kanna-to-gal",
      component: EachUnitConverterComponent
    },
    {
      path: "kanna-to-ft3",
      component: EachUnitConverterComponent
    },
    {
      path: "kanna-to-yd3",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp-to-mm3",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp-to-cm3",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp-to-ml",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp-to-cl",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp-to-dl",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp-to-l",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp-to-kl",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp-to-m3",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp-to-km3",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp-to-krm",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp-to-tsk",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp-to-msk",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp-to-kkp",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp-to-glas",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp-to-kanna",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp-to-tsp",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp-to-Tbs",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp-to-in3",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp-to-fl-oz",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp-to-cup",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp-to-pnt",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp-to-qt",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp-to-gal",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp-to-ft3",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp-to-yd3",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs-to-mm3",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs-to-cm3",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs-to-ml",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs-to-cl",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs-to-dl",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs-to-l",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs-to-kl",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs-to-m3",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs-to-km3",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs-to-krm",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs-to-tsk",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs-to-msk",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs-to-kkp",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs-to-glas",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs-to-kanna",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs-to-tsp",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs-to-Tbs",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs-to-in3",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs-to-fl-oz",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs-to-cup",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs-to-pnt",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs-to-qt",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs-to-gal",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs-to-ft3",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs-to-yd3",
      component: EachUnitConverterComponent
    },
    {
      path: "in3-to-mm3",
      component: EachUnitConverterComponent
    },
    {
      path: "in3-to-cm3",
      component: EachUnitConverterComponent
    },
    {
      path: "in3-to-ml",
      component: EachUnitConverterComponent
    },
    {
      path: "in3-to-cl",
      component: EachUnitConverterComponent
    },
    {
      path: "in3-to-dl",
      component: EachUnitConverterComponent
    },
    {
      path: "in3-to-l",
      component: EachUnitConverterComponent
    },
    {
      path: "in3-to-kl",
      component: EachUnitConverterComponent
    },
    {
      path: "in3-to-m3",
      component: EachUnitConverterComponent
    },
    {
      path: "in3-to-km3",
      component: EachUnitConverterComponent
    },
    {
      path: "in3-to-krm",
      component: EachUnitConverterComponent
    },
    {
      path: "in3-to-tsk",
      component: EachUnitConverterComponent
    },
    {
      path: "in3-to-msk",
      component: EachUnitConverterComponent
    },
    {
      path: "in3-to-kkp",
      component: EachUnitConverterComponent
    },
    {
      path: "in3-to-glas",
      component: EachUnitConverterComponent
    },
    {
      path: "in3-to-kanna",
      component: EachUnitConverterComponent
    },
    {
      path: "in3-to-tsp",
      component: EachUnitConverterComponent
    },
    {
      path: "in3-to-Tbs",
      component: EachUnitConverterComponent
    },
    {
      path: "in3-to-in3",
      component: EachUnitConverterComponent
    },
    {
      path: "in3-to-fl-oz",
      component: EachUnitConverterComponent
    },
    {
      path: "in3-to-cup",
      component: EachUnitConverterComponent
    },
    {
      path: "in3-to-pnt",
      component: EachUnitConverterComponent
    },
    {
      path: "in3-to-qt",
      component: EachUnitConverterComponent
    },
    {
      path: "in3-to-gal",
      component: EachUnitConverterComponent
    },
    {
      path: "in3-to-ft3",
      component: EachUnitConverterComponent
    },
    {
      path: "in3-to-yd3",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz-to-mm3",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz-to-cm3",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz-to-ml",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz-to-cl",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz-to-dl",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz-to-l",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz-to-kl",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz-to-m3",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz-to-km3",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz-to-krm",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz-to-tsk",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz-to-msk",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz-to-kkp",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz-to-glas",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz-to-kanna",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz-to-tsp",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz-to-Tbs",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz-to-in3",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz-to-fl-oz",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz-to-cup",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz-to-pnt",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz-to-qt",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz-to-gal",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz-to-ft3",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz-to-yd3",
      component: EachUnitConverterComponent
    },
    {
      path: "cup-to-mm3",
      component: EachUnitConverterComponent
    },
    {
      path: "cup-to-cm3",
      component: EachUnitConverterComponent
    },
    {
      path: "cup-to-ml",
      component: EachUnitConverterComponent
    },
    {
      path: "cup-to-cl",
      component: EachUnitConverterComponent
    },
    {
      path: "cup-to-dl",
      component: EachUnitConverterComponent
    },
    {
      path: "cup-to-l",
      component: EachUnitConverterComponent
    },
    {
      path: "cup-to-kl",
      component: EachUnitConverterComponent
    },
    {
      path: "cup-to-m3",
      component: EachUnitConverterComponent
    },
    {
      path: "cup-to-km3",
      component: EachUnitConverterComponent
    },
    {
      path: "cup-to-krm",
      component: EachUnitConverterComponent
    },
    {
      path: "cup-to-tsk",
      component: EachUnitConverterComponent
    },
    {
      path: "cup-to-msk",
      component: EachUnitConverterComponent
    },
    {
      path: "cup-to-kkp",
      component: EachUnitConverterComponent
    },
    {
      path: "cup-to-glas",
      component: EachUnitConverterComponent
    },
    {
      path: "cup-to-kanna",
      component: EachUnitConverterComponent
    },
    {
      path: "cup-to-tsp",
      component: EachUnitConverterComponent
    },
    {
      path: "cup-to-Tbs",
      component: EachUnitConverterComponent
    },
    {
      path: "cup-to-in3",
      component: EachUnitConverterComponent
    },
    {
      path: "cup-to-fl-oz",
      component: EachUnitConverterComponent
    },
    {
      path: "cup-to-cup",
      component: EachUnitConverterComponent
    },
    {
      path: "cup-to-pnt",
      component: EachUnitConverterComponent
    },
    {
      path: "cup-to-qt",
      component: EachUnitConverterComponent
    },
    {
      path: "cup-to-gal",
      component: EachUnitConverterComponent
    },
    {
      path: "cup-to-ft3",
      component: EachUnitConverterComponent
    },
    {
      path: "cup-to-yd3",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt-to-mm3",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt-to-cm3",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt-to-ml",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt-to-cl",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt-to-dl",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt-to-l",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt-to-kl",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt-to-m3",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt-to-km3",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt-to-krm",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt-to-tsk",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt-to-msk",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt-to-kkp",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt-to-glas",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt-to-kanna",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt-to-tsp",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt-to-Tbs",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt-to-in3",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt-to-fl-oz",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt-to-cup",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt-to-pnt",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt-to-qt",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt-to-gal",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt-to-ft3",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt-to-yd3",
      component: EachUnitConverterComponent
    },
    {
      path: "qt-to-mm3",
      component: EachUnitConverterComponent
    },
    {
      path: "qt-to-cm3",
      component: EachUnitConverterComponent
    },
    {
      path: "qt-to-ml",
      component: EachUnitConverterComponent
    },
    {
      path: "qt-to-cl",
      component: EachUnitConverterComponent
    },
    {
      path: "qt-to-dl",
      component: EachUnitConverterComponent
    },
    {
      path: "qt-to-l",
      component: EachUnitConverterComponent
    },
    {
      path: "qt-to-kl",
      component: EachUnitConverterComponent
    },
    {
      path: "qt-to-m3",
      component: EachUnitConverterComponent
    },
    {
      path: "qt-to-km3",
      component: EachUnitConverterComponent
    },
    {
      path: "qt-to-krm",
      component: EachUnitConverterComponent
    },
    {
      path: "qt-to-tsk",
      component: EachUnitConverterComponent
    },
    {
      path: "qt-to-msk",
      component: EachUnitConverterComponent
    },
    {
      path: "qt-to-kkp",
      component: EachUnitConverterComponent
    },
    {
      path: "qt-to-glas",
      component: EachUnitConverterComponent
    },
    {
      path: "qt-to-kanna",
      component: EachUnitConverterComponent
    },
    {
      path: "qt-to-tsp",
      component: EachUnitConverterComponent
    },
    {
      path: "qt-to-Tbs",
      component: EachUnitConverterComponent
    },
    {
      path: "qt-to-in3",
      component: EachUnitConverterComponent
    },
    {
      path: "qt-to-fl-oz",
      component: EachUnitConverterComponent
    },
    {
      path: "qt-to-cup",
      component: EachUnitConverterComponent
    },
    {
      path: "qt-to-pnt",
      component: EachUnitConverterComponent
    },
    {
      path: "qt-to-qt",
      component: EachUnitConverterComponent
    },
    {
      path: "qt-to-gal",
      component: EachUnitConverterComponent
    },
    {
      path: "qt-to-ft3",
      component: EachUnitConverterComponent
    },
    {
      path: "qt-to-yd3",
      component: EachUnitConverterComponent
    },
    {
      path: "gal-to-mm3",
      component: EachUnitConverterComponent
    },
    {
      path: "gal-to-cm3",
      component: EachUnitConverterComponent
    },
    {
      path: "gal-to-ml",
      component: EachUnitConverterComponent
    },
    {
      path: "gal-to-cl",
      component: EachUnitConverterComponent
    },
    {
      path: "gal-to-dl",
      component: EachUnitConverterComponent
    },
    {
      path: "gal-to-l",
      component: EachUnitConverterComponent
    },
    {
      path: "gal-to-kl",
      component: EachUnitConverterComponent
    },
    {
      path: "gal-to-m3",
      component: EachUnitConverterComponent
    },
    {
      path: "gal-to-km3",
      component: EachUnitConverterComponent
    },
    {
      path: "gal-to-krm",
      component: EachUnitConverterComponent
    },
    {
      path: "gal-to-tsk",
      component: EachUnitConverterComponent
    },
    {
      path: "gal-to-msk",
      component: EachUnitConverterComponent
    },
    {
      path: "gal-to-kkp",
      component: EachUnitConverterComponent
    },
    {
      path: "gal-to-glas",
      component: EachUnitConverterComponent
    },
    {
      path: "gal-to-kanna",
      component: EachUnitConverterComponent
    },
    {
      path: "gal-to-tsp",
      component: EachUnitConverterComponent
    },
    {
      path: "gal-to-Tbs",
      component: EachUnitConverterComponent
    },
    {
      path: "gal-to-in3",
      component: EachUnitConverterComponent
    },
    {
      path: "gal-to-fl-oz",
      component: EachUnitConverterComponent
    },
    {
      path: "gal-to-cup",
      component: EachUnitConverterComponent
    },
    {
      path: "gal-to-pnt",
      component: EachUnitConverterComponent
    },
    {
      path: "gal-to-qt",
      component: EachUnitConverterComponent
    },
    {
      path: "gal-to-gal",
      component: EachUnitConverterComponent
    },
    {
      path: "gal-to-ft3",
      component: EachUnitConverterComponent
    },
    {
      path: "gal-to-yd3",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3-to-mm3",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3-to-cm3",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3-to-ml",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3-to-cl",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3-to-dl",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3-to-l",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3-to-kl",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3-to-m3",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3-to-km3",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3-to-krm",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3-to-tsk",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3-to-msk",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3-to-kkp",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3-to-glas",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3-to-kanna",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3-to-tsp",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3-to-Tbs",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3-to-in3",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3-to-fl-oz",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3-to-cup",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3-to-pnt",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3-to-qt",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3-to-gal",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3-to-ft3",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3-to-yd3",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3-to-mm3",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3-to-cm3",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3-to-ml",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3-to-cl",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3-to-dl",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3-to-l",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3-to-kl",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3-to-m3",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3-to-km3",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3-to-krm",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3-to-tsk",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3-to-msk",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3-to-kkp",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3-to-glas",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3-to-kanna",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3-to-tsp",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3-to-Tbs",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3-to-in3",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3-to-fl-oz",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3-to-cup",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3-to-pnt",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3-to-qt",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3-to-gal",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3-to-ft3",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3-to-yd3",
      component: EachUnitConverterComponent
    },
    {
      path: "ea-to-ea",
      component: EachUnitConverterComponent
    },
    {
      path: "ea-to-dz",
      component: EachUnitConverterComponent
    },
    {
      path: "dz-to-ea",
      component: EachUnitConverterComponent
    },
    {
      path: "dz-to-dz",
      component: EachUnitConverterComponent
    },
    {
      path: "C-to-C",
      component: EachUnitConverterComponent
    },
    {
      path: "C-to-K",
      component: EachUnitConverterComponent
    },
    {
      path: "C-to-F",
      component: EachUnitConverterComponent
    },
    {
      path: "C-to-R",
      component: EachUnitConverterComponent
    },
    {
      path: "K-to-C",
      component: EachUnitConverterComponent
    },
    {
      path: "K-to-K",
      component: EachUnitConverterComponent
    },
    {
      path: "K-to-F",
      component: EachUnitConverterComponent
    },
    {
      path: "K-to-R",
      component: EachUnitConverterComponent
    },
    {
      path: "F-to-C",
      component: EachUnitConverterComponent
    },
    {
      path: "F-to-K",
      component: EachUnitConverterComponent
    },
    {
      path: "F-to-F",
      component: EachUnitConverterComponent
    },
    {
      path: "F-to-R",
      component: EachUnitConverterComponent
    },
    {
      path: "R-to-C",
      component: EachUnitConverterComponent
    },
    {
      path: "R-to-K",
      component: EachUnitConverterComponent
    },
    {
      path: "R-to-F",
      component: EachUnitConverterComponent
    },
    {
      path: "R-to-R",
      component: EachUnitConverterComponent
    },
    {
      path: "ns-to-ns",
      component: EachUnitConverterComponent
    },
    {
      path: "ns-to-mu",
      component: EachUnitConverterComponent
    },
    {
      path: "ns-to-ms",
      component: EachUnitConverterComponent
    },
    {
      path: "ns-to-s",
      component: EachUnitConverterComponent
    },
    {
      path: "ns-to-min",
      component: EachUnitConverterComponent
    },
    {
      path: "ns-to-h",
      component: EachUnitConverterComponent
    },
    {
      path: "ns-to-d",
      component: EachUnitConverterComponent
    },
    {
      path: "ns-to-week",
      component: EachUnitConverterComponent
    },
    {
      path: "ns-to-month",
      component: EachUnitConverterComponent
    },
    {
      path: "ns-to-year",
      component: EachUnitConverterComponent
    },
    {
      path: "mu-to-ns",
      component: EachUnitConverterComponent
    },
    {
      path: "mu-to-mu",
      component: EachUnitConverterComponent
    },
    {
      path: "mu-to-ms",
      component: EachUnitConverterComponent
    },
    {
      path: "mu-to-s",
      component: EachUnitConverterComponent
    },
    {
      path: "mu-to-min",
      component: EachUnitConverterComponent
    },
    {
      path: "mu-to-h",
      component: EachUnitConverterComponent
    },
    {
      path: "mu-to-d",
      component: EachUnitConverterComponent
    },
    {
      path: "mu-to-week",
      component: EachUnitConverterComponent
    },
    {
      path: "mu-to-month",
      component: EachUnitConverterComponent
    },
    {
      path: "mu-to-year",
      component: EachUnitConverterComponent
    },
    {
      path: "ms-to-ns",
      component: EachUnitConverterComponent
    },
    {
      path: "ms-to-mu",
      component: EachUnitConverterComponent
    },
    {
      path: "ms-to-ms",
      component: EachUnitConverterComponent
    },
    {
      path: "ms-to-s",
      component: EachUnitConverterComponent
    },
    {
      path: "ms-to-min",
      component: EachUnitConverterComponent
    },
    {
      path: "ms-to-h",
      component: EachUnitConverterComponent
    },
    {
      path: "ms-to-d",
      component: EachUnitConverterComponent
    },
    {
      path: "ms-to-week",
      component: EachUnitConverterComponent
    },
    {
      path: "ms-to-month",
      component: EachUnitConverterComponent
    },
    {
      path: "ms-to-year",
      component: EachUnitConverterComponent
    },
    {
      path: "s-to-ns",
      component: EachUnitConverterComponent
    },
    {
      path: "s-to-mu",
      component: EachUnitConverterComponent
    },
    {
      path: "s-to-ms",
      component: EachUnitConverterComponent
    },
    {
      path: "s-to-s",
      component: EachUnitConverterComponent
    },
    {
      path: "s-to-min",
      component: EachUnitConverterComponent
    },
    {
      path: "s-to-h",
      component: EachUnitConverterComponent
    },
    {
      path: "s-to-d",
      component: EachUnitConverterComponent
    },
    {
      path: "s-to-week",
      component: EachUnitConverterComponent
    },
    {
      path: "s-to-month",
      component: EachUnitConverterComponent
    },
    {
      path: "s-to-year",
      component: EachUnitConverterComponent
    },
    {
      path: "min-to-ns",
      component: EachUnitConverterComponent
    },
    {
      path: "min-to-mu",
      component: EachUnitConverterComponent
    },
    {
      path: "min-to-ms",
      component: EachUnitConverterComponent
    },
    {
      path: "min-to-s",
      component: EachUnitConverterComponent
    },
    {
      path: "min-to-min",
      component: EachUnitConverterComponent
    },
    {
      path: "min-to-h",
      component: EachUnitConverterComponent
    },
    {
      path: "min-to-d",
      component: EachUnitConverterComponent
    },
    {
      path: "min-to-week",
      component: EachUnitConverterComponent
    },
    {
      path: "min-to-month",
      component: EachUnitConverterComponent
    },
    {
      path: "min-to-year",
      component: EachUnitConverterComponent
    },
    {
      path: "h-to-ns",
      component: EachUnitConverterComponent
    },
    {
      path: "h-to-mu",
      component: EachUnitConverterComponent
    },
    {
      path: "h-to-ms",
      component: EachUnitConverterComponent
    },
    {
      path: "h-to-s",
      component: EachUnitConverterComponent
    },
    {
      path: "h-to-min",
      component: EachUnitConverterComponent
    },
    {
      path: "h-to-h",
      component: EachUnitConverterComponent
    },
    {
      path: "h-to-d",
      component: EachUnitConverterComponent
    },
    {
      path: "h-to-week",
      component: EachUnitConverterComponent
    },
    {
      path: "h-to-month",
      component: EachUnitConverterComponent
    },
    {
      path: "h-to-year",
      component: EachUnitConverterComponent
    },
    {
      path: "d-to-ns",
      component: EachUnitConverterComponent
    },
    {
      path: "d-to-mu",
      component: EachUnitConverterComponent
    },
    {
      path: "d-to-ms",
      component: EachUnitConverterComponent
    },
    {
      path: "d-to-s",
      component: EachUnitConverterComponent
    },
    {
      path: "d-to-min",
      component: EachUnitConverterComponent
    },
    {
      path: "d-to-h",
      component: EachUnitConverterComponent
    },
    {
      path: "d-to-d",
      component: EachUnitConverterComponent
    },
    {
      path: "d-to-week",
      component: EachUnitConverterComponent
    },
    {
      path: "d-to-month",
      component: EachUnitConverterComponent
    },
    {
      path: "d-to-year",
      component: EachUnitConverterComponent
    },
    {
      path: "week-to-ns",
      component: EachUnitConverterComponent
    },
    {
      path: "week-to-mu",
      component: EachUnitConverterComponent
    },
    {
      path: "week-to-ms",
      component: EachUnitConverterComponent
    },
    {
      path: "week-to-s",
      component: EachUnitConverterComponent
    },
    {
      path: "week-to-min",
      component: EachUnitConverterComponent
    },
    {
      path: "week-to-h",
      component: EachUnitConverterComponent
    },
    {
      path: "week-to-d",
      component: EachUnitConverterComponent
    },
    {
      path: "week-to-week",
      component: EachUnitConverterComponent
    },
    {
      path: "week-to-month",
      component: EachUnitConverterComponent
    },
    {
      path: "week-to-year",
      component: EachUnitConverterComponent
    },
    {
      path: "month-to-ns",
      component: EachUnitConverterComponent
    },
    {
      path: "month-to-mu",
      component: EachUnitConverterComponent
    },
    {
      path: "month-to-ms",
      component: EachUnitConverterComponent
    },
    {
      path: "month-to-s",
      component: EachUnitConverterComponent
    },
    {
      path: "month-to-min",
      component: EachUnitConverterComponent
    },
    {
      path: "month-to-h",
      component: EachUnitConverterComponent
    },
    {
      path: "month-to-d",
      component: EachUnitConverterComponent
    },
    {
      path: "month-to-week",
      component: EachUnitConverterComponent
    },
    {
      path: "month-to-month",
      component: EachUnitConverterComponent
    },
    {
      path: "month-to-year",
      component: EachUnitConverterComponent
    },
    {
      path: "year-to-ns",
      component: EachUnitConverterComponent
    },
    {
      path: "year-to-mu",
      component: EachUnitConverterComponent
    },
    {
      path: "year-to-ms",
      component: EachUnitConverterComponent
    },
    {
      path: "year-to-s",
      component: EachUnitConverterComponent
    },
    {
      path: "year-to-min",
      component: EachUnitConverterComponent
    },
    {
      path: "year-to-h",
      component: EachUnitConverterComponent
    },
    {
      path: "year-to-d",
      component: EachUnitConverterComponent
    },
    {
      path: "year-to-week",
      component: EachUnitConverterComponent
    },
    {
      path: "year-to-month",
      component: EachUnitConverterComponent
    },
    {
      path: "year-to-year",
      component: EachUnitConverterComponent
    },
    {
      path: "b-to-b",
      component: EachUnitConverterComponent
    },
    {
      path: "b-to-Kb",
      component: EachUnitConverterComponent
    },
    {
      path: "b-to-Mb",
      component: EachUnitConverterComponent
    },
    {
      path: "b-to-Gb",
      component: EachUnitConverterComponent
    },
    {
      path: "b-to-Tb",
      component: EachUnitConverterComponent
    },
    {
      path: "b-to-B",
      component: EachUnitConverterComponent
    },
    {
      path: "b-to-KB",
      component: EachUnitConverterComponent
    },
    {
      path: "b-to-MB",
      component: EachUnitConverterComponent
    },
    {
      path: "b-to-GB",
      component: EachUnitConverterComponent
    },
    {
      path: "b-to-TB",
      component: EachUnitConverterComponent
    },
    {
      path: "Kb-to-b",
      component: EachUnitConverterComponent
    },
    {
      path: "Kb-to-Kb",
      component: EachUnitConverterComponent
    },
    {
      path: "Kb-to-Mb",
      component: EachUnitConverterComponent
    },
    {
      path: "Kb-to-Gb",
      component: EachUnitConverterComponent
    },
    {
      path: "Kb-to-Tb",
      component: EachUnitConverterComponent
    },
    {
      path: "Kb-to-B",
      component: EachUnitConverterComponent
    },
    {
      path: "Kb-to-KB",
      component: EachUnitConverterComponent
    },
    {
      path: "Kb-to-MB",
      component: EachUnitConverterComponent
    },
    {
      path: "Kb-to-GB",
      component: EachUnitConverterComponent
    },
    {
      path: "Kb-to-TB",
      component: EachUnitConverterComponent
    },
    {
      path: "Mb-to-b",
      component: EachUnitConverterComponent
    },
    {
      path: "Mb-to-Kb",
      component: EachUnitConverterComponent
    },
    {
      path: "Mb-to-Mb",
      component: EachUnitConverterComponent
    },
    {
      path: "Mb-to-Gb",
      component: EachUnitConverterComponent
    },
    {
      path: "Mb-to-Tb",
      component: EachUnitConverterComponent
    },
    {
      path: "Mb-to-B",
      component: EachUnitConverterComponent
    },
    {
      path: "Mb-to-KB",
      component: EachUnitConverterComponent
    },
    {
      path: "Mb-to-MB",
      component: EachUnitConverterComponent
    },
    {
      path: "Mb-to-GB",
      component: EachUnitConverterComponent
    },
    {
      path: "Mb-to-TB",
      component: EachUnitConverterComponent
    },
    {
      path: "Gb-to-b",
      component: EachUnitConverterComponent
    },
    {
      path: "Gb-to-Kb",
      component: EachUnitConverterComponent
    },
    {
      path: "Gb-to-Mb",
      component: EachUnitConverterComponent
    },
    {
      path: "Gb-to-Gb",
      component: EachUnitConverterComponent
    },
    {
      path: "Gb-to-Tb",
      component: EachUnitConverterComponent
    },
    {
      path: "Gb-to-B",
      component: EachUnitConverterComponent
    },
    {
      path: "Gb-to-KB",
      component: EachUnitConverterComponent
    },
    {
      path: "Gb-to-MB",
      component: EachUnitConverterComponent
    },
    {
      path: "Gb-to-GB",
      component: EachUnitConverterComponent
    },
    {
      path: "Gb-to-TB",
      component: EachUnitConverterComponent
    },
    {
      path: "Tb-to-b",
      component: EachUnitConverterComponent
    },
    {
      path: "Tb-to-Kb",
      component: EachUnitConverterComponent
    },
    {
      path: "Tb-to-Mb",
      component: EachUnitConverterComponent
    },
    {
      path: "Tb-to-Gb",
      component: EachUnitConverterComponent
    },
    {
      path: "Tb-to-Tb",
      component: EachUnitConverterComponent
    },
    {
      path: "Tb-to-B",
      component: EachUnitConverterComponent
    },
    {
      path: "Tb-to-KB",
      component: EachUnitConverterComponent
    },
    {
      path: "Tb-to-MB",
      component: EachUnitConverterComponent
    },
    {
      path: "Tb-to-GB",
      component: EachUnitConverterComponent
    },
    {
      path: "Tb-to-TB",
      component: EachUnitConverterComponent
    },
    {
      path: "B-to-b",
      component: EachUnitConverterComponent
    },
    {
      path: "B-to-Kb",
      component: EachUnitConverterComponent
    },
    {
      path: "B-to-Mb",
      component: EachUnitConverterComponent
    },
    {
      path: "B-to-Gb",
      component: EachUnitConverterComponent
    },
    {
      path: "B-to-Tb",
      component: EachUnitConverterComponent
    },
    {
      path: "B-to-B",
      component: EachUnitConverterComponent
    },
    {
      path: "B-to-KB",
      component: EachUnitConverterComponent
    },
    {
      path: "B-to-MB",
      component: EachUnitConverterComponent
    },
    {
      path: "B-to-GB",
      component: EachUnitConverterComponent
    },
    {
      path: "B-to-TB",
      component: EachUnitConverterComponent
    },
    {
      path: "KB-to-b",
      component: EachUnitConverterComponent
    },
    {
      path: "KB-to-Kb",
      component: EachUnitConverterComponent
    },
    {
      path: "KB-to-Mb",
      component: EachUnitConverterComponent
    },
    {
      path: "KB-to-Gb",
      component: EachUnitConverterComponent
    },
    {
      path: "KB-to-Tb",
      component: EachUnitConverterComponent
    },
    {
      path: "KB-to-B",
      component: EachUnitConverterComponent
    },
    {
      path: "KB-to-KB",
      component: EachUnitConverterComponent
    },
    {
      path: "KB-to-MB",
      component: EachUnitConverterComponent
    },
    {
      path: "KB-to-GB",
      component: EachUnitConverterComponent
    },
    {
      path: "KB-to-TB",
      component: EachUnitConverterComponent
    },
    {
      path: "MB-to-b",
      component: EachUnitConverterComponent
    },
    {
      path: "MB-to-Kb",
      component: EachUnitConverterComponent
    },
    {
      path: "MB-to-Mb",
      component: EachUnitConverterComponent
    },
    {
      path: "MB-to-Gb",
      component: EachUnitConverterComponent
    },
    {
      path: "MB-to-Tb",
      component: EachUnitConverterComponent
    },
    {
      path: "MB-to-B",
      component: EachUnitConverterComponent
    },
    {
      path: "MB-to-KB",
      component: EachUnitConverterComponent
    },
    {
      path: "MB-to-MB",
      component: EachUnitConverterComponent
    },
    {
      path: "MB-to-GB",
      component: EachUnitConverterComponent
    },
    {
      path: "MB-to-TB",
      component: EachUnitConverterComponent
    },
    {
      path: "GB-to-b",
      component: EachUnitConverterComponent
    },
    {
      path: "GB-to-Kb",
      component: EachUnitConverterComponent
    },
    {
      path: "GB-to-Mb",
      component: EachUnitConverterComponent
    },
    {
      path: "GB-to-Gb",
      component: EachUnitConverterComponent
    },
    {
      path: "GB-to-Tb",
      component: EachUnitConverterComponent
    },
    {
      path: "GB-to-B",
      component: EachUnitConverterComponent
    },
    {
      path: "GB-to-KB",
      component: EachUnitConverterComponent
    },
    {
      path: "GB-to-MB",
      component: EachUnitConverterComponent
    },
    {
      path: "GB-to-GB",
      component: EachUnitConverterComponent
    },
    {
      path: "GB-to-TB",
      component: EachUnitConverterComponent
    },
    {
      path: "TB-to-b",
      component: EachUnitConverterComponent
    },
    {
      path: "TB-to-Kb",
      component: EachUnitConverterComponent
    },
    {
      path: "TB-to-Mb",
      component: EachUnitConverterComponent
    },
    {
      path: "TB-to-Gb",
      component: EachUnitConverterComponent
    },
    {
      path: "TB-to-Tb",
      component: EachUnitConverterComponent
    },
    {
      path: "TB-to-B",
      component: EachUnitConverterComponent
    },
    {
      path: "TB-to-KB",
      component: EachUnitConverterComponent
    },
    {
      path: "TB-to-MB",
      component: EachUnitConverterComponent
    },
    {
      path: "TB-to-GB",
      component: EachUnitConverterComponent
    },
    {
      path: "TB-to-TB",
      component: EachUnitConverterComponent
    },
    {
      path: "ppm-to-ppm",
      component: EachUnitConverterComponent
    },
    {
      path: "ppm-to-ppb",
      component: EachUnitConverterComponent
    },
    {
      path: "ppm-to-ppt",
      component: EachUnitConverterComponent
    },
    {
      path: "ppm-to-ppq",
      component: EachUnitConverterComponent
    },
    {
      path: "ppb-to-ppm",
      component: EachUnitConverterComponent
    },
    {
      path: "ppb-to-ppb",
      component: EachUnitConverterComponent
    },
    {
      path: "ppb-to-ppt",
      component: EachUnitConverterComponent
    },
    {
      path: "ppb-to-ppq",
      component: EachUnitConverterComponent
    },
    {
      path: "ppt-to-ppm",
      component: EachUnitConverterComponent
    },
    {
      path: "ppt-to-ppb",
      component: EachUnitConverterComponent
    },
    {
      path: "ppt-to-ppt",
      component: EachUnitConverterComponent
    },
    {
      path: "ppt-to-ppq",
      component: EachUnitConverterComponent
    },
    {
      path: "ppq-to-ppm",
      component: EachUnitConverterComponent
    },
    {
      path: "ppq-to-ppb",
      component: EachUnitConverterComponent
    },
    {
      path: "ppq-to-ppt",
      component: EachUnitConverterComponent
    },
    {
      path: "ppq-to-ppq",
      component: EachUnitConverterComponent
    },
    {
      path: "m/s-to-m/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m/s-to-km/h",
      component: EachUnitConverterComponent
    },
    {
      path: "m/s-to-m/h",
      component: EachUnitConverterComponent
    },
    {
      path: "m/s-to-knot",
      component: EachUnitConverterComponent
    },
    {
      path: "m/s-to-ft/s",
      component: EachUnitConverterComponent
    },
    {
      path: "km/h-to-m/s",
      component: EachUnitConverterComponent
    },
    {
      path: "km/h-to-km/h",
      component: EachUnitConverterComponent
    },
    {
      path: "km/h-to-m/h",
      component: EachUnitConverterComponent
    },
    {
      path: "km/h-to-knot",
      component: EachUnitConverterComponent
    },
    {
      path: "km/h-to-ft/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m/h-to-m/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m/h-to-km/h",
      component: EachUnitConverterComponent
    },
    {
      path: "m/h-to-m/h",
      component: EachUnitConverterComponent
    },
    {
      path: "m/h-to-knot",
      component: EachUnitConverterComponent
    },
    {
      path: "m/h-to-ft/s",
      component: EachUnitConverterComponent
    },
    {
      path: "knot-to-m/s",
      component: EachUnitConverterComponent
    },
    {
      path: "knot-to-km/h",
      component: EachUnitConverterComponent
    },
    {
      path: "knot-to-m/h",
      component: EachUnitConverterComponent
    },
    {
      path: "knot-to-knot",
      component: EachUnitConverterComponent
    },
    {
      path: "knot-to-ft/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft/s-to-m/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft/s-to-km/h",
      component: EachUnitConverterComponent
    },
    {
      path: "ft/s-to-m/h",
      component: EachUnitConverterComponent
    },
    {
      path: "ft/s-to-knot",
      component: EachUnitConverterComponent
    },
    {
      path: "ft/s-to-ft/s",
      component: EachUnitConverterComponent
    },
    {
      path: "min/km-to-min/km",
      component: EachUnitConverterComponent
    },
    {
      path: "min/km-to-s/m",
      component: EachUnitConverterComponent
    },
    {
      path: "min/km-to-min/mi",
      component: EachUnitConverterComponent
    },
    {
      path: "min/km-to-s/ft",
      component: EachUnitConverterComponent
    },
    {
      path: "s/m-to-min/km",
      component: EachUnitConverterComponent
    },
    {
      path: "s/m-to-s/m",
      component: EachUnitConverterComponent
    },
    {
      path: "s/m-to-min/mi",
      component: EachUnitConverterComponent
    },
    {
      path: "s/m-to-s/ft",
      component: EachUnitConverterComponent
    },
    {
      path: "min/mi-to-min/km",
      component: EachUnitConverterComponent
    },
    {
      path: "min/mi-to-s/m",
      component: EachUnitConverterComponent
    },
    {
      path: "min/mi-to-min/mi",
      component: EachUnitConverterComponent
    },
    {
      path: "min/mi-to-s/ft",
      component: EachUnitConverterComponent
    },
    {
      path: "s/ft-to-min/km",
      component: EachUnitConverterComponent
    },
    {
      path: "s/ft-to-s/m",
      component: EachUnitConverterComponent
    },
    {
      path: "s/ft-to-min/mi",
      component: EachUnitConverterComponent
    },
    {
      path: "s/ft-to-s/ft",
      component: EachUnitConverterComponent
    },
    {
      path: "Pa-to-Pa",
      component: EachUnitConverterComponent
    },
    {
      path: "Pa-to-kPa",
      component: EachUnitConverterComponent
    },
    {
      path: "Pa-to-MPa",
      component: EachUnitConverterComponent
    },
    {
      path: "Pa-to-hPa",
      component: EachUnitConverterComponent
    },
    {
      path: "Pa-to-bar",
      component: EachUnitConverterComponent
    },
    {
      path: "Pa-to-torr",
      component: EachUnitConverterComponent
    },
    {
      path: "Pa-to-psi",
      component: EachUnitConverterComponent
    },
    {
      path: "Pa-to-ksi",
      component: EachUnitConverterComponent
    },
    {
      path: "kPa-to-Pa",
      component: EachUnitConverterComponent
    },
    {
      path: "kPa-to-kPa",
      component: EachUnitConverterComponent
    },
    {
      path: "kPa-to-MPa",
      component: EachUnitConverterComponent
    },
    {
      path: "kPa-to-hPa",
      component: EachUnitConverterComponent
    },
    {
      path: "kPa-to-bar",
      component: EachUnitConverterComponent
    },
    {
      path: "kPa-to-torr",
      component: EachUnitConverterComponent
    },
    {
      path: "kPa-to-psi",
      component: EachUnitConverterComponent
    },
    {
      path: "kPa-to-ksi",
      component: EachUnitConverterComponent
    },
    {
      path: "MPa-to-Pa",
      component: EachUnitConverterComponent
    },
    {
      path: "MPa-to-kPa",
      component: EachUnitConverterComponent
    },
    {
      path: "MPa-to-MPa",
      component: EachUnitConverterComponent
    },
    {
      path: "MPa-to-hPa",
      component: EachUnitConverterComponent
    },
    {
      path: "MPa-to-bar",
      component: EachUnitConverterComponent
    },
    {
      path: "MPa-to-torr",
      component: EachUnitConverterComponent
    },
    {
      path: "MPa-to-psi",
      component: EachUnitConverterComponent
    },
    {
      path: "MPa-to-ksi",
      component: EachUnitConverterComponent
    },
    {
      path: "hPa-to-Pa",
      component: EachUnitConverterComponent
    },
    {
      path: "hPa-to-kPa",
      component: EachUnitConverterComponent
    },
    {
      path: "hPa-to-MPa",
      component: EachUnitConverterComponent
    },
    {
      path: "hPa-to-hPa",
      component: EachUnitConverterComponent
    },
    {
      path: "hPa-to-bar",
      component: EachUnitConverterComponent
    },
    {
      path: "hPa-to-torr",
      component: EachUnitConverterComponent
    },
    {
      path: "hPa-to-psi",
      component: EachUnitConverterComponent
    },
    {
      path: "hPa-to-ksi",
      component: EachUnitConverterComponent
    },
    {
      path: "bar-to-Pa",
      component: EachUnitConverterComponent
    },
    {
      path: "bar-to-kPa",
      component: EachUnitConverterComponent
    },
    {
      path: "bar-to-MPa",
      component: EachUnitConverterComponent
    },
    {
      path: "bar-to-hPa",
      component: EachUnitConverterComponent
    },
    {
      path: "bar-to-bar",
      component: EachUnitConverterComponent
    },
    {
      path: "bar-to-torr",
      component: EachUnitConverterComponent
    },
    {
      path: "bar-to-psi",
      component: EachUnitConverterComponent
    },
    {
      path: "bar-to-ksi",
      component: EachUnitConverterComponent
    },
    {
      path: "torr-to-Pa",
      component: EachUnitConverterComponent
    },
    {
      path: "torr-to-kPa",
      component: EachUnitConverterComponent
    },
    {
      path: "torr-to-MPa",
      component: EachUnitConverterComponent
    },
    {
      path: "torr-to-hPa",
      component: EachUnitConverterComponent
    },
    {
      path: "torr-to-bar",
      component: EachUnitConverterComponent
    },
    {
      path: "torr-to-torr",
      component: EachUnitConverterComponent
    },
    {
      path: "torr-to-psi",
      component: EachUnitConverterComponent
    },
    {
      path: "torr-to-ksi",
      component: EachUnitConverterComponent
    },
    {
      path: "psi-to-Pa",
      component: EachUnitConverterComponent
    },
    {
      path: "psi-to-kPa",
      component: EachUnitConverterComponent
    },
    {
      path: "psi-to-MPa",
      component: EachUnitConverterComponent
    },
    {
      path: "psi-to-hPa",
      component: EachUnitConverterComponent
    },
    {
      path: "psi-to-bar",
      component: EachUnitConverterComponent
    },
    {
      path: "psi-to-torr",
      component: EachUnitConverterComponent
    },
    {
      path: "psi-to-psi",
      component: EachUnitConverterComponent
    },
    {
      path: "psi-to-ksi",
      component: EachUnitConverterComponent
    },
    {
      path: "ksi-to-Pa",
      component: EachUnitConverterComponent
    },
    {
      path: "ksi-to-kPa",
      component: EachUnitConverterComponent
    },
    {
      path: "ksi-to-MPa",
      component: EachUnitConverterComponent
    },
    {
      path: "ksi-to-hPa",
      component: EachUnitConverterComponent
    },
    {
      path: "ksi-to-bar",
      component: EachUnitConverterComponent
    },
    {
      path: "ksi-to-torr",
      component: EachUnitConverterComponent
    },
    {
      path: "ksi-to-psi",
      component: EachUnitConverterComponent
    },
    {
      path: "ksi-to-ksi",
      component: EachUnitConverterComponent
    },
    {
      path: "A-to-A",
      component: EachUnitConverterComponent
    },
    {
      path: "A-to-mA",
      component: EachUnitConverterComponent
    },
    {
      path: "A-to-kA",
      component: EachUnitConverterComponent
    },
    {
      path: "mA-to-A",
      component: EachUnitConverterComponent
    },
    {
      path: "mA-to-mA",
      component: EachUnitConverterComponent
    },
    {
      path: "mA-to-kA",
      component: EachUnitConverterComponent
    },
    {
      path: "kA-to-A",
      component: EachUnitConverterComponent
    },
    {
      path: "kA-to-mA",
      component: EachUnitConverterComponent
    },
    {
      path: "kA-to-kA",
      component: EachUnitConverterComponent
    },
    {
      path: "V-to-V",
      component: EachUnitConverterComponent
    },
    {
      path: "V-to-mV",
      component: EachUnitConverterComponent
    },
    {
      path: "V-to-kV",
      component: EachUnitConverterComponent
    },
    {
      path: "mV-to-V",
      component: EachUnitConverterComponent
    },
    {
      path: "mV-to-mV",
      component: EachUnitConverterComponent
    },
    {
      path: "mV-to-kV",
      component: EachUnitConverterComponent
    },
    {
      path: "kV-to-V",
      component: EachUnitConverterComponent
    },
    {
      path: "kV-to-mV",
      component: EachUnitConverterComponent
    },
    {
      path: "kV-to-kV",
      component: EachUnitConverterComponent
    },
    {
      path: "W-to-W",
      component: EachUnitConverterComponent
    },
    {
      path: "W-to-mW",
      component: EachUnitConverterComponent
    },
    {
      path: "W-to-kW",
      component: EachUnitConverterComponent
    },
    {
      path: "W-to-MW",
      component: EachUnitConverterComponent
    },
    {
      path: "W-to-GW",
      component: EachUnitConverterComponent
    },
    {
      path: "mW-to-W",
      component: EachUnitConverterComponent
    },
    {
      path: "mW-to-mW",
      component: EachUnitConverterComponent
    },
    {
      path: "mW-to-kW",
      component: EachUnitConverterComponent
    },
    {
      path: "mW-to-MW",
      component: EachUnitConverterComponent
    },
    {
      path: "mW-to-GW",
      component: EachUnitConverterComponent
    },
    {
      path: "kW-to-W",
      component: EachUnitConverterComponent
    },
    {
      path: "kW-to-mW",
      component: EachUnitConverterComponent
    },
    {
      path: "kW-to-kW",
      component: EachUnitConverterComponent
    },
    {
      path: "kW-to-MW",
      component: EachUnitConverterComponent
    },
    {
      path: "kW-to-GW",
      component: EachUnitConverterComponent
    },
    {
      path: "MW-to-W",
      component: EachUnitConverterComponent
    },
    {
      path: "MW-to-mW",
      component: EachUnitConverterComponent
    },
    {
      path: "MW-to-kW",
      component: EachUnitConverterComponent
    },
    {
      path: "MW-to-MW",
      component: EachUnitConverterComponent
    },
    {
      path: "MW-to-GW",
      component: EachUnitConverterComponent
    },
    {
      path: "GW-to-W",
      component: EachUnitConverterComponent
    },
    {
      path: "GW-to-mW",
      component: EachUnitConverterComponent
    },
    {
      path: "GW-to-kW",
      component: EachUnitConverterComponent
    },
    {
      path: "GW-to-MW",
      component: EachUnitConverterComponent
    },
    {
      path: "GW-to-GW",
      component: EachUnitConverterComponent
    },
    {
      path: "VAR-to-VAR",
      component: EachUnitConverterComponent
    },
    {
      path: "VAR-to-mVAR",
      component: EachUnitConverterComponent
    },
    {
      path: "VAR-to-kVAR",
      component: EachUnitConverterComponent
    },
    {
      path: "VAR-to-MVAR",
      component: EachUnitConverterComponent
    },
    {
      path: "VAR-to-GVAR",
      component: EachUnitConverterComponent
    },
    {
      path: "mVAR-to-VAR",
      component: EachUnitConverterComponent
    },
    {
      path: "mVAR-to-mVAR",
      component: EachUnitConverterComponent
    },
    {
      path: "mVAR-to-kVAR",
      component: EachUnitConverterComponent
    },
    {
      path: "mVAR-to-MVAR",
      component: EachUnitConverterComponent
    },
    {
      path: "mVAR-to-GVAR",
      component: EachUnitConverterComponent
    },
    {
      path: "kVAR-to-VAR",
      component: EachUnitConverterComponent
    },
    {
      path: "kVAR-to-mVAR",
      component: EachUnitConverterComponent
    },
    {
      path: "kVAR-to-kVAR",
      component: EachUnitConverterComponent
    },
    {
      path: "kVAR-to-MVAR",
      component: EachUnitConverterComponent
    },
    {
      path: "kVAR-to-GVAR",
      component: EachUnitConverterComponent
    },
    {
      path: "MVAR-to-VAR",
      component: EachUnitConverterComponent
    },
    {
      path: "MVAR-to-mVAR",
      component: EachUnitConverterComponent
    },
    {
      path: "MVAR-to-kVAR",
      component: EachUnitConverterComponent
    },
    {
      path: "MVAR-to-MVAR",
      component: EachUnitConverterComponent
    },
    {
      path: "MVAR-to-GVAR",
      component: EachUnitConverterComponent
    },
    {
      path: "GVAR-to-VAR",
      component: EachUnitConverterComponent
    },
    {
      path: "GVAR-to-mVAR",
      component: EachUnitConverterComponent
    },
    {
      path: "GVAR-to-kVAR",
      component: EachUnitConverterComponent
    },
    {
      path: "GVAR-to-MVAR",
      component: EachUnitConverterComponent
    },
    {
      path: "GVAR-to-GVAR",
      component: EachUnitConverterComponent
    },
    {
      path: "VA-to-VA",
      component: EachUnitConverterComponent
    },
    {
      path: "VA-to-mVA",
      component: EachUnitConverterComponent
    },
    {
      path: "VA-to-kVA",
      component: EachUnitConverterComponent
    },
    {
      path: "VA-to-MVA",
      component: EachUnitConverterComponent
    },
    {
      path: "VA-to-GVA",
      component: EachUnitConverterComponent
    },
    {
      path: "mVA-to-VA",
      component: EachUnitConverterComponent
    },
    {
      path: "mVA-to-mVA",
      component: EachUnitConverterComponent
    },
    {
      path: "mVA-to-kVA",
      component: EachUnitConverterComponent
    },
    {
      path: "mVA-to-MVA",
      component: EachUnitConverterComponent
    },
    {
      path: "mVA-to-GVA",
      component: EachUnitConverterComponent
    },
    {
      path: "kVA-to-VA",
      component: EachUnitConverterComponent
    },
    {
      path: "kVA-to-mVA",
      component: EachUnitConverterComponent
    },
    {
      path: "kVA-to-kVA",
      component: EachUnitConverterComponent
    },
    {
      path: "kVA-to-MVA",
      component: EachUnitConverterComponent
    },
    {
      path: "kVA-to-GVA",
      component: EachUnitConverterComponent
    },
    {
      path: "MVA-to-VA",
      component: EachUnitConverterComponent
    },
    {
      path: "MVA-to-mVA",
      component: EachUnitConverterComponent
    },
    {
      path: "MVA-to-kVA",
      component: EachUnitConverterComponent
    },
    {
      path: "MVA-to-MVA",
      component: EachUnitConverterComponent
    },
    {
      path: "MVA-to-GVA",
      component: EachUnitConverterComponent
    },
    {
      path: "GVA-to-VA",
      component: EachUnitConverterComponent
    },
    {
      path: "GVA-to-mVA",
      component: EachUnitConverterComponent
    },
    {
      path: "GVA-to-kVA",
      component: EachUnitConverterComponent
    },
    {
      path: "GVA-to-MVA",
      component: EachUnitConverterComponent
    },
    {
      path: "GVA-to-GVA",
      component: EachUnitConverterComponent
    },
    {
      path: "Wh-to-Wh",
      component: EachUnitConverterComponent
    },
    {
      path: "Wh-to-mWh",
      component: EachUnitConverterComponent
    },
    {
      path: "Wh-to-kWh",
      component: EachUnitConverterComponent
    },
    {
      path: "Wh-to-MWh",
      component: EachUnitConverterComponent
    },
    {
      path: "Wh-to-GWh",
      component: EachUnitConverterComponent
    },
    {
      path: "Wh-to-J",
      component: EachUnitConverterComponent
    },
    {
      path: "Wh-to-kJ",
      component: EachUnitConverterComponent
    },
    {
      path: "mWh-to-Wh",
      component: EachUnitConverterComponent
    },
    {
      path: "mWh-to-mWh",
      component: EachUnitConverterComponent
    },
    {
      path: "mWh-to-kWh",
      component: EachUnitConverterComponent
    },
    {
      path: "mWh-to-MWh",
      component: EachUnitConverterComponent
    },
    {
      path: "mWh-to-GWh",
      component: EachUnitConverterComponent
    },
    {
      path: "mWh-to-J",
      component: EachUnitConverterComponent
    },
    {
      path: "mWh-to-kJ",
      component: EachUnitConverterComponent
    },
    {
      path: "kWh-to-Wh",
      component: EachUnitConverterComponent
    },
    {
      path: "kWh-to-mWh",
      component: EachUnitConverterComponent
    },
    {
      path: "kWh-to-kWh",
      component: EachUnitConverterComponent
    },
    {
      path: "kWh-to-MWh",
      component: EachUnitConverterComponent
    },
    {
      path: "kWh-to-GWh",
      component: EachUnitConverterComponent
    },
    {
      path: "kWh-to-J",
      component: EachUnitConverterComponent
    },
    {
      path: "kWh-to-kJ",
      component: EachUnitConverterComponent
    },
    {
      path: "MWh-to-Wh",
      component: EachUnitConverterComponent
    },
    {
      path: "MWh-to-mWh",
      component: EachUnitConverterComponent
    },
    {
      path: "MWh-to-kWh",
      component: EachUnitConverterComponent
    },
    {
      path: "MWh-to-MWh",
      component: EachUnitConverterComponent
    },
    {
      path: "MWh-to-GWh",
      component: EachUnitConverterComponent
    },
    {
      path: "MWh-to-J",
      component: EachUnitConverterComponent
    },
    {
      path: "MWh-to-kJ",
      component: EachUnitConverterComponent
    },
    {
      path: "GWh-to-Wh",
      component: EachUnitConverterComponent
    },
    {
      path: "GWh-to-mWh",
      component: EachUnitConverterComponent
    },
    {
      path: "GWh-to-kWh",
      component: EachUnitConverterComponent
    },
    {
      path: "GWh-to-MWh",
      component: EachUnitConverterComponent
    },
    {
      path: "GWh-to-GWh",
      component: EachUnitConverterComponent
    },
    {
      path: "GWh-to-J",
      component: EachUnitConverterComponent
    },
    {
      path: "GWh-to-kJ",
      component: EachUnitConverterComponent
    },
    {
      path: "J-to-Wh",
      component: EachUnitConverterComponent
    },
    {
      path: "J-to-mWh",
      component: EachUnitConverterComponent
    },
    {
      path: "J-to-kWh",
      component: EachUnitConverterComponent
    },
    {
      path: "J-to-MWh",
      component: EachUnitConverterComponent
    },
    {
      path: "J-to-GWh",
      component: EachUnitConverterComponent
    },
    {
      path: "J-to-J",
      component: EachUnitConverterComponent
    },
    {
      path: "J-to-kJ",
      component: EachUnitConverterComponent
    },
    {
      path: "kJ-to-Wh",
      component: EachUnitConverterComponent
    },
    {
      path: "kJ-to-mWh",
      component: EachUnitConverterComponent
    },
    {
      path: "kJ-to-kWh",
      component: EachUnitConverterComponent
    },
    {
      path: "kJ-to-MWh",
      component: EachUnitConverterComponent
    },
    {
      path: "kJ-to-GWh",
      component: EachUnitConverterComponent
    },
    {
      path: "kJ-to-J",
      component: EachUnitConverterComponent
    },
    {
      path: "kJ-to-kJ",
      component: EachUnitConverterComponent
    },
    {
      path: "VARh-to-VARh",
      component: EachUnitConverterComponent
    },
    {
      path: "VARh-to-mVARh",
      component: EachUnitConverterComponent
    },
    {
      path: "VARh-to-kVARh",
      component: EachUnitConverterComponent
    },
    {
      path: "VARh-to-MVARh",
      component: EachUnitConverterComponent
    },
    {
      path: "VARh-to-GVARh",
      component: EachUnitConverterComponent
    },
    {
      path: "mVARh-to-VARh",
      component: EachUnitConverterComponent
    },
    {
      path: "mVARh-to-mVARh",
      component: EachUnitConverterComponent
    },
    {
      path: "mVARh-to-kVARh",
      component: EachUnitConverterComponent
    },
    {
      path: "mVARh-to-MVARh",
      component: EachUnitConverterComponent
    },
    {
      path: "mVARh-to-GVARh",
      component: EachUnitConverterComponent
    },
    {
      path: "kVARh-to-VARh",
      component: EachUnitConverterComponent
    },
    {
      path: "kVARh-to-mVARh",
      component: EachUnitConverterComponent
    },
    {
      path: "kVARh-to-kVARh",
      component: EachUnitConverterComponent
    },
    {
      path: "kVARh-to-MVARh",
      component: EachUnitConverterComponent
    },
    {
      path: "kVARh-to-GVARh",
      component: EachUnitConverterComponent
    },
    {
      path: "MVARh-to-VARh",
      component: EachUnitConverterComponent
    },
    {
      path: "MVARh-to-mVARh",
      component: EachUnitConverterComponent
    },
    {
      path: "MVARh-to-kVARh",
      component: EachUnitConverterComponent
    },
    {
      path: "MVARh-to-MVARh",
      component: EachUnitConverterComponent
    },
    {
      path: "MVARh-to-GVARh",
      component: EachUnitConverterComponent
    },
    {
      path: "GVARh-to-VARh",
      component: EachUnitConverterComponent
    },
    {
      path: "GVARh-to-mVARh",
      component: EachUnitConverterComponent
    },
    {
      path: "GVARh-to-kVARh",
      component: EachUnitConverterComponent
    },
    {
      path: "GVARh-to-MVARh",
      component: EachUnitConverterComponent
    },
    {
      path: "GVARh-to-GVARh",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3/s-to-mm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3/s-to-cm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3/s-to-ml/s",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3/s-to-cl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3/s-to-dl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3/s-to-l/s",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3/s-to-l/min",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3/s-to-l/h",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3/s-to-kl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3/s-to-kl/min",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3/s-to-kl/h",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3/s-to-m3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3/s-to-m3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3/s-to-m3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3/s-to-km3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3/s-to-tsp/s",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3/s-to-Tbs/s",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3/s-to-in3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3/s-to-in3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3/s-to-in3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3/s-to-fl-oz/s",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3/s-to-fl-oz/min",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3/s-to-fl-oz/h",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3/s-to-cup/s",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3/s-to-pnt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3/s-to-pnt/min",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3/s-to-pnt/h",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3/s-to-qt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3/s-to-gal/s",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3/s-to-gal/min",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3/s-to-gal/h",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3/s-to-ft3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3/s-to-ft3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3/s-to-ft3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3/s-to-yd3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3/s-to-yd3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "mm3/s-to-yd3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3/s-to-mm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3/s-to-cm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3/s-to-ml/s",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3/s-to-cl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3/s-to-dl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3/s-to-l/s",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3/s-to-l/min",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3/s-to-l/h",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3/s-to-kl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3/s-to-kl/min",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3/s-to-kl/h",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3/s-to-m3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3/s-to-m3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3/s-to-m3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3/s-to-km3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3/s-to-tsp/s",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3/s-to-Tbs/s",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3/s-to-in3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3/s-to-in3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3/s-to-in3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3/s-to-fl-oz/s",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3/s-to-fl-oz/min",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3/s-to-fl-oz/h",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3/s-to-cup/s",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3/s-to-pnt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3/s-to-pnt/min",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3/s-to-pnt/h",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3/s-to-qt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3/s-to-gal/s",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3/s-to-gal/min",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3/s-to-gal/h",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3/s-to-ft3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3/s-to-ft3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3/s-to-ft3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3/s-to-yd3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3/s-to-yd3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "cm3/s-to-yd3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "ml/s-to-mm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ml/s-to-cm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ml/s-to-ml/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ml/s-to-cl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ml/s-to-dl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ml/s-to-l/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ml/s-to-l/min",
      component: EachUnitConverterComponent
    },
    {
      path: "ml/s-to-l/h",
      component: EachUnitConverterComponent
    },
    {
      path: "ml/s-to-kl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ml/s-to-kl/min",
      component: EachUnitConverterComponent
    },
    {
      path: "ml/s-to-kl/h",
      component: EachUnitConverterComponent
    },
    {
      path: "ml/s-to-m3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ml/s-to-m3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "ml/s-to-m3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "ml/s-to-km3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ml/s-to-tsp/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ml/s-to-Tbs/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ml/s-to-in3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ml/s-to-in3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "ml/s-to-in3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "ml/s-to-fl-oz/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ml/s-to-fl-oz/min",
      component: EachUnitConverterComponent
    },
    {
      path: "ml/s-to-fl-oz/h",
      component: EachUnitConverterComponent
    },
    {
      path: "ml/s-to-cup/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ml/s-to-pnt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ml/s-to-pnt/min",
      component: EachUnitConverterComponent
    },
    {
      path: "ml/s-to-pnt/h",
      component: EachUnitConverterComponent
    },
    {
      path: "ml/s-to-qt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ml/s-to-gal/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ml/s-to-gal/min",
      component: EachUnitConverterComponent
    },
    {
      path: "ml/s-to-gal/h",
      component: EachUnitConverterComponent
    },
    {
      path: "ml/s-to-ft3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ml/s-to-ft3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "ml/s-to-ft3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "ml/s-to-yd3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ml/s-to-yd3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "ml/s-to-yd3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "cl/s-to-mm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "cl/s-to-cm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "cl/s-to-ml/s",
      component: EachUnitConverterComponent
    },
    {
      path: "cl/s-to-cl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "cl/s-to-dl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "cl/s-to-l/s",
      component: EachUnitConverterComponent
    },
    {
      path: "cl/s-to-l/min",
      component: EachUnitConverterComponent
    },
    {
      path: "cl/s-to-l/h",
      component: EachUnitConverterComponent
    },
    {
      path: "cl/s-to-kl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "cl/s-to-kl/min",
      component: EachUnitConverterComponent
    },
    {
      path: "cl/s-to-kl/h",
      component: EachUnitConverterComponent
    },
    {
      path: "cl/s-to-m3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "cl/s-to-m3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "cl/s-to-m3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "cl/s-to-km3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "cl/s-to-tsp/s",
      component: EachUnitConverterComponent
    },
    {
      path: "cl/s-to-Tbs/s",
      component: EachUnitConverterComponent
    },
    {
      path: "cl/s-to-in3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "cl/s-to-in3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "cl/s-to-in3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "cl/s-to-fl-oz/s",
      component: EachUnitConverterComponent
    },
    {
      path: "cl/s-to-fl-oz/min",
      component: EachUnitConverterComponent
    },
    {
      path: "cl/s-to-fl-oz/h",
      component: EachUnitConverterComponent
    },
    {
      path: "cl/s-to-cup/s",
      component: EachUnitConverterComponent
    },
    {
      path: "cl/s-to-pnt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "cl/s-to-pnt/min",
      component: EachUnitConverterComponent
    },
    {
      path: "cl/s-to-pnt/h",
      component: EachUnitConverterComponent
    },
    {
      path: "cl/s-to-qt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "cl/s-to-gal/s",
      component: EachUnitConverterComponent
    },
    {
      path: "cl/s-to-gal/min",
      component: EachUnitConverterComponent
    },
    {
      path: "cl/s-to-gal/h",
      component: EachUnitConverterComponent
    },
    {
      path: "cl/s-to-ft3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "cl/s-to-ft3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "cl/s-to-ft3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "cl/s-to-yd3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "cl/s-to-yd3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "cl/s-to-yd3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "dl/s-to-mm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "dl/s-to-cm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "dl/s-to-ml/s",
      component: EachUnitConverterComponent
    },
    {
      path: "dl/s-to-cl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "dl/s-to-dl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "dl/s-to-l/s",
      component: EachUnitConverterComponent
    },
    {
      path: "dl/s-to-l/min",
      component: EachUnitConverterComponent
    },
    {
      path: "dl/s-to-l/h",
      component: EachUnitConverterComponent
    },
    {
      path: "dl/s-to-kl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "dl/s-to-kl/min",
      component: EachUnitConverterComponent
    },
    {
      path: "dl/s-to-kl/h",
      component: EachUnitConverterComponent
    },
    {
      path: "dl/s-to-m3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "dl/s-to-m3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "dl/s-to-m3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "dl/s-to-km3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "dl/s-to-tsp/s",
      component: EachUnitConverterComponent
    },
    {
      path: "dl/s-to-Tbs/s",
      component: EachUnitConverterComponent
    },
    {
      path: "dl/s-to-in3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "dl/s-to-in3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "dl/s-to-in3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "dl/s-to-fl-oz/s",
      component: EachUnitConverterComponent
    },
    {
      path: "dl/s-to-fl-oz/min",
      component: EachUnitConverterComponent
    },
    {
      path: "dl/s-to-fl-oz/h",
      component: EachUnitConverterComponent
    },
    {
      path: "dl/s-to-cup/s",
      component: EachUnitConverterComponent
    },
    {
      path: "dl/s-to-pnt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "dl/s-to-pnt/min",
      component: EachUnitConverterComponent
    },
    {
      path: "dl/s-to-pnt/h",
      component: EachUnitConverterComponent
    },
    {
      path: "dl/s-to-qt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "dl/s-to-gal/s",
      component: EachUnitConverterComponent
    },
    {
      path: "dl/s-to-gal/min",
      component: EachUnitConverterComponent
    },
    {
      path: "dl/s-to-gal/h",
      component: EachUnitConverterComponent
    },
    {
      path: "dl/s-to-ft3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "dl/s-to-ft3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "dl/s-to-ft3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "dl/s-to-yd3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "dl/s-to-yd3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "dl/s-to-yd3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "l/s-to-mm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "l/s-to-cm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "l/s-to-ml/s",
      component: EachUnitConverterComponent
    },
    {
      path: "l/s-to-cl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "l/s-to-dl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "l/s-to-l/s",
      component: EachUnitConverterComponent
    },
    {
      path: "l/s-to-l/min",
      component: EachUnitConverterComponent
    },
    {
      path: "l/s-to-l/h",
      component: EachUnitConverterComponent
    },
    {
      path: "l/s-to-kl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "l/s-to-kl/min",
      component: EachUnitConverterComponent
    },
    {
      path: "l/s-to-kl/h",
      component: EachUnitConverterComponent
    },
    {
      path: "l/s-to-m3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "l/s-to-m3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "l/s-to-m3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "l/s-to-km3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "l/s-to-tsp/s",
      component: EachUnitConverterComponent
    },
    {
      path: "l/s-to-Tbs/s",
      component: EachUnitConverterComponent
    },
    {
      path: "l/s-to-in3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "l/s-to-in3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "l/s-to-in3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "l/s-to-fl-oz/s",
      component: EachUnitConverterComponent
    },
    {
      path: "l/s-to-fl-oz/min",
      component: EachUnitConverterComponent
    },
    {
      path: "l/s-to-fl-oz/h",
      component: EachUnitConverterComponent
    },
    {
      path: "l/s-to-cup/s",
      component: EachUnitConverterComponent
    },
    {
      path: "l/s-to-pnt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "l/s-to-pnt/min",
      component: EachUnitConverterComponent
    },
    {
      path: "l/s-to-pnt/h",
      component: EachUnitConverterComponent
    },
    {
      path: "l/s-to-qt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "l/s-to-gal/s",
      component: EachUnitConverterComponent
    },
    {
      path: "l/s-to-gal/min",
      component: EachUnitConverterComponent
    },
    {
      path: "l/s-to-gal/h",
      component: EachUnitConverterComponent
    },
    {
      path: "l/s-to-ft3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "l/s-to-ft3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "l/s-to-ft3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "l/s-to-yd3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "l/s-to-yd3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "l/s-to-yd3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "l/min-to-mm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "l/min-to-cm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "l/min-to-ml/s",
      component: EachUnitConverterComponent
    },
    {
      path: "l/min-to-cl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "l/min-to-dl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "l/min-to-l/s",
      component: EachUnitConverterComponent
    },
    {
      path: "l/min-to-l/min",
      component: EachUnitConverterComponent
    },
    {
      path: "l/min-to-l/h",
      component: EachUnitConverterComponent
    },
    {
      path: "l/min-to-kl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "l/min-to-kl/min",
      component: EachUnitConverterComponent
    },
    {
      path: "l/min-to-kl/h",
      component: EachUnitConverterComponent
    },
    {
      path: "l/min-to-m3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "l/min-to-m3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "l/min-to-m3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "l/min-to-km3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "l/min-to-tsp/s",
      component: EachUnitConverterComponent
    },
    {
      path: "l/min-to-Tbs/s",
      component: EachUnitConverterComponent
    },
    {
      path: "l/min-to-in3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "l/min-to-in3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "l/min-to-in3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "l/min-to-fl-oz/s",
      component: EachUnitConverterComponent
    },
    {
      path: "l/min-to-fl-oz/min",
      component: EachUnitConverterComponent
    },
    {
      path: "l/min-to-fl-oz/h",
      component: EachUnitConverterComponent
    },
    {
      path: "l/min-to-cup/s",
      component: EachUnitConverterComponent
    },
    {
      path: "l/min-to-pnt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "l/min-to-pnt/min",
      component: EachUnitConverterComponent
    },
    {
      path: "l/min-to-pnt/h",
      component: EachUnitConverterComponent
    },
    {
      path: "l/min-to-qt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "l/min-to-gal/s",
      component: EachUnitConverterComponent
    },
    {
      path: "l/min-to-gal/min",
      component: EachUnitConverterComponent
    },
    {
      path: "l/min-to-gal/h",
      component: EachUnitConverterComponent
    },
    {
      path: "l/min-to-ft3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "l/min-to-ft3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "l/min-to-ft3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "l/min-to-yd3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "l/min-to-yd3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "l/min-to-yd3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "l/h-to-mm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "l/h-to-cm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "l/h-to-ml/s",
      component: EachUnitConverterComponent
    },
    {
      path: "l/h-to-cl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "l/h-to-dl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "l/h-to-l/s",
      component: EachUnitConverterComponent
    },
    {
      path: "l/h-to-l/min",
      component: EachUnitConverterComponent
    },
    {
      path: "l/h-to-l/h",
      component: EachUnitConverterComponent
    },
    {
      path: "l/h-to-kl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "l/h-to-kl/min",
      component: EachUnitConverterComponent
    },
    {
      path: "l/h-to-kl/h",
      component: EachUnitConverterComponent
    },
    {
      path: "l/h-to-m3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "l/h-to-m3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "l/h-to-m3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "l/h-to-km3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "l/h-to-tsp/s",
      component: EachUnitConverterComponent
    },
    {
      path: "l/h-to-Tbs/s",
      component: EachUnitConverterComponent
    },
    {
      path: "l/h-to-in3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "l/h-to-in3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "l/h-to-in3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "l/h-to-fl-oz/s",
      component: EachUnitConverterComponent
    },
    {
      path: "l/h-to-fl-oz/min",
      component: EachUnitConverterComponent
    },
    {
      path: "l/h-to-fl-oz/h",
      component: EachUnitConverterComponent
    },
    {
      path: "l/h-to-cup/s",
      component: EachUnitConverterComponent
    },
    {
      path: "l/h-to-pnt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "l/h-to-pnt/min",
      component: EachUnitConverterComponent
    },
    {
      path: "l/h-to-pnt/h",
      component: EachUnitConverterComponent
    },
    {
      path: "l/h-to-qt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "l/h-to-gal/s",
      component: EachUnitConverterComponent
    },
    {
      path: "l/h-to-gal/min",
      component: EachUnitConverterComponent
    },
    {
      path: "l/h-to-gal/h",
      component: EachUnitConverterComponent
    },
    {
      path: "l/h-to-ft3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "l/h-to-ft3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "l/h-to-ft3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "l/h-to-yd3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "l/h-to-yd3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "l/h-to-yd3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/s-to-mm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/s-to-cm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/s-to-ml/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/s-to-cl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/s-to-dl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/s-to-l/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/s-to-l/min",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/s-to-l/h",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/s-to-kl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/s-to-kl/min",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/s-to-kl/h",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/s-to-m3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/s-to-m3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/s-to-m3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/s-to-km3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/s-to-tsp/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/s-to-Tbs/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/s-to-in3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/s-to-in3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/s-to-in3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/s-to-fl-oz/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/s-to-fl-oz/min",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/s-to-fl-oz/h",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/s-to-cup/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/s-to-pnt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/s-to-pnt/min",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/s-to-pnt/h",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/s-to-qt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/s-to-gal/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/s-to-gal/min",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/s-to-gal/h",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/s-to-ft3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/s-to-ft3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/s-to-ft3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/s-to-yd3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/s-to-yd3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/s-to-yd3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/min-to-mm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/min-to-cm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/min-to-ml/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/min-to-cl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/min-to-dl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/min-to-l/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/min-to-l/min",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/min-to-l/h",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/min-to-kl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/min-to-kl/min",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/min-to-kl/h",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/min-to-m3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/min-to-m3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/min-to-m3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/min-to-km3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/min-to-tsp/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/min-to-Tbs/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/min-to-in3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/min-to-in3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/min-to-in3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/min-to-fl-oz/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/min-to-fl-oz/min",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/min-to-fl-oz/h",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/min-to-cup/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/min-to-pnt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/min-to-pnt/min",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/min-to-pnt/h",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/min-to-qt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/min-to-gal/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/min-to-gal/min",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/min-to-gal/h",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/min-to-ft3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/min-to-ft3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/min-to-ft3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/min-to-yd3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/min-to-yd3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/min-to-yd3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/h-to-mm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/h-to-cm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/h-to-ml/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/h-to-cl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/h-to-dl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/h-to-l/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/h-to-l/min",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/h-to-l/h",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/h-to-kl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/h-to-kl/min",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/h-to-kl/h",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/h-to-m3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/h-to-m3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/h-to-m3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/h-to-km3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/h-to-tsp/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/h-to-Tbs/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/h-to-in3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/h-to-in3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/h-to-in3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/h-to-fl-oz/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/h-to-fl-oz/min",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/h-to-fl-oz/h",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/h-to-cup/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/h-to-pnt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/h-to-pnt/min",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/h-to-pnt/h",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/h-to-qt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/h-to-gal/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/h-to-gal/min",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/h-to-gal/h",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/h-to-ft3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/h-to-ft3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/h-to-ft3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/h-to-yd3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/h-to-yd3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "kl/h-to-yd3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/s-to-mm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/s-to-cm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/s-to-ml/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/s-to-cl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/s-to-dl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/s-to-l/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/s-to-l/min",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/s-to-l/h",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/s-to-kl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/s-to-kl/min",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/s-to-kl/h",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/s-to-m3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/s-to-m3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/s-to-m3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/s-to-km3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/s-to-tsp/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/s-to-Tbs/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/s-to-in3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/s-to-in3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/s-to-in3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/s-to-fl-oz/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/s-to-fl-oz/min",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/s-to-fl-oz/h",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/s-to-cup/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/s-to-pnt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/s-to-pnt/min",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/s-to-pnt/h",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/s-to-qt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/s-to-gal/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/s-to-gal/min",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/s-to-gal/h",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/s-to-ft3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/s-to-ft3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/s-to-ft3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/s-to-yd3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/s-to-yd3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/s-to-yd3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/min-to-mm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/min-to-cm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/min-to-ml/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/min-to-cl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/min-to-dl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/min-to-l/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/min-to-l/min",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/min-to-l/h",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/min-to-kl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/min-to-kl/min",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/min-to-kl/h",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/min-to-m3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/min-to-m3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/min-to-m3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/min-to-km3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/min-to-tsp/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/min-to-Tbs/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/min-to-in3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/min-to-in3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/min-to-in3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/min-to-fl-oz/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/min-to-fl-oz/min",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/min-to-fl-oz/h",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/min-to-cup/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/min-to-pnt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/min-to-pnt/min",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/min-to-pnt/h",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/min-to-qt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/min-to-gal/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/min-to-gal/min",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/min-to-gal/h",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/min-to-ft3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/min-to-ft3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/min-to-ft3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/min-to-yd3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/min-to-yd3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/min-to-yd3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/h-to-mm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/h-to-cm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/h-to-ml/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/h-to-cl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/h-to-dl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/h-to-l/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/h-to-l/min",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/h-to-l/h",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/h-to-kl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/h-to-kl/min",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/h-to-kl/h",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/h-to-m3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/h-to-m3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/h-to-m3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/h-to-km3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/h-to-tsp/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/h-to-Tbs/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/h-to-in3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/h-to-in3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/h-to-in3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/h-to-fl-oz/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/h-to-fl-oz/min",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/h-to-fl-oz/h",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/h-to-cup/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/h-to-pnt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/h-to-pnt/min",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/h-to-pnt/h",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/h-to-qt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/h-to-gal/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/h-to-gal/min",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/h-to-gal/h",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/h-to-ft3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/h-to-ft3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/h-to-ft3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/h-to-yd3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/h-to-yd3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "m3/h-to-yd3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "km3/s-to-mm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "km3/s-to-cm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "km3/s-to-ml/s",
      component: EachUnitConverterComponent
    },
    {
      path: "km3/s-to-cl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "km3/s-to-dl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "km3/s-to-l/s",
      component: EachUnitConverterComponent
    },
    {
      path: "km3/s-to-l/min",
      component: EachUnitConverterComponent
    },
    {
      path: "km3/s-to-l/h",
      component: EachUnitConverterComponent
    },
    {
      path: "km3/s-to-kl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "km3/s-to-kl/min",
      component: EachUnitConverterComponent
    },
    {
      path: "km3/s-to-kl/h",
      component: EachUnitConverterComponent
    },
    {
      path: "km3/s-to-m3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "km3/s-to-m3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "km3/s-to-m3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "km3/s-to-km3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "km3/s-to-tsp/s",
      component: EachUnitConverterComponent
    },
    {
      path: "km3/s-to-Tbs/s",
      component: EachUnitConverterComponent
    },
    {
      path: "km3/s-to-in3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "km3/s-to-in3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "km3/s-to-in3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "km3/s-to-fl-oz/s",
      component: EachUnitConverterComponent
    },
    {
      path: "km3/s-to-fl-oz/min",
      component: EachUnitConverterComponent
    },
    {
      path: "km3/s-to-fl-oz/h",
      component: EachUnitConverterComponent
    },
    {
      path: "km3/s-to-cup/s",
      component: EachUnitConverterComponent
    },
    {
      path: "km3/s-to-pnt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "km3/s-to-pnt/min",
      component: EachUnitConverterComponent
    },
    {
      path: "km3/s-to-pnt/h",
      component: EachUnitConverterComponent
    },
    {
      path: "km3/s-to-qt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "km3/s-to-gal/s",
      component: EachUnitConverterComponent
    },
    {
      path: "km3/s-to-gal/min",
      component: EachUnitConverterComponent
    },
    {
      path: "km3/s-to-gal/h",
      component: EachUnitConverterComponent
    },
    {
      path: "km3/s-to-ft3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "km3/s-to-ft3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "km3/s-to-ft3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "km3/s-to-yd3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "km3/s-to-yd3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "km3/s-to-yd3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp/s-to-mm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp/s-to-cm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp/s-to-ml/s",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp/s-to-cl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp/s-to-dl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp/s-to-l/s",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp/s-to-l/min",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp/s-to-l/h",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp/s-to-kl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp/s-to-kl/min",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp/s-to-kl/h",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp/s-to-m3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp/s-to-m3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp/s-to-m3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp/s-to-km3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp/s-to-tsp/s",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp/s-to-Tbs/s",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp/s-to-in3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp/s-to-in3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp/s-to-in3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp/s-to-fl-oz/s",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp/s-to-fl-oz/min",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp/s-to-fl-oz/h",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp/s-to-cup/s",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp/s-to-pnt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp/s-to-pnt/min",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp/s-to-pnt/h",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp/s-to-qt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp/s-to-gal/s",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp/s-to-gal/min",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp/s-to-gal/h",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp/s-to-ft3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp/s-to-ft3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp/s-to-ft3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp/s-to-yd3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp/s-to-yd3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "tsp/s-to-yd3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs/s-to-mm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs/s-to-cm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs/s-to-ml/s",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs/s-to-cl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs/s-to-dl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs/s-to-l/s",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs/s-to-l/min",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs/s-to-l/h",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs/s-to-kl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs/s-to-kl/min",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs/s-to-kl/h",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs/s-to-m3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs/s-to-m3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs/s-to-m3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs/s-to-km3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs/s-to-tsp/s",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs/s-to-Tbs/s",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs/s-to-in3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs/s-to-in3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs/s-to-in3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs/s-to-fl-oz/s",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs/s-to-fl-oz/min",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs/s-to-fl-oz/h",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs/s-to-cup/s",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs/s-to-pnt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs/s-to-pnt/min",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs/s-to-pnt/h",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs/s-to-qt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs/s-to-gal/s",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs/s-to-gal/min",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs/s-to-gal/h",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs/s-to-ft3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs/s-to-ft3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs/s-to-ft3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs/s-to-yd3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs/s-to-yd3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "Tbs/s-to-yd3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/s-to-mm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/s-to-cm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/s-to-ml/s",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/s-to-cl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/s-to-dl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/s-to-l/s",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/s-to-l/min",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/s-to-l/h",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/s-to-kl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/s-to-kl/min",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/s-to-kl/h",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/s-to-m3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/s-to-m3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/s-to-m3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/s-to-km3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/s-to-tsp/s",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/s-to-Tbs/s",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/s-to-in3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/s-to-in3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/s-to-in3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/s-to-fl-oz/s",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/s-to-fl-oz/min",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/s-to-fl-oz/h",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/s-to-cup/s",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/s-to-pnt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/s-to-pnt/min",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/s-to-pnt/h",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/s-to-qt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/s-to-gal/s",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/s-to-gal/min",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/s-to-gal/h",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/s-to-ft3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/s-to-ft3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/s-to-ft3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/s-to-yd3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/s-to-yd3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/s-to-yd3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/min-to-mm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/min-to-cm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/min-to-ml/s",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/min-to-cl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/min-to-dl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/min-to-l/s",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/min-to-l/min",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/min-to-l/h",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/min-to-kl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/min-to-kl/min",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/min-to-kl/h",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/min-to-m3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/min-to-m3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/min-to-m3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/min-to-km3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/min-to-tsp/s",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/min-to-Tbs/s",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/min-to-in3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/min-to-in3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/min-to-in3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/min-to-fl-oz/s",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/min-to-fl-oz/min",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/min-to-fl-oz/h",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/min-to-cup/s",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/min-to-pnt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/min-to-pnt/min",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/min-to-pnt/h",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/min-to-qt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/min-to-gal/s",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/min-to-gal/min",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/min-to-gal/h",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/min-to-ft3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/min-to-ft3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/min-to-ft3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/min-to-yd3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/min-to-yd3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/min-to-yd3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/h-to-mm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/h-to-cm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/h-to-ml/s",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/h-to-cl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/h-to-dl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/h-to-l/s",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/h-to-l/min",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/h-to-l/h",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/h-to-kl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/h-to-kl/min",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/h-to-kl/h",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/h-to-m3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/h-to-m3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/h-to-m3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/h-to-km3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/h-to-tsp/s",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/h-to-Tbs/s",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/h-to-in3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/h-to-in3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/h-to-in3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/h-to-fl-oz/s",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/h-to-fl-oz/min",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/h-to-fl-oz/h",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/h-to-cup/s",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/h-to-pnt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/h-to-pnt/min",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/h-to-pnt/h",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/h-to-qt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/h-to-gal/s",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/h-to-gal/min",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/h-to-gal/h",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/h-to-ft3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/h-to-ft3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/h-to-ft3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/h-to-yd3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/h-to-yd3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "in3/h-to-yd3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/s-to-mm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/s-to-cm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/s-to-ml/s",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/s-to-cl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/s-to-dl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/s-to-l/s",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/s-to-l/min",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/s-to-l/h",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/s-to-kl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/s-to-kl/min",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/s-to-kl/h",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/s-to-m3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/s-to-m3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/s-to-m3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/s-to-km3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/s-to-tsp/s",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/s-to-Tbs/s",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/s-to-in3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/s-to-in3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/s-to-in3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/s-to-fl-oz/s",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/s-to-fl-oz/min",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/s-to-fl-oz/h",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/s-to-cup/s",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/s-to-pnt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/s-to-pnt/min",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/s-to-pnt/h",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/s-to-qt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/s-to-gal/s",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/s-to-gal/min",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/s-to-gal/h",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/s-to-ft3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/s-to-ft3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/s-to-ft3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/s-to-yd3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/s-to-yd3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/s-to-yd3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/min-to-mm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/min-to-cm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/min-to-ml/s",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/min-to-cl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/min-to-dl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/min-to-l/s",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/min-to-l/min",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/min-to-l/h",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/min-to-kl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/min-to-kl/min",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/min-to-kl/h",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/min-to-m3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/min-to-m3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/min-to-m3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/min-to-km3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/min-to-tsp/s",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/min-to-Tbs/s",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/min-to-in3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/min-to-in3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/min-to-in3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/min-to-fl-oz/s",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/min-to-fl-oz/min",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/min-to-fl-oz/h",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/min-to-cup/s",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/min-to-pnt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/min-to-pnt/min",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/min-to-pnt/h",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/min-to-qt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/min-to-gal/s",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/min-to-gal/min",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/min-to-gal/h",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/min-to-ft3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/min-to-ft3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/min-to-ft3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/min-to-yd3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/min-to-yd3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/min-to-yd3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/h-to-mm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/h-to-cm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/h-to-ml/s",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/h-to-cl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/h-to-dl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/h-to-l/s",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/h-to-l/min",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/h-to-l/h",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/h-to-kl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/h-to-kl/min",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/h-to-kl/h",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/h-to-m3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/h-to-m3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/h-to-m3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/h-to-km3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/h-to-tsp/s",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/h-to-Tbs/s",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/h-to-in3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/h-to-in3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/h-to-in3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/h-to-fl-oz/s",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/h-to-fl-oz/min",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/h-to-fl-oz/h",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/h-to-cup/s",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/h-to-pnt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/h-to-pnt/min",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/h-to-pnt/h",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/h-to-qt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/h-to-gal/s",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/h-to-gal/min",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/h-to-gal/h",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/h-to-ft3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/h-to-ft3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/h-to-ft3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/h-to-yd3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/h-to-yd3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "fl-oz/h-to-yd3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "cup/s-to-mm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "cup/s-to-cm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "cup/s-to-ml/s",
      component: EachUnitConverterComponent
    },
    {
      path: "cup/s-to-cl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "cup/s-to-dl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "cup/s-to-l/s",
      component: EachUnitConverterComponent
    },
    {
      path: "cup/s-to-l/min",
      component: EachUnitConverterComponent
    },
    {
      path: "cup/s-to-l/h",
      component: EachUnitConverterComponent
    },
    {
      path: "cup/s-to-kl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "cup/s-to-kl/min",
      component: EachUnitConverterComponent
    },
    {
      path: "cup/s-to-kl/h",
      component: EachUnitConverterComponent
    },
    {
      path: "cup/s-to-m3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "cup/s-to-m3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "cup/s-to-m3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "cup/s-to-km3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "cup/s-to-tsp/s",
      component: EachUnitConverterComponent
    },
    {
      path: "cup/s-to-Tbs/s",
      component: EachUnitConverterComponent
    },
    {
      path: "cup/s-to-in3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "cup/s-to-in3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "cup/s-to-in3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "cup/s-to-fl-oz/s",
      component: EachUnitConverterComponent
    },
    {
      path: "cup/s-to-fl-oz/min",
      component: EachUnitConverterComponent
    },
    {
      path: "cup/s-to-fl-oz/h",
      component: EachUnitConverterComponent
    },
    {
      path: "cup/s-to-cup/s",
      component: EachUnitConverterComponent
    },
    {
      path: "cup/s-to-pnt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "cup/s-to-pnt/min",
      component: EachUnitConverterComponent
    },
    {
      path: "cup/s-to-pnt/h",
      component: EachUnitConverterComponent
    },
    {
      path: "cup/s-to-qt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "cup/s-to-gal/s",
      component: EachUnitConverterComponent
    },
    {
      path: "cup/s-to-gal/min",
      component: EachUnitConverterComponent
    },
    {
      path: "cup/s-to-gal/h",
      component: EachUnitConverterComponent
    },
    {
      path: "cup/s-to-ft3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "cup/s-to-ft3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "cup/s-to-ft3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "cup/s-to-yd3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "cup/s-to-yd3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "cup/s-to-yd3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/s-to-mm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/s-to-cm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/s-to-ml/s",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/s-to-cl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/s-to-dl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/s-to-l/s",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/s-to-l/min",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/s-to-l/h",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/s-to-kl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/s-to-kl/min",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/s-to-kl/h",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/s-to-m3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/s-to-m3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/s-to-m3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/s-to-km3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/s-to-tsp/s",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/s-to-Tbs/s",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/s-to-in3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/s-to-in3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/s-to-in3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/s-to-fl-oz/s",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/s-to-fl-oz/min",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/s-to-fl-oz/h",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/s-to-cup/s",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/s-to-pnt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/s-to-pnt/min",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/s-to-pnt/h",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/s-to-qt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/s-to-gal/s",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/s-to-gal/min",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/s-to-gal/h",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/s-to-ft3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/s-to-ft3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/s-to-ft3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/s-to-yd3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/s-to-yd3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/s-to-yd3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/min-to-mm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/min-to-cm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/min-to-ml/s",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/min-to-cl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/min-to-dl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/min-to-l/s",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/min-to-l/min",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/min-to-l/h",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/min-to-kl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/min-to-kl/min",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/min-to-kl/h",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/min-to-m3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/min-to-m3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/min-to-m3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/min-to-km3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/min-to-tsp/s",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/min-to-Tbs/s",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/min-to-in3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/min-to-in3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/min-to-in3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/min-to-fl-oz/s",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/min-to-fl-oz/min",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/min-to-fl-oz/h",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/min-to-cup/s",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/min-to-pnt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/min-to-pnt/min",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/min-to-pnt/h",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/min-to-qt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/min-to-gal/s",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/min-to-gal/min",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/min-to-gal/h",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/min-to-ft3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/min-to-ft3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/min-to-ft3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/min-to-yd3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/min-to-yd3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/min-to-yd3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/h-to-mm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/h-to-cm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/h-to-ml/s",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/h-to-cl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/h-to-dl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/h-to-l/s",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/h-to-l/min",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/h-to-l/h",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/h-to-kl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/h-to-kl/min",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/h-to-kl/h",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/h-to-m3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/h-to-m3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/h-to-m3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/h-to-km3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/h-to-tsp/s",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/h-to-Tbs/s",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/h-to-in3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/h-to-in3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/h-to-in3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/h-to-fl-oz/s",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/h-to-fl-oz/min",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/h-to-fl-oz/h",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/h-to-cup/s",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/h-to-pnt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/h-to-pnt/min",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/h-to-pnt/h",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/h-to-qt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/h-to-gal/s",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/h-to-gal/min",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/h-to-gal/h",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/h-to-ft3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/h-to-ft3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/h-to-ft3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/h-to-yd3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/h-to-yd3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "pnt/h-to-yd3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "qt/s-to-mm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "qt/s-to-cm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "qt/s-to-ml/s",
      component: EachUnitConverterComponent
    },
    {
      path: "qt/s-to-cl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "qt/s-to-dl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "qt/s-to-l/s",
      component: EachUnitConverterComponent
    },
    {
      path: "qt/s-to-l/min",
      component: EachUnitConverterComponent
    },
    {
      path: "qt/s-to-l/h",
      component: EachUnitConverterComponent
    },
    {
      path: "qt/s-to-kl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "qt/s-to-kl/min",
      component: EachUnitConverterComponent
    },
    {
      path: "qt/s-to-kl/h",
      component: EachUnitConverterComponent
    },
    {
      path: "qt/s-to-m3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "qt/s-to-m3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "qt/s-to-m3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "qt/s-to-km3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "qt/s-to-tsp/s",
      component: EachUnitConverterComponent
    },
    {
      path: "qt/s-to-Tbs/s",
      component: EachUnitConverterComponent
    },
    {
      path: "qt/s-to-in3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "qt/s-to-in3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "qt/s-to-in3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "qt/s-to-fl-oz/s",
      component: EachUnitConverterComponent
    },
    {
      path: "qt/s-to-fl-oz/min",
      component: EachUnitConverterComponent
    },
    {
      path: "qt/s-to-fl-oz/h",
      component: EachUnitConverterComponent
    },
    {
      path: "qt/s-to-cup/s",
      component: EachUnitConverterComponent
    },
    {
      path: "qt/s-to-pnt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "qt/s-to-pnt/min",
      component: EachUnitConverterComponent
    },
    {
      path: "qt/s-to-pnt/h",
      component: EachUnitConverterComponent
    },
    {
      path: "qt/s-to-qt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "qt/s-to-gal/s",
      component: EachUnitConverterComponent
    },
    {
      path: "qt/s-to-gal/min",
      component: EachUnitConverterComponent
    },
    {
      path: "qt/s-to-gal/h",
      component: EachUnitConverterComponent
    },
    {
      path: "qt/s-to-ft3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "qt/s-to-ft3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "qt/s-to-ft3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "qt/s-to-yd3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "qt/s-to-yd3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "qt/s-to-yd3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/s-to-mm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/s-to-cm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/s-to-ml/s",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/s-to-cl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/s-to-dl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/s-to-l/s",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/s-to-l/min",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/s-to-l/h",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/s-to-kl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/s-to-kl/min",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/s-to-kl/h",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/s-to-m3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/s-to-m3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/s-to-m3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/s-to-km3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/s-to-tsp/s",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/s-to-Tbs/s",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/s-to-in3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/s-to-in3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/s-to-in3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/s-to-fl-oz/s",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/s-to-fl-oz/min",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/s-to-fl-oz/h",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/s-to-cup/s",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/s-to-pnt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/s-to-pnt/min",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/s-to-pnt/h",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/s-to-qt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/s-to-gal/s",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/s-to-gal/min",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/s-to-gal/h",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/s-to-ft3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/s-to-ft3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/s-to-ft3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/s-to-yd3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/s-to-yd3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/s-to-yd3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/min-to-mm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/min-to-cm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/min-to-ml/s",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/min-to-cl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/min-to-dl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/min-to-l/s",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/min-to-l/min",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/min-to-l/h",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/min-to-kl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/min-to-kl/min",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/min-to-kl/h",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/min-to-m3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/min-to-m3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/min-to-m3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/min-to-km3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/min-to-tsp/s",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/min-to-Tbs/s",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/min-to-in3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/min-to-in3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/min-to-in3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/min-to-fl-oz/s",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/min-to-fl-oz/min",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/min-to-fl-oz/h",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/min-to-cup/s",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/min-to-pnt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/min-to-pnt/min",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/min-to-pnt/h",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/min-to-qt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/min-to-gal/s",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/min-to-gal/min",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/min-to-gal/h",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/min-to-ft3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/min-to-ft3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/min-to-ft3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/min-to-yd3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/min-to-yd3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/min-to-yd3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/h-to-mm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/h-to-cm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/h-to-ml/s",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/h-to-cl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/h-to-dl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/h-to-l/s",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/h-to-l/min",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/h-to-l/h",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/h-to-kl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/h-to-kl/min",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/h-to-kl/h",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/h-to-m3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/h-to-m3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/h-to-m3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/h-to-km3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/h-to-tsp/s",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/h-to-Tbs/s",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/h-to-in3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/h-to-in3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/h-to-in3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/h-to-fl-oz/s",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/h-to-fl-oz/min",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/h-to-fl-oz/h",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/h-to-cup/s",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/h-to-pnt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/h-to-pnt/min",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/h-to-pnt/h",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/h-to-qt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/h-to-gal/s",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/h-to-gal/min",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/h-to-gal/h",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/h-to-ft3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/h-to-ft3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/h-to-ft3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/h-to-yd3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/h-to-yd3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "gal/h-to-yd3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/s-to-mm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/s-to-cm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/s-to-ml/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/s-to-cl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/s-to-dl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/s-to-l/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/s-to-l/min",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/s-to-l/h",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/s-to-kl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/s-to-kl/min",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/s-to-kl/h",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/s-to-m3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/s-to-m3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/s-to-m3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/s-to-km3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/s-to-tsp/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/s-to-Tbs/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/s-to-in3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/s-to-in3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/s-to-in3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/s-to-fl-oz/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/s-to-fl-oz/min",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/s-to-fl-oz/h",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/s-to-cup/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/s-to-pnt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/s-to-pnt/min",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/s-to-pnt/h",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/s-to-qt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/s-to-gal/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/s-to-gal/min",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/s-to-gal/h",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/s-to-ft3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/s-to-ft3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/s-to-ft3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/s-to-yd3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/s-to-yd3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/s-to-yd3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/min-to-mm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/min-to-cm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/min-to-ml/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/min-to-cl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/min-to-dl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/min-to-l/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/min-to-l/min",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/min-to-l/h",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/min-to-kl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/min-to-kl/min",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/min-to-kl/h",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/min-to-m3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/min-to-m3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/min-to-m3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/min-to-km3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/min-to-tsp/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/min-to-Tbs/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/min-to-in3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/min-to-in3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/min-to-in3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/min-to-fl-oz/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/min-to-fl-oz/min",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/min-to-fl-oz/h",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/min-to-cup/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/min-to-pnt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/min-to-pnt/min",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/min-to-pnt/h",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/min-to-qt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/min-to-gal/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/min-to-gal/min",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/min-to-gal/h",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/min-to-ft3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/min-to-ft3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/min-to-ft3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/min-to-yd3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/min-to-yd3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/min-to-yd3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/h-to-mm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/h-to-cm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/h-to-ml/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/h-to-cl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/h-to-dl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/h-to-l/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/h-to-l/min",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/h-to-l/h",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/h-to-kl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/h-to-kl/min",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/h-to-kl/h",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/h-to-m3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/h-to-m3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/h-to-m3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/h-to-km3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/h-to-tsp/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/h-to-Tbs/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/h-to-in3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/h-to-in3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/h-to-in3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/h-to-fl-oz/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/h-to-fl-oz/min",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/h-to-fl-oz/h",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/h-to-cup/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/h-to-pnt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/h-to-pnt/min",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/h-to-pnt/h",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/h-to-qt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/h-to-gal/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/h-to-gal/min",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/h-to-gal/h",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/h-to-ft3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/h-to-ft3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/h-to-ft3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/h-to-yd3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/h-to-yd3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "ft3/h-to-yd3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/s-to-mm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/s-to-cm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/s-to-ml/s",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/s-to-cl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/s-to-dl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/s-to-l/s",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/s-to-l/min",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/s-to-l/h",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/s-to-kl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/s-to-kl/min",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/s-to-kl/h",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/s-to-m3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/s-to-m3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/s-to-m3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/s-to-km3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/s-to-tsp/s",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/s-to-Tbs/s",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/s-to-in3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/s-to-in3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/s-to-in3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/s-to-fl-oz/s",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/s-to-fl-oz/min",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/s-to-fl-oz/h",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/s-to-cup/s",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/s-to-pnt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/s-to-pnt/min",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/s-to-pnt/h",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/s-to-qt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/s-to-gal/s",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/s-to-gal/min",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/s-to-gal/h",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/s-to-ft3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/s-to-ft3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/s-to-ft3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/s-to-yd3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/s-to-yd3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/s-to-yd3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/min-to-mm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/min-to-cm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/min-to-ml/s",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/min-to-cl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/min-to-dl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/min-to-l/s",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/min-to-l/min",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/min-to-l/h",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/min-to-kl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/min-to-kl/min",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/min-to-kl/h",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/min-to-m3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/min-to-m3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/min-to-m3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/min-to-km3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/min-to-tsp/s",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/min-to-Tbs/s",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/min-to-in3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/min-to-in3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/min-to-in3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/min-to-fl-oz/s",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/min-to-fl-oz/min",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/min-to-fl-oz/h",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/min-to-cup/s",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/min-to-pnt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/min-to-pnt/min",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/min-to-pnt/h",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/min-to-qt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/min-to-gal/s",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/min-to-gal/min",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/min-to-gal/h",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/min-to-ft3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/min-to-ft3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/min-to-ft3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/min-to-yd3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/min-to-yd3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/min-to-yd3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/h-to-mm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/h-to-cm3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/h-to-ml/s",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/h-to-cl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/h-to-dl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/h-to-l/s",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/h-to-l/min",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/h-to-l/h",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/h-to-kl/s",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/h-to-kl/min",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/h-to-kl/h",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/h-to-m3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/h-to-m3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/h-to-m3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/h-to-km3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/h-to-tsp/s",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/h-to-Tbs/s",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/h-to-in3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/h-to-in3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/h-to-in3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/h-to-fl-oz/s",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/h-to-fl-oz/min",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/h-to-fl-oz/h",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/h-to-cup/s",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/h-to-pnt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/h-to-pnt/min",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/h-to-pnt/h",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/h-to-qt/s",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/h-to-gal/s",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/h-to-gal/min",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/h-to-gal/h",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/h-to-ft3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/h-to-ft3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/h-to-ft3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/h-to-yd3/s",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/h-to-yd3/min",
      component: EachUnitConverterComponent
    },
    {
      path: "yd3/h-to-yd3/h",
      component: EachUnitConverterComponent
    },
    {
      path: "lx-to-lx",
      component: EachUnitConverterComponent
    },
    {
      path: "lx-to-ft-cd",
      component: EachUnitConverterComponent
    },
    {
      path: "ft-cd-to-lx",
      component: EachUnitConverterComponent
    },
    {
      path: "ft-cd-to-ft-cd",
      component: EachUnitConverterComponent
    },
    {
      path: "mHz-to-mHz",
      component: EachUnitConverterComponent
    },
    {
      path: "mHz-to-Hz",
      component: EachUnitConverterComponent
    },
    {
      path: "mHz-to-kHz",
      component: EachUnitConverterComponent
    },
    {
      path: "mHz-to-MHz",
      component: EachUnitConverterComponent
    },
    {
      path: "mHz-to-GHz",
      component: EachUnitConverterComponent
    },
    {
      path: "mHz-to-THz",
      component: EachUnitConverterComponent
    },
    {
      path: "mHz-to-rpm",
      component: EachUnitConverterComponent
    },
    {
      path: "mHz-to-deg/s",
      component: EachUnitConverterComponent
    },
    {
      path: "mHz-to-rad/s",
      component: EachUnitConverterComponent
    },
    {
      path: "Hz-to-mHz",
      component: EachUnitConverterComponent
    },
    {
      path: "Hz-to-Hz",
      component: EachUnitConverterComponent
    },
    {
      path: "Hz-to-kHz",
      component: EachUnitConverterComponent
    },
    {
      path: "Hz-to-MHz",
      component: EachUnitConverterComponent
    },
    {
      path: "Hz-to-GHz",
      component: EachUnitConverterComponent
    },
    {
      path: "Hz-to-THz",
      component: EachUnitConverterComponent
    },
    {
      path: "Hz-to-rpm",
      component: EachUnitConverterComponent
    },
    {
      path: "Hz-to-deg/s",
      component: EachUnitConverterComponent
    },
    {
      path: "Hz-to-rad/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kHz-to-mHz",
      component: EachUnitConverterComponent
    },
    {
      path: "kHz-to-Hz",
      component: EachUnitConverterComponent
    },
    {
      path: "kHz-to-kHz",
      component: EachUnitConverterComponent
    },
    {
      path: "kHz-to-MHz",
      component: EachUnitConverterComponent
    },
    {
      path: "kHz-to-GHz",
      component: EachUnitConverterComponent
    },
    {
      path: "kHz-to-THz",
      component: EachUnitConverterComponent
    },
    {
      path: "kHz-to-rpm",
      component: EachUnitConverterComponent
    },
    {
      path: "kHz-to-deg/s",
      component: EachUnitConverterComponent
    },
    {
      path: "kHz-to-rad/s",
      component: EachUnitConverterComponent
    },
    {
      path: "MHz-to-mHz",
      component: EachUnitConverterComponent
    },
    {
      path: "MHz-to-Hz",
      component: EachUnitConverterComponent
    },
    {
      path: "MHz-to-kHz",
      component: EachUnitConverterComponent
    },
    {
      path: "MHz-to-MHz",
      component: EachUnitConverterComponent
    },
    {
      path: "MHz-to-GHz",
      component: EachUnitConverterComponent
    },
    {
      path: "MHz-to-THz",
      component: EachUnitConverterComponent
    },
    {
      path: "MHz-to-rpm",
      component: EachUnitConverterComponent
    },
    {
      path: "MHz-to-deg/s",
      component: EachUnitConverterComponent
    },
    {
      path: "MHz-to-rad/s",
      component: EachUnitConverterComponent
    },
    {
      path: "GHz-to-mHz",
      component: EachUnitConverterComponent
    },
    {
      path: "GHz-to-Hz",
      component: EachUnitConverterComponent
    },
    {
      path: "GHz-to-kHz",
      component: EachUnitConverterComponent
    },
    {
      path: "GHz-to-MHz",
      component: EachUnitConverterComponent
    },
    {
      path: "GHz-to-GHz",
      component: EachUnitConverterComponent
    },
    {
      path: "GHz-to-THz",
      component: EachUnitConverterComponent
    },
    {
      path: "GHz-to-rpm",
      component: EachUnitConverterComponent
    },
    {
      path: "GHz-to-deg/s",
      component: EachUnitConverterComponent
    },
    {
      path: "GHz-to-rad/s",
      component: EachUnitConverterComponent
    },
    {
      path: "THz-to-mHz",
      component: EachUnitConverterComponent
    },
    {
      path: "THz-to-Hz",
      component: EachUnitConverterComponent
    },
    {
      path: "THz-to-kHz",
      component: EachUnitConverterComponent
    },
    {
      path: "THz-to-MHz",
      component: EachUnitConverterComponent
    },
    {
      path: "THz-to-GHz",
      component: EachUnitConverterComponent
    },
    {
      path: "THz-to-THz",
      component: EachUnitConverterComponent
    },
    {
      path: "THz-to-rpm",
      component: EachUnitConverterComponent
    },
    {
      path: "THz-to-deg/s",
      component: EachUnitConverterComponent
    },
    {
      path: "THz-to-rad/s",
      component: EachUnitConverterComponent
    },
    {
      path: "rpm-to-mHz",
      component: EachUnitConverterComponent
    },
    {
      path: "rpm-to-Hz",
      component: EachUnitConverterComponent
    },
    {
      path: "rpm-to-kHz",
      component: EachUnitConverterComponent
    },
    {
      path: "rpm-to-MHz",
      component: EachUnitConverterComponent
    },
    {
      path: "rpm-to-GHz",
      component: EachUnitConverterComponent
    },
    {
      path: "rpm-to-THz",
      component: EachUnitConverterComponent
    },
    {
      path: "rpm-to-rpm",
      component: EachUnitConverterComponent
    },
    {
      path: "rpm-to-deg/s",
      component: EachUnitConverterComponent
    },
    {
      path: "rpm-to-rad/s",
      component: EachUnitConverterComponent
    },
    {
      path: "deg/s-to-mHz",
      component: EachUnitConverterComponent
    },
    {
      path: "deg/s-to-Hz",
      component: EachUnitConverterComponent
    },
    {
      path: "deg/s-to-kHz",
      component: EachUnitConverterComponent
    },
    {
      path: "deg/s-to-MHz",
      component: EachUnitConverterComponent
    },
    {
      path: "deg/s-to-GHz",
      component: EachUnitConverterComponent
    },
    {
      path: "deg/s-to-THz",
      component: EachUnitConverterComponent
    },
    {
      path: "deg/s-to-rpm",
      component: EachUnitConverterComponent
    },
    {
      path: "deg/s-to-deg/s",
      component: EachUnitConverterComponent
    },
    {
      path: "deg/s-to-rad/s",
      component: EachUnitConverterComponent
    },
    {
      path: "rad/s-to-mHz",
      component: EachUnitConverterComponent
    },
    {
      path: "rad/s-to-Hz",
      component: EachUnitConverterComponent
    },
    {
      path: "rad/s-to-kHz",
      component: EachUnitConverterComponent
    },
    {
      path: "rad/s-to-MHz",
      component: EachUnitConverterComponent
    },
    {
      path: "rad/s-to-GHz",
      component: EachUnitConverterComponent
    },
    {
      path: "rad/s-to-THz",
      component: EachUnitConverterComponent
    },
    {
      path: "rad/s-to-rpm",
      component: EachUnitConverterComponent
    },
    {
      path: "rad/s-to-deg/s",
      component: EachUnitConverterComponent
    },
    {
      path: "rad/s-to-rad/s",
      component: EachUnitConverterComponent
    },
    {
      path: "rad-to-rad",
      component: EachUnitConverterComponent
    },
    {
      path: "rad-to-deg",
      component: EachUnitConverterComponent
    },
    {
      path: "rad-to-grad",
      component: EachUnitConverterComponent
    },
    {
      path: "rad-to-arcmin",
      component: EachUnitConverterComponent
    },
    {
      path: "rad-to-arcsec",
      component: EachUnitConverterComponent
    },
    {
      path: "deg-to-rad",
      component: EachUnitConverterComponent
    },
    {
      path: "deg-to-deg",
      component: EachUnitConverterComponent
    },
    {
      path: "deg-to-grad",
      component: EachUnitConverterComponent
    },
    {
      path: "deg-to-arcmin",
      component: EachUnitConverterComponent
    },
    {
      path: "deg-to-arcsec",
      component: EachUnitConverterComponent
    },
    {
      path: "grad-to-rad",
      component: EachUnitConverterComponent
    },
    {
      path: "grad-to-deg",
      component: EachUnitConverterComponent
    },
    {
      path: "grad-to-grad",
      component: EachUnitConverterComponent
    },
    {
      path: "grad-to-arcmin",
      component: EachUnitConverterComponent
    },
    {
      path: "grad-to-arcsec",
      component: EachUnitConverterComponent
    },
    {
      path: "arcmin-to-rad",
      component: EachUnitConverterComponent
    },
    {
      path: "arcmin-to-deg",
      component: EachUnitConverterComponent
    },
    {
      path: "arcmin-to-grad",
      component: EachUnitConverterComponent
    },
    {
      path: "arcmin-to-arcmin",
      component: EachUnitConverterComponent
    },
    {
      path: "arcmin-to-arcsec",
      component: EachUnitConverterComponent
    },
    {
      path: "arcsec-to-rad",
      component: EachUnitConverterComponent
    },
    {
      path: "arcsec-to-deg",
      component: EachUnitConverterComponent
    },
    {
      path: "arcsec-to-grad",
      component: EachUnitConverterComponent
    },
    {
      path: "arcsec-to-arcmin",
      component: EachUnitConverterComponent
    },
    {
      path: "arcsec-to-arcsec",
      component: EachUnitConverterComponent
    },
    {
      path: '',
      redirectTo: '/length-converter',
      pathMatch: 'full'
    }]
  },
  {
    path: '',
    redirectTo: '/length-converter',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AllUnitConverterComponent,
    UnitConverterComponent,
    EachUnitConverterComponent
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

export class UnitConverterModule { }
