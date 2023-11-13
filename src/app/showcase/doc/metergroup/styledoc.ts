import { Component, Input } from '@angular/core';

@Component({
    selector: 'style-doc',
    template: ` <section class="py-4">
        <app-docsectiontext [title]="title" [id]="id"></app-docsectiontext>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Element</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>p-metergroup</td>
                        <td>Container element.</td>
                    </tr>
                    <tr>
                        <td>p-metergroup-gauge-meter</td>
                        <td>Gauge element.</td>
                    </tr>
                    <tr>
                        <td>p-metergroup-gauge-segment</td>
                        <td>Segment element.</td>
                    </tr>
                    <tr>
                        <td>p-metergroup-legend</td>
                        <td>Legend element.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>`
})
export class StyleDoc {
    @Input() id: string;

    @Input() title: string;
}
