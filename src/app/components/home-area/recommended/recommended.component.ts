import { Component } from '@angular/core';

@Component({
    selector: 'app-recommended',
    templateUrl: './recommended.component.html',
    styleUrls: ['./recommended.component.css']
})
export class RecommendedComponent {

    private product = "Red Wine";

    public recommend(args: MouseEvent): void {
        console.log(args);
        alert("Our recommended product: " + this.product);
    }

}
