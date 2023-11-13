import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'basic-doc',
    template: ` <section class="py-4">
        <app-docsectiontext [title]="title" [id]="id">
            <p>MeterGroup is used with the <i>value</i> and <i>label</i> properties.</p>
        </app-docsectiontext>
        <div class="card">
            <p-meterGroup [value]="value" [label]="label"></p-meterGroup>
        </div>
        <app-code [code]="code" selector="meter-group-basic-demo"></app-code>
    </section>`
})
export class BasicDoc {
    @Input() id: string;

    @Input() title: string;

    value: number = 33;

    label: string = "Disk Usage"

    code: Code = {
        basic: `
<p-meterGroup [value]="value" [label]="label"></p-meterGroup>`,

        html: `
<div class="card flex justify-content-center">
    <p-meterGroup [value]="value" [label]="label"></p-meterGroup>
</div>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    selector: 'meter-group-basic-demo',
    templateUrl: './meter-group-basic-demo.html'
})
export class MeterGroupBasicDemo {
    value: number = 33;

    label: string = "Disk Usage";
}`
    };
}
