import { Component, OnInit, SystemJsNgModuleLoaderConfig } from '@angular/core';
import {Employee} from '../employees';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees:Employee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees()
    .subscribe(employees => this.employees = employees);
  }

  add(first_name: string): void {
    first_name = first_name.trim();
    if (!first_name) { alert("Please type a name"); return; }
    this.employeeService.addEmployee({ first_name } as Employee)
      .subscribe(employee => {
        this.employees.push(employee);
      });
  }

  delete(employee: Employee): void {
    this.employees = this.employees.filter(h => h !== employee);
    this.employeeService.deleteEmployee(employee).subscribe();
  }
 

}
