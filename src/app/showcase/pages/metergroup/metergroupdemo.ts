import { Component } from '@angular/core';
import { ImportDoc } from '../../doc/metergroup/importdoc';
import { BasicDoc } from '../../doc/metergroup/basicdoc';
import { AccessibilityDoc } from '../../doc/metergroup/accessibilitydoc';
import { MultipleDoc } from '../../doc/metergroup/multipledoc';
import { TemplateDoc } from '../../doc/metergroup/templatedoc';
import { StyleDoc } from '../../doc/metergroup/styledoc';
@Component({
    templateUrl: './metergroupdemo.html',
})
export class MeterGroupDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDoc
        },
        {
            id: 'multiple',
            label: 'Multiple',
            component: MultipleDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'style',
            label: 'Styling of MeterGroup',
            component: StyleDoc
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        }
    ];
}
