import { Printable } from "../interfaces/printable";

export function Print(...obj:Printable[]){
    for (const item of obj) {
        console.log(item.toString());
    }
}