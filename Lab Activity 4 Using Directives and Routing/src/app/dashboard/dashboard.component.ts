import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  //Using ngIf to toggle text display
showText: boolean = false;

toggleText() {
  this.showText = !this.showText;
}
staff = [ 
  { firstName: 'Archie', lastName: 'Custodio', email: 'adcustodio1@student.hau.edu.ph', role: 'User' },   
  { firstName: 'Aris', lastName: 'Custodio', email: 'Aris.Custodio@test.com', role: 'Admin' }, 
  { firstName: 'Arthur', lastName: 'Custodio', email: '.Custodio@test.com', role: 'Admin' }, 
  { firstName: 'Arnel', lastName: 'Custodio', email: 'Arnel.Custodio@test.com', role: 'User' }, 
  { firstName: 'Nora', lastName: 'Custodio', email: 'Nora.Custodio@test.com', role: 'User' } 
  ];

}
