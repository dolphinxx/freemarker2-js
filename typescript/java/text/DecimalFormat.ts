import {DecimalFormatSymbols} from "./DecimalFormatSymbols";
import {NumberFormat} from "./NumberFormat";

export class DecimalFormat extends NumberFormat{
    public constructor(pattern?:string, symbols?:DecimalFormatSymbols) {
        super();
    }

    public format(num:number):string {
        return num + '';
    }
}