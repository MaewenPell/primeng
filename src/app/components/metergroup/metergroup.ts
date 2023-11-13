import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, Output, NgModule, ViewEncapsulation, ContentChildren, QueryList, TemplateRef, EventEmitter } from '@angular/core';
import { PrimeTemplate, SharedModule } from 'primeng/api';
import { MeterGroupLegendClickEvent, Segment } from './metergroup.interface';

@Component({
    selector: 'p-meterGroup',
    template: `
        <div class="p-metergroup">
            <div *ngIf="value; else noValue">
                <div class="p-metergroup-gauge-meter" [style.background-color]="emptySpaceBgColor">
                    <div class="p-metergroup-gauge-segment border-round-xl" [style.background-color]="color || '#3C82F6'" [style.width]="calculateWidth(value)"></div>
                </div>

                <ng-container *ngIf="!legendTemplate">
                    <div class="p-metergroup-legend">
                        <span (click)="legendClick($event,{label,value})" class="font-medium" [style.color]="color || '#3C82F6'">{{ label }}</span>
                    </div>
                </ng-container>

                <ng-container *ngTemplateOutlet="legendTemplate"></ng-container>
            </div>
            <ng-template #noValue>
                <div class="p-metergroup-gauge-meter" [style.background-color]="emptySpaceBgColor">
                    <div *ngFor="let segment of meterSegments" class="p-metergroup-gauge-segment" [style.background-color]="segment.color" [style.width]="calculateWidth(segment.value)"></div>
                </div>

                <ng-template ngFor [ngForOf]="meterSegments" let-segment>
                    <ng-container *ngIf="!legendTemplate">
                        <div class="p-metergroup-legend" (click)="legendClick($event, segment)">
                            <span class="dot" [style.background-color]="segment.color"></span>
                            <span [style.color]="segment.color">{{ segment.label }} ({{ calculateWidth(segment.value) }})</span>
                        </div>
                    </ng-container>

                    <ng-container *ngTemplateOutlet="legendTemplate; context: { $implicit: segment }"></ng-container>
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
    /**
     * Value of the meter.
     * @group Props
     */
    @Input() value: number | undefined;
    /**
     * Label of the meter.
     * @group Props
     */
    @Input() label: string | undefined;
    /**
     * Color of the meter.
     * @group Props
     */
    @Input() color: string | undefined;
    /**
     * Background color of the empty space.
     * @group Props
     */
    @Input() emptySpaceBgColor: string | undefined = '#334155';
    /**
     * Meter segments to be displayed.
     * @group Props 
     */

    @Input() meterSegments: Segment[] | undefined;
    /**
     * Minimum value of the meter.
     * @group Props
     */
    @Input() min: number = 0;
    /**
     * Maximum value of the meter.
     * @group Props
     */
    @Input() max: number = 100;
    /**
     * Specifies the number of decimal places to display in the percentage value.
     * @group Props
     */
    @Input() fixedPercentageValue: number = 0;
    /**
     * Event emitted when a legend within the MeterGroup is clicked.
     * @param {MeterGroupLegendClickEvent} event - custom select event.
     * @group Emits
     */
    @Output() legendClicked: EventEmitter<MeterGroupLegendClickEvent> = new EventEmitter<MeterGroupLegendClickEvent>();

    @ContentChildren(PrimeTemplate) templates: QueryList<PrimeTemplate> | undefined;

    legendTemplate: TemplateRef<any> | undefined;

    ngAfterContentInit() {
        this.templates?.forEach((item) => {
            switch (item.getType()) {
                case 'legend':
                    this.legendTemplate = item.template;
                    break;

                default:
                    this.legendTemplate = item.template;
                    break;
            }
        });
    }

    legendClick(event, segment) {
        this.legendClicked.emit({ originalEvent: event, segment: segment });
    }

    calculateWidth(value: number): string {
        const normalizedValue = Math.min(Math.max(value, this.min), this.max);
        const percentage = ((normalizedValue - this.min) / (this.max - this.min)) * 100;
        return percentage.toFixed(this.fixedPercentageValue) + '%';
    }
}

@NgModule({
    imports: [CommonModule, SharedModule],
    exports: [MeterGroup, SharedModule],
    declarations: [MeterGroup]
})
export class MeterGroupModule {}
