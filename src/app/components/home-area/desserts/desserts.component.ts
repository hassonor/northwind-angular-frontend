import { Component } from '@angular/core';

@Component({
    selector: 'app-desserts',
    templateUrl: './desserts.component.html',
    styleUrls: ['./desserts.component.css']
})
export class DessertsComponent {

    public items = [
        { id: 1, name: "Ice Cream" },
        { id: 2, name: "Pavlova" },
        { id: 3, name: "Eclair" }
    ];

    

}
