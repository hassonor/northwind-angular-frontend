import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent {

    public monthAndYear: string;

    public constructor() {
        const now = new Date();
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const currentMonth = months[now.getMonth()];
        const currentYear = now.getFullYear();
        this.monthAndYear =  currentMonth + " " + currentYear;
    }
}
