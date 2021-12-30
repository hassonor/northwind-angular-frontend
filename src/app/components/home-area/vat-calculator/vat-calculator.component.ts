import { MonetaryService } from './../../../services/monetary.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-vat-calculator',
    templateUrl: './vat-calculator.component.html',
    styleUrls: ['./vat-calculator.component.css']
})
export class VatCalculatorComponent {

    public priceIncludingVat: number;
    public priceWithoutVat: number;
    public vat: number;

    constructor(private monetary: MonetaryService) { }

    public calc(): void {
        this.priceWithoutVat = this.monetary.getPriceWithoutVat(this.priceIncludingVat);
        this.vat = this.monetary.getVat(this.priceIncludingVat);
    }

}
