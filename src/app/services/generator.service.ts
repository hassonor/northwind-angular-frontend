import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GeneratorService {

    public randomNumbersStream(count: number): Observable<number> {

        return new Observable((myObserver: Observer<number>) => {

            const timerId = setInterval(() => {

                // next reports the next value:
                const num = Math.floor(Math.random() * 100);
                myObserver.next(num);
                count--;

                // complete reports a final success of the observable and close it:
                if(count === 0) {
                    clearInterval(timerId);
                    myObserver.complete();
                }

                // // Demo for some error:
                // if(count === 10) {
                //     clearInterval(timerId);
                //     myObserver.error("Some error demo...");
                // }

            }, 500);

        });

    }

}
