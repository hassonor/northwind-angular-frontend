import { Component, OnInit } from '@angular/core';
import ArrayService from 'src/app/services/array.service';

@Component({
    selector: 'app-inventory',
    templateUrl: './inventory.component.html',
    styleUrls: ['./inventory.component.css'],

    // Tell Angular to create a DI object from ArrayService only in this component's Scope: 
    // providers: [ArrayService]
})
export class InventoryComponent implements OnInit {

    public stocks = [100, 150, 200, 70];
    public total: number;

    // DI: 
    constructor(private myArrayService: ArrayService) { }

    ngOnInit(): void {

        // Never create your own object from the service:
        // const myArrayService = new ArrayService();

        this.total = this.myArrayService.getSum(this.stocks);
    }

}
