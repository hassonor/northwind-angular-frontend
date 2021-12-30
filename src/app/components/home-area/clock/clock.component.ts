import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'app-clock',
    templateUrl: './clock.component.html',
    styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, OnDestroy {

    public time: string;
    public timerId: number;

    // ctor - object has been created.
    constructor() { }

    // component is ready for use (like componentDidMount). 
    ngOnInit(): void {
        this.timerId = window.setInterval(() => {
            const d = new Date();
            this.time = d.toLocaleTimeString();
        }, 1000);
    }

    // component is about to be destroyed (like componentWillUnmount):
    ngOnDestroy(): void {
        window.clearInterval(this.timerId);
    }

}
