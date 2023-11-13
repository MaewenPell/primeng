import { TemplateRef } from '@angular/core';
import { MeterGroup } from './metergroup';
/**
 * MeterGroup segment item.
 * @group Interface
 */
export interface Segment {
    /**
     * Label of the segment.
     */
    label: string;
    /**
     * Color of the segment.
     */
    color: string;
    /**
     * Value of the segment.
     */
    value: number;
}
/**
 * Legend click event.
 * @see {@link MeterGroup.legendClicked}
 * @group Events
 */
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
/**
 * Defines valid templates in MeterGroup.
 * @group Templates
 */
export interface MeterGroupTemplates {
    /**
     * Custom legend template.
     * @param {Segment} segment - segment data.
     */
    legend(context: {
        /**
         * Legend.
         */
        $implicit: Segment;
    }): TemplateRef<{ $implicit: Segment }>;
}
