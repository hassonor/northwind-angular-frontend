import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-sales',
    templateUrl: './sales.component.html',
    styleUrls: ['./sales.component.css']
})
export class SalesComponent {

    @Input()
    public percent: number;

    @Input()
    public category: string;

}
