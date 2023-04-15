import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { ImageComponentsComponent } from './image-components/image-components.component';
import { ImageSidebarComponent } from './image-sidebar/image-sidebar.component';
import { UnitSidebarComponent } from './unit-sidebar/unit-sidebar.component';
import { UnitConvertersComponent } from './unit-converters/unit-converters.component';
import { TextToolsComponentComponent } from './text-tools-component/text-tools-component.component';
import { TextToolsSidebarComponent } from './text-tools-sidebar/text-tools-sidebar.component';
import { NumberToolsComponentComponent } from './number-tools-component/number-tools-component.component';
import { NumberToolsSidebarComponent } from './number-tools-sidebar/number-tools-sidebar.component';
import { EncryptionToolsComponentComponent } from './encryption-tools-component/encryption-tools-component.component';
import { EncryptionToolsSidebarComponent } from './encryption-tools-sidebar/encryption-tools-sidebar.component';
import { ProgressBarComponent } from './progressbar/progressbar.component';
import { ConversionToolsSidebarComponent } from './conversion-tools-sidebar/conversion-tools-sidebar.component';
import { ConversionToolsComponentComponent } from './conversion-tools-component/conversion-tools-component.component';

@NgModule({
  exports: [
    FooterComponent,
    SidebarComponent,
    HeaderComponent,
    ImageComponentsComponent,
    ImageSidebarComponent,
    UnitConvertersComponent,
    UnitSidebarComponent,
    TextToolsComponentComponent,
    TextToolsSidebarComponent,
    NumberToolsComponentComponent,
    NumberToolsSidebarComponent,
    EncryptionToolsComponentComponent,
    EncryptionToolsSidebarComponent,
    ProgressBarComponent,
    ConversionToolsSidebarComponent,
    ConversionToolsComponentComponent],
  declarations: [
    FooterComponent,
    SidebarComponent,
    HeaderComponent,
    ImageComponentsComponent,
    ImageSidebarComponent,
    UnitConvertersComponent,
    UnitSidebarComponent,
    TextToolsComponentComponent,
    TextToolsSidebarComponent,
    NumberToolsComponentComponent,
    NumberToolsSidebarComponent,
    EncryptionToolsComponentComponent,
    EncryptionToolsSidebarComponent,
    ProgressBarComponent,
    ConversionToolsSidebarComponent,
    ConversionToolsComponentComponent],
  entryComponents: [
    FooterComponent,
    SidebarComponent,
    HeaderComponent,
    ImageComponentsComponent,
    ImageSidebarComponent,
    UnitConvertersComponent,
    UnitSidebarComponent,
    TextToolsComponentComponent,
    TextToolsSidebarComponent,
    NumberToolsComponentComponent,
    NumberToolsSidebarComponent,
    EncryptionToolsComponentComponent,
    EncryptionToolsSidebarComponent,
    ProgressBarComponent,
    ConversionToolsSidebarComponent,
    ConversionToolsComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})

export class ComponentsModule { }
