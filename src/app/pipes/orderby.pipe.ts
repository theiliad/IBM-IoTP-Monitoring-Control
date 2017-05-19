import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'orderBy'})

export class OrderBy implements PipeTransform {
    transform(obj: any, field: string): any {
        // Ascending order
        var orderASC = true;

        if (field[0] === '-') {
            field = field.substring(1);
            orderASC = false;
        }

        obj.sort(function(a, b) {
            const aField = a[field]
                , bField = b[field];

            if (isNaN(aField)) aField.toLowerCase();
            if (isNaN(bField)) bField.toLowerCase();

            // If order is ascending
            if (orderASC) {
                if (aField < bField) return -1;
                if (aField > bField) return 1;

                return 0;
            } else {
                if (aField < bField) return 1;
                if (aField > bField) return -1;

                return 0;
            }
        });
        
        return obj;
    }
}