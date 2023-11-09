import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, NgModule, ViewEncapsulation, ContentChildren, QueryList, TemplateRef } from '@angular/core';
import { PrimeTemplate } from '../api/shared';

@Component({
    selector: 'p-meterGroup',
    template: `
        <div class="p-metergroup">
            <div *ngIf="value; else noValue">
                <div class="gauge-meter w-full">
                    <div class="gauge-segment border-round-xl" [style.background-color]="'#3B82F6'" [style.width]="calculateWidth(value)"></div>
                </div>
                <div class="legend-item">
                    <span [style.color]="color">{{ label }}</span>
                </div>
            </div>
            <ng-template #noValue>
                <div class="gauge-meter w-full">
                    <div
                        *ngFor="let segment of meterSegments; let first = first; let last = last"
                        class="gauge-segment"
                        [style.background-color]="segment.color"
                        [style.width]="calculateWidth(segment.value)"
                        [ngClass]="{ 'first-segment': first, 'last-segment': last }"
                    ></div>
                </div>

                <ng-template ngFor [ngForOf]="meterSegments" let-segment>
                    <ng-container *ngIf="!itemTemplate">
                        <div class="legend-item">
                            <span class="dot" [style.background-color]="segment.color"></span>
                            <span [style.color]="segment.color">{{ segment.label }} ({{ calculateWidth(segment.value) }})</span>
                        </div>
                    </ng-container>
                    <ng-container *ngTemplateOutlet="itemTemplate; context: { $implicit: segment }"></ng-container>
                </ng-template>
            </ng-template>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./metergroup.css'],
    host: {
        class: 'p-element'
    }
})
export class MeterGroup {
    @Input() value: number | undefined;
    @Input() label: string | undefined;
    @Input() color: string | undefined;
    @Input() meterSegments: any;
    @Input() min: number = 0;
    @Input() max: number = 128;
    @Input() fixedPercentageValue: number;
    @ContentChildren(PrimeTemplate) templates: QueryList<PrimeTemplate> | undefined;
    itemTemplate: TemplateRef<any> | undefined;
    startTemplate: TemplateRef<any> | undefined;
    ngAfterContentInit() {
        this.templates?.forEach((item) => {
            switch (item.getType()) {
                case 'itemTemplate':
                    this.itemTemplate = item.template;
                    break;

                default:
                    this.itemTemplate = item.template;
                    break;
            }
        });
    }

    calculateWidths() {
        this.meterSegments.forEach((segment) => {
            segment.width = this.calculateWidth(segment.value);
        });
    }

    calculateWidth(value: number): string {
        const normalizedValue = Math.min(Math.max(value, this.min), this.max);
        const percentage = ((normalizedValue - this.min) / (this.max - this.min)) * 100;
        return percentage.toFixed(this.fixedPercentageValue || 0) + '%';
    }
}

@NgModule({
    imports: [CommonModule],
    exports: [MeterGroup],
    declarations: [MeterGroup]
})
export class MeterGroupModule {}
