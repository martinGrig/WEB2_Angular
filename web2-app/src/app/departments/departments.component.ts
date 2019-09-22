import { Component, OnInit, SystemJsNgModuleLoaderConfig } from '@angular/core';
import {Department} from '../Models/Departments';
import {DEPARTMENTS} from '../Models/mock-departments';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  departments = DEPARTMENTS;
  selectedDepartment: Department;

  constructor() { }

  ngOnInit() {
  }

  onSelect(department: Department): void {
    this.selectedDepartment = department;
  }
  
}
