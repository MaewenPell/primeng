import { TemplateRef } from '@angular/core';
import { ScrollerOptions } from 'primeng/api';
import { MeterGroup } from './metergroup';

/**
 * Legend click event.
 * @see {@link MeterGroup.legendClicked}
 * @group Events
 */

export interface Segment {
    label: string;
    color: string;
    value: number;
}
export interface MeterGroupLegendClickEvent {
    /**
     * Browser event.
     */
    originalEvent: Event;
    /**
     * Clicked value.
     */
    segment: Segment;
}

export interface MeterGroupTemplates {
    /**
     * Custom legend template.
     * @param {Object} context - legend data.
     */
    legend(context: {
        /**
         * Legend.
         */
        $implicit: any;
    }): TemplateRef<{ $implicit: any }>;
}
