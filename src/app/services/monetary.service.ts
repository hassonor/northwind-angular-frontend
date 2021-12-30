import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MonetaryService {

    public getPriceWithoutVat(priceIncludingVat: number): number {
        const value = priceIncludingVat * 100 / 117;
        return +value.toFixed(2);
    }

    public getVat(priceIncludingVat: number): number {
        const value = priceIncludingVat * 17 / 117;
        return +value.toFixed(2);
    }
}
