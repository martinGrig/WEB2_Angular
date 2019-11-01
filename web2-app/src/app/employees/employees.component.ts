import { Component, OnInit, SystemJsNgModuleLoaderConfig } from '@angular/core';
import {Employee} from '../employees';
import { EmployeeService } from '../employee.service';
import { DepartmentService } from '../department.service';
import { Department } from '../departments';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees:Employee[];
  departments: Department[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees()
    .subscribe(employees => this.employees = employees);
  }

  add(first_name: string, last_name: string): void {
    first_name = first_name.trim();
    last_name = last_name.trim();
    //birth_date = null;
    //dep_number = this.departments[0].id;

    if (!first_name) { alert("Please type a name"); return; }
    this.employeeService.addEmployee({ first_name, last_name} as Employee)
      .subscribe(employee => {
        this.employees.push(employee);
      });
  }

  delete(employee: Employee): void {
    if(confirm("Are you sure?")) {
    this.employees = this.employees.filter(h => h !== employee);
    this.employeeService.deleteEmployee(employee).subscribe();
    }
  }
 

}
