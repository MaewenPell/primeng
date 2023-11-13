import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Code } from '../../domain/code';

@Component({
    selector: 'multiple-doc',
    template: ` <section class="py-4">
        <app-docsectiontext [title]="title" [id]="id">
            <p>Menu requires a collection of menuitems as its <i>model</i>.</p>
        </app-docsectiontext>
        <div class="card">
            <p-meterGroup [meterSegments]="meterSegments" />
        </div>
        <app-code [code]="code" selector="meter-group-multiple-demo"></app-code>
    </section>`
})
export class MultipleDoc implements OnInit {
    @Input() id: string;

    @Input() title: string;

    meterSegments = [
        { label: 'Videos', color: '#24C55E  ', value: 8 },
        { label: 'Games', color: '#3C82F6', value: 24 },
        { label: 'System', color: '#F59E0B', value: 12 },
        { label: 'Images', color: '#EF4444', value: 42 }
    ];

    ngOnInit() {}

    code: Code = {
        basic: `
<p-menu [model]="items"></p-menu>`,

        html: `
<div class="card flex justify-content-center">
    <p-menu [model]="items"></p-menu>
</div>`,

        typescript: `
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'meter-group-multiple-demo',
    templateUrl: './meter-group-multiple-demo.html'
})
export class MeterGroupMultipleDemo implements OnInit {
  

    ngOnInit() {
     
    }
}`
    };
}
