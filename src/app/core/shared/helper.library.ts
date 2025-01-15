import { DatePipe, formatDate } from "@angular/common";
import { environment } from "src/environments/environment";

export class Helper
{
    static toDateString(date:any, ):string{
        return date ? formatDate(date, environment.dateStringFormat, environment.localeFormat): '';
    }

    static toShortDateString(date:any, ):string{
        return date ? formatDate(date, environment.shortDateStringFormat, environment.localeFormat): '';
    }

    // in order to not lose the reference of the current list item
    // the resulting properties must be copied to the original reference
    // (id, creation/modification information etc.) the spread operator 
    // {...result} doesn't work as it breaks the reference  
    static transfer<T extends object>(source: T, destination: T) {
        Object.keys(source).forEach((key) => {
        if (source[key as keyof T])
            destination[key as keyof T] = source[key as keyof T]
        })
    }

    // error message formatting depending on its type
    static errorMessage(err:any):string{
        if (err && err.error && err.error.errors) {
            const modalStateErrors = [];
            for (const key in err.error.errors) {
                if (err.error.errors[key]) {
                modalStateErrors.push(err.error.errors[key])
                }
            }
            return modalStateErrors.flat().join(',');
        } 
        else if (typeof(err.error) === 'object') {
            return err.status + ' : ' + err.message;
        } 
        else if (err.error) {
            return err.error
        }
        else {
            return err;
        }
    }

    static isEmpty(obj:any): boolean {
        return Object.keys(obj).length === 0;
      }
}