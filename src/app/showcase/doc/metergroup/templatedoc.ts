import { Component, Input, OnInit } from '@angular/core';
import { Segment } from 'primeng/metergroup';
import { Code } from '../../domain/code';

@Component({
    selector: 'template-doc',
    template: ` <section class="py-4">
        <app-docsectiontext [title]="title" [id]="id">
            <p>Menu requires a collection of menuitems as its <i>model</i>.</p>
        </app-docsectiontext>
        <div class="card">
            <p-meterGroup [meterSegments]="meterSegments">
                <ng-template pTemplate="legend" let-legend>
                    <div style=" margin: 4px 0">
                        <i [style.color]="legend.color" style="display: inline-block; margin-right: 10px; font-weight:bold" class="{{ legend.icon }}"></i>
                        <span [style.color]="legend.color">{{ legend.label }} ({{ legend.value }}%) </span>
                    </div>
                </ng-template>
            </p-meterGroup>
        </div>
        <app-code [code]="code" selector="meter-group-template-demo"></app-code>
    </section>`
})
export class TemplateDoc implements OnInit {
    @Input() id: string;

    @Input() title: string;

    meterSegments: Segment[] = [
        { label: 'Folders', color: '#24C55E  ', value: 8, icon: 'pi pi-folder' },
        { label: 'Applications', color: '#3C82F6', value: 24, icon: 'pi pi-discord' },
        { label: 'Mails', color: '#F59E0B', value: 12, icon: 'pi pi-envelope' },
        { label: 'Images', color: '#EF4444', value: 42, icon: 'pi pi-images' }
    ];

    ngOnInit() {}

    code: Code = {
        basic: `
        <p-meterGroup [meterSegments]="meterSegments">
        <ng-template pTemplate="legend" let-legend>
            <div style=" margin: 4px 0">
                <i [style.color]="legend.color" style="display: inline-block; margin-right: 10px; font-weight:bold" class="{{ legend.icon }}"></i>
                <span [style.color]="legend.color">{{ legend.label }} ({{ legend.value }}%) </span>
            </div>
        </ng-template>
    </p-meterGroup>`,

        html: `
    <div class="card flex justify-content-center">
    <p-meterGroup [meterSegments]="meterSegments">
    <ng-template pTemplate="legend" let-legend>
        <div style=" margin: 4px 0">
            <i [style.color]="legend.color" style="display: inline-block; margin-right: 10px; font-weight:bold" class="{{ legend.icon }}"></i>
            <span [style.color]="legend.color">{{ legend.label }} ({{ legend.value }}%) </span>
        </div>
    </ng-template>
    </p-meterGroup>
    </div>`,

        typescript: `
import { Component, OnInit } from '@angular/core';
import { Segment } from 'primeng/metergroup';

@Component({
    selector: 'meter-group-template-demo',
    templateUrl: './meter-group-template-demo.html'
})
export class MeterGroupTemplateDemo implements OnInit {
    
    meterSegments : Segment[] = [
        { label: 'Folders', color: '#24C55E  ', value: 8, icon: 'pi pi-folder' },
        { label: 'Applications', color: '#3C82F6', value: 24, icon: 'pi pi-discord' },
        { label: 'Mails', color: '#F59E0B', value: 12, icon: 'pi pi-envelope' },
        { label: 'Images', color: '#EF4444', value: 42, icon: 'pi pi-images' }
    ];

    ngOnInit() {
     
    }
}`
    };
}
