import { Component, Input, OnInit } from '@angular/core';
import { Segment } from 'primeng/metergroup';
import { Code } from '../../domain/code';

@Component({
    selector: 'multiple-doc',
    template: ` <section class="py-4">
        <app-docsectiontext [title]="title" [id]="id">
            <p>Utilize <i>meterSegments</i> with MeterGroup to showcase multiple meters.</p>
        </app-docsectiontext>
        <div class="card">
            <p-meterGroup [meterSegments]="meterSegments" />
        </div>
        <app-code [code]="code" selector="meter-group-multiple-demo"></app-code>
    </section>`
})
export class MultipleDoc {
    @Input() id: string;

    @Input() title: string;

    meterSegments: Segment[] = [
        { label: 'Videos', color: '#24C55E  ', value: 8 },
        { label: 'Games', color: '#3C82F6', value: 24 },
        { label: 'System', color: '#F59E0B', value: 12 },
        { label: 'Images', color: '#EF4444', value: 42 }
    ];

    code: Code = {
        basic: `
<p-meterGroup [meterSegments]="meterSegments" />`,

        html: `
<div class="card flex justify-content-center">
    <p-meterGroup [meterSegments]="meterSegments" />
</div>`,

        typescript: `
import { Component } from '@angular/core';
import { Segment } from 'primeng/metergroup';

@Component({
    selector: 'meter-group-multiple-demo',
    templateUrl: './meter-group-multiple-demo.html'
})
export class MeterGroupMultipleDemo {

    meterSegments: Segment[] = [
        { label: 'Videos', color: '#24C55E  ', value: 8 },
        { label: 'Games', color: '#3C82F6', value: 24 },
        { label: 'System', color: '#F59E0B', value: 12 },
        { label: 'Images', color: '#EF4444', value: 42 }
    ];
}`
    };
}
