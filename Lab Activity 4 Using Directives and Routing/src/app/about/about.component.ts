import { Component } from '@angular/core';
import { concatWith } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
//String Interpolation
position= 'STUDENT'
work_experience=0
email= 'adcustodio1@student.hau.edu.ph'
website= 'wwww.example.com' 
phone= '507-541-4567'

//Image interpolation/binding
imageUrl:string="assets/logo.png";
imageW: number = 110;
imageH: number = 100;
}
