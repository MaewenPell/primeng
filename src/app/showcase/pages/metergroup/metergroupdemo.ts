import { Component } from '@angular/core';
import { ImportDoc } from '../../doc/metergroup/importdoc';
import { BasicDoc } from '../../doc/metergroup/basicdoc';
import { AccessibilityDoc } from '../../doc/metergroup/accessibilitydoc';

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
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        }
    ];
}
