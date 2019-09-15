import { Component, OnInit, SystemJsNgModuleLoaderConfig } from '@angular/core';
import {Employee} from '../Models/Employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
 employees: Employee[];

  constructor() { }

  ngOnInit() { 
    this.employees = [
      {
        id: 1,
        name : "Jax",
        age: 28,
        position: "Engineer"

      },
      {
        id: 2,
        name : "Alex",
        age: 28,
        position: "Security Chief"

      },{
        id: 3,
        name : "Hugh",
        age: 28,
        position: "Web Designer"

      }
    ]
  }

}
