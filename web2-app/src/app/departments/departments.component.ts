import { Component, OnInit, SystemJsNgModuleLoaderConfig } from '@angular/core';
import {Department} from '../Models/Departments';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  departments: Department[];

  constructor() { }

  ngOnInit() { 
    this.departments = [
      {
        id: 1,
        name : "HR",
        location: "Tilburg"

      },
      {
        id: 2,
        name : "Security",
        location: "Amsterdam"

      },{
        id: 3,
        name : "Engineering",
        location: "Eindhoven"

      }
    ]
}
}
