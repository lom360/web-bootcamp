import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'summary' // This is called summary because that is what we are calling the 'pipe'
})

// 'implements' means that the class SummaryPipe should have the same shape as PipeTransform
// Since PipeTransform has the the method 'transform', then SummaryPipe needs it as well.
// Otherwise there would a compilation error.
export class SummaryPipe implements PipeTransform {
    transform(value: string, limit?: number){
        if(!value) {
            return null;
        }
        let actualLimit = (limit) ? limit : 50;
        return value.substr(0, actualLimit) + '...';
    }
}