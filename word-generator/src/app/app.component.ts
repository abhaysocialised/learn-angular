import { Component } from '@angular/core';
import arrayWords from "../utils/words"
import {countries} from "../utils/words"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';

  countriesNames:string = "";
  words:string = "";
  limit:number = 10;

  min:number = 1
  max:number = arrayWords.length

  handleSlideChange(newLimit: number){
    this.limit = newLimit;
  }

  generate(){
    this.words = arrayWords.slice(0, this.limit).join(", ")
  }

  generateCountries() {
    let max:number = countries.length

    let randomNumber:number = Math.floor(Math.random()*max)
    this.countriesNames = countries.slice(0, randomNumber).join(", ")
  }

}
