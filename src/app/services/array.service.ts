import { Injectable } from "@angular/core";

// Tell Angular to create a DI object from ArrayService for the entire app: 
@Injectable({
    providedIn: "root"
})
class ArrayService {

    public getSum(arr: number[]): number {
        let sum = 0;
        for(const item of arr) {
            sum += item;
        }
        return sum;
    }

}

export default ArrayService;
