import {Component} from "@angular/core";

let tnum:number = 0;

@Component({
    selector: "card",
    templateUrl: "./card.component.html",
    styleUrls: ["./card.component.css"]
})
export class CardComponent {
    cardNumber:number = tnum;
    constructor() {
        tnum += 1;
    }
}