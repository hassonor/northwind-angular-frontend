import { GeneratorService } from './../../../services/generator.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotifyService } from 'src/app/services/notify.service';
import { filter, map, reduce, scan, take, takeLast, takeUntil, takeWhile, toArray } from "rxjs/operators"; // rxjs is the name of the library
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-observable-tester',
    templateUrl: './observable-tester.component.html',
    styleUrls: ['./observable-tester.component.css']
})
export class ObservableTesterComponent implements OnInit, OnDestroy {

    private subscription: Subscription;

    public arr: number[] = [];

    constructor(private generator: GeneratorService, private notify: NotifyService) { }

    ngOnInit(): void {

        // // Observable without any operators:
        // this.generator.randomNumbersStream(20).subscribe(
        //     (n: number) => this.arr.push(n),
        //     (err: any) => this.notify.error(err),
        //     () => this.notify.success("Done.")
        // );


        // // Observable with filter operator (performing on-the-fly):
        // this.generator.randomNumbersStream(50).pipe(filter(n => n % 2 === 0)).subscribe(
        //     (n: number) => this.arr.push(n),
        //     (err: any) => this.notify.error(err),
        //     () => this.notify.success("Done.")
        // );


        // // Observable with map operator (performing on-the-fly):
        // this.generator.randomNumbersStream(50).pipe(map(n => n * n)).subscribe(
        //     (n: number) => this.arr.push(n),
        //     (err: any) => this.notify.error(err),
        //     () => this.notify.success("Done.")
        // );


        // // Observable with reduce operator to find final summary (performing once at complete):
        // this.generator.randomNumbersStream(10).pipe(reduce((sum, n) => n + sum)).subscribe(
        //     (n: number) => this.arr.push(n),
        //     (err: any) => this.notify.error(err),
        //     () => this.notify.success("Done.")
        // );


        // // Observable with reduce operator to find final maximum (performing once at complete):
        // this.generator.randomNumbersStream(10).pipe(reduce((max, n) => max > n ? max : n)).subscribe(
        //     (n: number) => this.arr.push(n),
        //     (err: any) => this.notify.error(err),
        //     () => this.notify.success("Done.")
        // );


        // // Observable with take operator (performing on-the-fly):
        // this.generator.randomNumbersStream(50).pipe(take(5)).subscribe(
        //     (n: number) => this.arr.push(n),
        //     (err: any) => this.notify.error(err),
        //     () => this.notify.success("Done.")
        // );


        // // Observable with takeLast operator (performing once at complete):
        // this.generator.randomNumbersStream(10).pipe(takeLast(5)).subscribe(
        //     (n: number) => this.arr.push(n),
        //     (err: any) => this.notify.error(err),
        //     () => this.notify.success("Done.")
        // );


        // // Observable with takeWhile operator (performing on-the-fly):
        // this.generator.randomNumbersStream(10).pipe(takeWhile(n => n < 80)).subscribe(
        //     (n: number) => this.arr.push(n),
        //     (err: any) => this.notify.error(err),
        //     () => this.notify.success("Done.")
        // );


        // // Observable with toArray operator (performing once at complete):
        // this.generator.randomNumbersStream(10).pipe(toArray()).subscribe(
        //     (arr: number[]) => this.arr = arr,
        //     (err: any) => this.notify.error(err),
        //     () => this.notify.success("Done.")
        // );


        // // Observable with take and toArray operator (performing on-the-fly):
        // this.generator.randomNumbersStream(10).pipe(take(5), toArray()).subscribe(
        //     (arr: number[]) => this.arr = arr,
        //     (err: any) => this.notify.error(err),
        //     () => this.notify.success("Done.")
        // );


        // // Observable with scan operator (performing on-the-fly):
        // this.generator.randomNumbersStream(10).pipe(scan((sum, n) => sum + n)).subscribe(
        //     (n: number) => this.arr.push(n),
        //     (err: any) => this.notify.error(err),
        //     () => this.notify.success("Done.")
        // );


        // Always we need to unsubscribe when subscribing to anything:
        this.subscription = this.generator.randomNumbersStream(20).subscribe(
            (n: number) => this.arr.push(n),
            (err: any) => this.notify.error(err),
            () => this.notify.success("Done.")
        );

    }

    // Unsubscribe the observable:
    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
