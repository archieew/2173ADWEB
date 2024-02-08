import { Component, OnInit } from '@angular/core';
import { Observable, map, interval } from 'rxjs'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
//Date
time$: Observable<Date>;
title = 'midterm';
presentDate = new Date();
//Pipes
constructor() {
this.time$ = interval(1000).pipe (map(()=> new Date()));
}
//Currency 
price: number = 20000; ngOnInit(){
}
Fruits = ["Apple","Orange","Grapes","Mango","Kiwi","Pomegranate"];
//Decimal
decimalNum1: number = 8.75689623;
decimalNum2: number = 5.43;
//Percent
percentNum1: number = 0.259;
percentNum2: number = 1.3496;
//jsonpipe
object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
}
