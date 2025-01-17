import { Component, Input, OnInit } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'virtual-scroll-doc',
    template: ` <section class="py-4">
        <app-docsectiontext [title]="title" [id]="id">
            <p>
                VirtualScrolling is an efficient way of rendering the options by displaying a small subset of data in the viewport at any time. When dealing with huge number of options, it is suggested to enable VirtualScrolling to avoid performance
                issues. Usage is simple as setting <i>virtualScroll</i> property to true and defining <i>virtualScrollItemSize</i> to specify the height of an item.
            </p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-listbox
                [options]="items"
                [(ngModel)]="selectedItems"
                [selectAll]="selectAll"
                optionLabel="label"
                [style]="{ width: '15rem' }"
                [virtualScroll]="true"
                [filter]="true"
                [virtualScrollItemSize]="43"
                [multiple]="true"
                [checkbox]="true"
                [showToggleAll]="false"
                [metaKeySelection]="false"
                [showToggleAll]="true"
                (onSelectAllChange)="onSelectAllChange($event)"
                (onChange)="onChange($event)"
                [listStyle]="{ 'max-height': '220px' }"
            ></p-listbox>
        </div>
        <app-code [code]="code" selector="listbox-virtual-scroll-demo"></app-code>
    </section>`
})
export class VirtualScrollDoc {
    @Input() id: string;

    @Input() title: string;

    items = Array.from({ length: 100000 }, (_, i) => ({ label: `Item #${i}`, value: i }));

    selectedItems!: any[];

    selectAll: boolean = false;

    onSelectAllChange(event) {
        this.selectedItems = event.checked ? [...this.items] : [];
        this.selectAll = event.checked;
    }

    onChange(event) {
        const { value } = event;
        if (value) this.selectAll = value.length === this.items.length;
    }

    code: Code = {
        basic: `
<p-listbox
    [options]="items"
    [(ngModel)]="selectedItems"
    [selectAll]="selectAll"
    optionLabel="label"
    [style]="{ width: '15rem' }"
    [virtualScroll]="true"
    [filter]="true"
    [virtualScrollItemSize]="43"
    [multiple]="true"
    [checkbox]="true"
    [showToggleAll]="false"
    [metaKeySelection]="false"
    [showToggleAll]="true"
    (onSelectAllChange)="onSelectAllChange($event)"
    (onChange)="onChange($event)"
    [listStyle]="{ 'max-height': '220px' }"
></p-listbox>`,

        html: `
<div class="card flex justify-content-center">
    <p-listbox
        [options]="items"
        [(ngModel)]="selectedItems"
        [selectAll]="selectAll"
        optionLabel="label"
        [style]="{ width: '15rem' }"
        [virtualScroll]="true"
        [filter]="true"
        [virtualScrollItemSize]="43"
        [multiple]="true"
        [checkbox]="true"
        [showToggleAll]="false"
        [metaKeySelection]="false"
        [showToggleAll]="true"
        (onSelectAllChange)="onSelectAllChange($event)"
        (onChange)="onChange($event)"
        [listStyle]="{ 'max-height': '220px' }"
    ></p-listbox>
</div>`,

        typescript: `
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'listbox-virtual-scroll-demo',
    templateUrl: './listbox-virtual-scroll-demo.html'
})
export class ListboxVirtualScrollDemo {
    items = Array.from({ length: 100000 }, (_, i) => ({ label: \`Item #\${i}\`, value: i }))

    selectedItems!: any[];

    selectAll = false;

    onSelectAllChange(event) {
        this.selectedItems = event.checked ? [...this.items] : [];
        this.selectAll = event.checked;
        event.updateModel(this.selectedItems, event.originalEvent)
    }

    onChange(event) {
        const { originalEvent, value } = event
        if(value) this.selectAll = value.length === this.items.length;
    }

}`
    };
}
