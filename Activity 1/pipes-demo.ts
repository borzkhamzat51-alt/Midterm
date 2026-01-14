import { AsyncPipe, CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import {interval} from 'rxjs';
import {map} from 'rxjs';

@Component({
  selector: 'app-pipes-demo',
  imports: [DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe, SlicePipe, DecimalPipe, AsyncPipe, PercentPipe, TitleCasePipe, JsonPipe],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo {
  presentDate = new Date();
  price = 2000;
  Fruits = ["Apple", "Orange","Grapes", "Mango", "Kiwi", "Pomegranate"];
  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;

  time$ = interval(1000)
  .pipe(map(val => new Date()));


  transform(
    value: number,
    symbol: string = '₱',
    decimal: number = 2
  ): string {

    if (value == null) return '';

    const formatted = value.toFixed(decimal)
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return `${symbol} ${formatted}`;
  }

  value: string = "Foxcatcher"

  emp: Object = {
    "list": [
              {
            "name":"Justin Miranda",
            "position":"Web Developer",
            "office":"New Mexico",
            "salary":"$30000",
            "edit":"Edit",
            "delete":"Delete"

        },
        {
            "name":"Delos Nelly Reyes",
            "position":"Manager",
            "office":"Clark",
            "salary":"$90000",
            "edit":"Edit",
            "delete":"Delete"
        },
    ]
  }
}
