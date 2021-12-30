import { Component } from '@angular/core';

@Component({
  selector: 'app-specials',
  templateUrl: './specials.component.html',
  styleUrls: ['./specials.component.css']
})
export class SpecialsComponent {

    public isWeekend(): boolean {
        const now = new Date();
        const dayOfWeek = now.getDay() + 1;
        return dayOfWeek >= 6;
    }


}
