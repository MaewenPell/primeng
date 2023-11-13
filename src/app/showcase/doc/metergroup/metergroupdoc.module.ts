import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { BasicDoc } from './basicdoc';
import { ImportDoc } from './importdoc';
import { AccessibilityDoc } from './accessibilitydoc';
import { MeterGroupModule } from 'primeng/metergroup';
import { MultipleDoc } from './multipledoc';
import { TemplateDoc } from './templatedoc';
@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, MeterGroupModule],
    declarations: [BasicDoc, AccessibilityDoc, ImportDoc, MultipleDoc, TemplateDoc],
    exports: [AppDocModule]
})
export class MeterGroupDocModule {}
